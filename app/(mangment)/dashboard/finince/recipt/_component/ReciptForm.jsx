"use client";
import React, { useState } from "react";
import Submit from "@/components/shared/Submit";
import { Textarea } from "@/components/ui/textarea";
import { CircleDollarSign, Calendar} from "lucide-react";
import INPUT from "@/components/shared/INPUT";
import ClearButton from "@/components/shared/ClearButton";
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
import SelectOpenCard from "@/app/(mangment)/dashboard/finince/_component/SelectOpenCard";

function ReciptForm({ openCards }) {
  const [carId, setCarId] = useState("")
  const [Client, setClient] = useState({ claientId: "", clientName: "", fixOrederId: "", fixAmount: 0 })
  const [result, setResult] = useState({});
  const [open, setOpen] = useState(false);
  var today = new Date();
  var year = today.getFullYear();
  var month = String(today.getMonth() + 1).padStart(2, '0');
  var day = String(today.getDate()).padStart(2, '0');
  var currentDate = day + '-' + month + '-' + year;

  // var currentDate = today.toISOString().slice(0, 10);


  const handleSubmit = async (data) => {
    const detail = data.get("detail");
    const amount = parseFloat(data.get("amount"));
    const docDate = new Date(data.get("docDate")).toISOString().slice(0, 10);
    const RecietData = {
      detail,
      fromID: parseFloat(Client.claientId) || null,
      fromName: Client.clientName,
      amount,
      fixingCode: parseFloat(Client.fixOrederId) || null,
      docDate,
    };
    const validation = validateForm(RecietData, Client.fixAmount);
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
    setCarId("")
    setClient({ claientId: "", clientName: "", fixOrederId: "", fixAmount: 0 })
    document.getElementById("RecietForm").reset()
    setOpen(true);
  };






  return (
    <div className="flex flex-col items-center justify-center w-full  border p-4 rounded-md border-white/30 gap-4">
      <SelectOpenCard openCards={openCards} setCarId={setCarId} carId={carId} Client={Client} setClient={setClient}/>
      <form
        action={handleSubmit}
        id="RecietForm"
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
            // defaultValue={currentDate}
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
