"use client";
import React, { useState } from "react";
import Submit from "@/components/shared/Submit";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CircleDollarSign, Search } from "lucide-react";
import INPUT from "@/components/shared/INPUT";
import ClearButton from "@/components/shared/ClearButton";
import { getCarInfoForVoucher } from "@/db/cars";
import toast from "react-hot-toast";
import { validateForm } from "@/lib/validation/recipt";
import { saveRecietVoucher } from "@/db/reciet";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { CheckCarInfoForVoucher } from "@/components/shared/CheckCarInfoForVoucher";

function ReciptForm() {
  const [carId, setCarId] = useState("")
  const [info, setInfo] = useState({})
  const [result, setResult] = useState({});
  const [open, setOpen] = useState(false);


  const handleSubmit = async (data) => {
    const detail = data.get("detail");
    const amount = parseFloat(data.get("amount"));
    const docDate = new Date(data.get("docDate")).toISOString().slice(0, 10);
    const RecietData = {
      detail,
      fromID: parseFloat(info.clientId),
      fromName: info.clientName,
      amount,
      fixingCode: parseFloat(info.fixOrderId),
      docDate,
    };

    const validation = validateForm(RecietData, info.balance);
    if (!validation.isValid) {
      toast.error(validation.errorMessage);
      return;
    }

    const Reciet = await saveRecietVoucher(RecietData);

    setResult({
      recietNo: Reciet.recietNo,
      client: Reciet.client,
      amt: Reciet.amt,
      fixNo: Reciet.fixNo,
      msg: Reciet.msg,
    });
    setInfo({})
    setCarId("")
    document.getElementById("RecietForm").reset()
    setOpen(true);
  };






  return (
    <div className="flex flex-col items-center justify-center w-full  border p-4 rounded-md border-white/30 gap-4">
      <CheckCarInfoForVoucher carId={carId} setCarId={setCarId} info={info} setInfo={setInfo} />
      <form
        action={handleSubmit}
        id="RecietForm"
        className=" w-full flex flex-col items-center gap-2 "
      >
        <div className=" flex items-start justify-start flex-col   gap-4 w-full ">
          {/* <FindCar/> */}

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
            id="amount"
          />
        </div>
        {/* header */}

        <div className="relative   w-full  ">
          <Label
            htmlFor="description"
            className="absolute -top-5 left-2  bg-yellow-300 text-black text-md px-3 rounded-md font-normal py-1"
          >
            الوصف
          </Label>
          <Textarea
            type="text"
            name="detail"
            placeholder="مرجعية المبلغ"
            className="border border-gray-300 rounded px-4 py-2 w-full resize-none"
            rows={3}
          />
        </div>

        <div className="flex items-center justify-around w-full">
          <Submit />
          <ClearButton formId={"RecietForm"} FoucFiled={"amount"} />
        </div>
      </form>
      <ShowAlert open={open} setIsopen={setOpen} data={result} />
    </div>
  );
}

export default ReciptForm;

const ShowAlert = ({ open, setIsopen, data }) => {
  return (

    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>تم انشاء سند فبض</AlertDialogTitle>
        </AlertDialogHeader>

        <div className="flex flex-col">
          <div className="flex items-center justify-between border-b-2  py-1 mb-5">
            <p className="flex gap-4 ">
              <span>رقم السند</span>
              <span className="">{data.recietNo}</span>
            </p>
            <p className="flex gap-4">
              <span>رقم امر الاصلاح</span>
              {data.fixNo}
            </p>
          </div>

          <p className="flex gap-4">
            <span>اسم العميل</span>
            {data.client}
          </p>
          <p className="flex gap-4 bg-green-950 text-white self-end px-4 py-2 rounded text-xl font-semibold">
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
