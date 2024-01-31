"use client";
import React, { useState } from "react";
import Submit from "@/components/shared/Submit";
import { Textarea } from "@/components/ui/textarea";
import { CircleDollarSign, Calendar} from "lucide-react";
import INPUT from "@/components/shared/INPUT";
import ClearButton from "@/components/shared/ClearButton";
import { toast } from "sonner"
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
import { ShowAlert } from "../../_component/ShowAlert";

function ReciptForm({ fromID,  fromName,  fixingCode }) {
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
    const RecietData = {
      detail,
      fromID: parseFloat(fromID) || null,
      fromName: fromName,
      amount,
      fixingCode: parseFloat(fixingCode) || null,
      docDate,
    };
    const validation = validateForm(RecietData);
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
    document.getElementById("RecietForm").reset()
    setOpen(true);
  };






  return (
    <>
      <form
        action={handleSubmit}
        id="RecietForm"
        className=" w-full flex flex-col items-center gap-2 bg-gray-400 rounded-md  shadow-lg py-3"
      >
        <div className=" flex items-center justify-between w-full  border-b p-4  gap-4">
          <INPUT
            placeholder={"المبلغ"}
            name={"amount"}
            type={"number"}
            icon={<CircleDollarSign />}
            cN="flex-1"
            h="h-9"
            w="w-[170px]"
            textsize="text-[1.5rem]"
            bgColor="bg-white"
            id="amount"
            roundedCorners="rounded-none"
            iconBgColor="bg-red-500"
          />
          <INPUT
            name={"amount"}
            type={"text"}
            icon={<Calendar />}
            w="w-[170px]"
            textsize="text-[1rem]"
            bgColor="bg-white"
            id="amount"
            roundedCorners="rounded-none"
            value={currentDate}
            disabled
          />
        </div>
        <div className="relative   w-full px-3 ">
          <Textarea
            type="text"
            name="detail"
            placeholder="وصف السند"
            className="border bg-white border-red-500 rounded-md px-4 py-2 w-full resize-none"
            rows={3}
          />
        </div>

        <div className="flex items-center gap-4  justify-end px-3 w-full">
        <Submit color="bg-red-500" title="حفظ سند القبض" />
          <ClearButton formId={"RecietForm"} FoucFiled={"amount"} />
        </div>
      </form>
      <ShowAlert open={open} setIsopen={setOpen} data={result} />
    </>
  );
}

export default ReciptForm;

