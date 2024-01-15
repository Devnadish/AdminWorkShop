"use client";
import React, { useState } from "react";
import ClearButton from "@/components/shared/ClearButton";
import INPUT from "@/components/shared/INPUT";
import Submit from "@/components/shared/Submit";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import { savePaymentVoucher } from "@/db/payment";
import { updateClientPaymentBalance } from "@/db/payment";
import {   CircleDollarSign } from "lucide-react";
import { fixValidateForm } from "@/lib/validation/payment";
import { CheckCarInfoForVoucher } from "@/components/shared/CheckCarInfoForVoucher";
import { getCarInfoForVoucher } from "@/db/cars";
function SaveVoucher({ data }) {
  const [carId, setCarId] = useState("");
  const [info, setInfo] = useState({});
  const [isloading, setIsloading] = useState(false)




  const findClientByCarId = async () => {
    try {
      setIsloading(true)
      const car = await getCarInfoForVoucher(carId);
      if (car.Carexisit === 'not Exisit') {
        toast.error(car.msg);
        setInfo({});
        return 'not Exisit'
      }

      setInfo({
        clientId: car.carInfo.clientId,
        clientName: car.carInfo.clientName,
        fixOrderId: car.carInfo.fixOrederId,
        fixamt: car.carInfo.fixOrederAmt,
        recipt: car.recipt,
        payment: car.payment,
        balance: (car.carInfo.fixOrederAmt - car.recipt) + car.payment

      });
    } catch (error) {
      console.log(error) // Handle any unexpected errors here
    } finally {
      setIsloading(false)
    }

  };


  const handleSubmit = async (data) => {
    const amount = parseFloat(data.get("amount"));
    const detail = data.get("detail");
    const docDate = new Date(data.get("docDate")).toISOString().slice(0, 10);
    const fromID = parseFloat(info.clientId);
    const fromName = info.clientName;
    const fixingCode = parseFloat(info.fixOrderId);
    const paymentType = "fixing";
    const collector = "سند تشغيلي";
    const Paymentdata = {
      amount,
      detail,
      paymentType,
      docDate,
      collector,
      fromID,
      fromName,
      fixingCode,
    };
    const car = await findClientByCarId(carId);
    if (car === 'not Exisit') {
      // toast.error(car.msg);
      setInfo({});
      return
    }
    const validation = fixValidateForm(Paymentdata);
    if (!validation.isValid) {
      toast.error(validation.errorMessage);
      return;
    }

    try {
      const VoucerNo = await savePaymentVoucher(Paymentdata);
      const pay = updateClientPaymentBalance(fromID, amount);
      const msg = `تم صرف مبلغ  ${VoucerNo.amount} بموجب سند صرف رقم  ${VoucerNo.paymentId}`;
      toast.success(msg, { duration: 5000 });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" flex flex-col gap-4  items-center justify-between  border border-white/30 rounded-md p-4 w-full">


      <CheckCarInfoForVoucher carId={carId} setCarId={setCarId} info={info} setInfo={setInfo}
        isloading={isloading}
        setIsloading={setIsloading}
        findClientByCarId={findClientByCarId}
      />
      <form
        id="paymentForm"
        className="w-full flex flex-col gap-4 items-start justify-start "
        action={handleSubmit}
      >


          <INPUT
            placeholder={"المبلغ"}
            name={"amount"}
            type={"number"}
            icon={<CircleDollarSign />}
            cN="flex-1"
            h="h-[50px]"
            w="w-[200px]"
            textsize="text-[1.5rem]"
            bgColor="bg-red-300"
            id="amountId"
          />


        <Textarea
          id="status"
          name="detail"
          rows={3}
          placeholder="تفاصيل السند"
          className="border border-gray-300 rounded px-4 py-2 w-full resize-none"
        />

        <div className="flex items-center justify-around w-full">
          <Submit />
          <ClearButton formId={"paymentForm"} FoucFiled={"amountId"} />
        </div>
      </form>
    </div>
  );
}

export default SaveVoucher;
