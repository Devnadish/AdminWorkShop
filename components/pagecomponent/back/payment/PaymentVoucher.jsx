"use client";
import React, { useState } from "react";
import Submit from "@/components/shared/Submit";
import { Textarea } from "@/components/ui/textarea";
import { CircleDollarSign, Calendar} from "lucide-react";
import INPUT from "@/components/shared/INPUT";
import ClearButton from "@/components/shared/ClearButton";
import toast from "react-hot-toast";
import { validateForm } from "@/lib/validation/recipt";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import SelectOpenCard from "@/components/pagecomponent/back/finice/SelectOpenCard";
import { savePaymentVoucher } from "@/db/payment";

function PaymentVoucher({ openCards }) {
  const [carId, setCarId] = useState("")
  const [Client, setClient] = useState({ claientId: "", clientName: "", fixOrederId: "", fixAmount: 0 })
  const [result, setResult] = useState({});
  const [open, setOpen] = useState(false);
  var today = new Date();
  var year = today.getFullYear();
  var month = String(today.getMonth() + 1).padStart(2, '0');
  var day = String(today.getDate()).padStart(2, '0');
  var currentDate = day + '-' + month + '-' + year;


  const handleSubmit = async (data) => {
    const detail = data.get("detail");
    const amount = parseFloat(data.get("amount"));
    const docDate = new Date(data.get("docDate")).toISOString().slice(0, 10);
    const Paymentdata = {
      amount,
      detail,
      paymentType:"fixing",
      collector:"سند تشغيلي",
      docDate,
      fromID: parseFloat(Client.claientId) || null,
      fromName: Client.clientName,
      fixingCode: parseFloat(Client.fixOrederId) || null,
    };

    const validation = validateForm(Paymentdata, Client.fixAmount);
    if (!validation.isValid) {
      toast.error(validation.errorMessage);
      return;
    }

    const payment = await savePaymentVoucher(Paymentdata);
    console.log(payment)
    setResult({
      paymentNo: payment.paymentNo,
      client: payment.client,
      amt: payment.amt,
      fixNo: payment.fixNo,
      msg: payment.msg,
    });
    setCarId("")
    setClient({ claientId: "", clientName: "", fixOrederId: "", fixAmount: 0 })
    document.getElementById("paymentForm").reset()
    setOpen(true);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full  border p-4 rounded-md border-white/30 gap-4">
      <SelectOpenCard openCards={openCards} setCarId={setCarId} carId={carId} Client={Client} setClient={setClient}/>
      <form
        action={handleSubmit}
        id="paymentForm"
        className=" w-full flex flex-col items-center gap-2 "
      >
        <div className=" flex items-center justify-between     gap-4 w-full ">
          {/* <FindCar/> */}

          <INPUT
            placeholder={"المبلغ"}
            name={"amount"}
            type={"number"}
            icon={<CircleDollarSign />}
            cN="flex-1"
            h="h-9"
            w="w-[170px]"
            textsize="text-[1.5rem]"
            bgColor="bg-gray-300"
            id="amount"
            roundedCorners="rounded-none"
          />
          <INPUT
            // placeholder={"التاريخ"}
            name={"amount"}
            type={"text"}
            icon={<Calendar />}
            w="w-[170px]"
            textsize="text-[1rem]"
            bgColor="bg-gray-300"
            id="amount"
            roundedCorners="rounded-none"
            value={currentDate}
            defaultValue={currentDate}
            disabled
          />
        </div>
        {/* header */}

        <div className="relative   w-full  ">

          <Textarea
            type="text"
            name="detail"
            placeholder="وصف السند"
            className="border border-gray-300 rounded px-4 py-2 w-full resize-none"
            rows={3}
          />
        </div>

        <div className="flex items-center gap-4  w-1/2 self-end">
          <Submit />
          <ClearButton formId={"RecietForm"} FoucFiled={"amount"} />
        </div>
      </form>
      <ShowAlert open={open} setIsopen={setOpen} data={result} />
    </div>
  );
}

export default PaymentVoucher;

const ShowAlert = ({ open, setIsopen, data }) => {
  return (

    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="w-full bg-black/20 rounded flex items-center justify-center py-1">تم انشاء سند صرف تشغيلي</AlertDialogTitle>
        </AlertDialogHeader>
        <div className="flex flex-col">
          <div className="flex items-center justify-between border-b-2  py-1 ">
            <p className="flex gap-4  bg-black/20 rounded flex items-center justify-center py-1 px-4">
              <span className="px-4 ">رقم السند</span>
              <span className="px-4 bg-black/30 text-white rounded">{data.paymentNo}</span>
            </p>
            <p className="flex gap-4  bg-black/20 rounded flex items-center justify-center py-1 px-3">
              <span>رقم امر الاصلاح</span>
               <span className="px-4 bg-black/30 text-white rounded">{data.fixNo}</span>
            </p>
          </div>
          <p className="flex gap-4  bg-black/20  flex items-center gap-4  py-1 px-3 rounded-r">
            <span>اسم العميل</span>
            <span>{data.client}</span>
          </p>
          <p className="flex gap-4 bg-black/20 text-black self-end px-4 py-2  text-xl font-semibold">
            <span>المبلغ</span>
            <span className="bg-red-500 px-3 rounded">
              {data.amt}
            </span>
          </p>
        </div>

        <AlertDialogFooter className="flex items-center gap-4">
          <AlertDialogAction onClick={() => setIsopen(false)}>
            اغلاق
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
