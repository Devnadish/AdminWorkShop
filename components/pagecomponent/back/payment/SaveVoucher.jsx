"use client";
import React, { useState } from "react";
import ClearButton from "@/components/shared/ClearButton";
import INPUT from "@/components/shared/INPUT";
import Submit from "@/components/shared/Submit";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import { savePaymentVoucher } from "@/db/payment";
import { updateClientPaymentBalance } from "@/db/payment";
import { Car, Check, CircleDollarSign } from "lucide-react";
import { fixValidateForm } from "@/lib/validation/payment";
import OpenFixingCard from "./OpenFixingCard";
import {  getCarInfoForVoucher } from "@/db/cars";
import { CheckCarInfoForVoucher } from "@/components/shared/CheckCarInfoForVoucher";
function SaveVoucher({ data }) {
  const [carId, setCarId] = useState("");
  const [info, setInfo] = useState({});
  const [result, setResult] = useState({});
  const [open, setOpen] = useState(false);

  const findClientByCarId = async () => {
    try {
      const car = await getCarInfoForVoucher(carId);
      if (car.Carexisit === 'not Exisit') {
        toast.error(car.msg);
        setInfo({});
        return
      }

      setInfo({
        clientId: car.carInfo.clientId,
        clientName: car.carInfo.clientName,
        fixOrderId: car.carInfo.fixOrederId,
        fixamt: car.carInfo.fixOrederAmt,
        recipt: car.recipt,
        balance: car.carInfo.fixOrederAmt - car.recipt
      });
    } catch (error) {
      console.log(error) // Handle any unexpected errors here
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

      {/* <div className="flex items-center self-start gap-3 flex-col">
        <div className="flex items-center  gap-3">
          <INPUT
            placeholder={" رقم السيارة"}
            name={"CarId"}
            type={"text"}
            icon={<Car />}
            cN="flex-1"
            h="h-9"
            w="w-[200px]"
            textsize="text-[1.5rem]"
            //   bgColor="bg-red-300"
            id="CarId"
            value={carId}
            onChange={(e) => {
              setCarId(e.target.value);
            }}
          />
          <Button
            onClick={() => {
              findClientByCarId();
            }}
            className="h-9 bg-orange-700"
            type="button"
          >
            <Check />
          </Button>
        </div>
        {info.clientName && carId && (
          <div className="flex items-start self-start gap-3 flex-col bg-slate-700 w-full p-3 shadow-xl ">
            <p className="flex gap-4">
              <span>اسم العميل</span>
              {info.clientName}
            </p>
            <p className="flex gap-4">
              <span>رقم امر الاصلاح</span>
              {info.fixOrderId}
            </p>
          </div>
        )}
      </div> */}
      <CheckCarInfoForVoucher carId={carId} setCarId={setCarId} info={info} setInfo={setInfo} />
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
