"use client";
import React, { useState } from "react";
import Submit from "@/components/shared/Submit";
import { Textarea } from "@/components/ui/textarea";
import { CircleDollarSign, Calendar} from "lucide-react";
import INPUT from "@/components/shared/INPUT";
import ClearButton from "@/components/shared/ClearButton";
import { validateForm } from "@/lib/validation/recipt";
import { savePaymentVoucher } from "@/db/payment";
import { ShowAlert } from "../../_component/ShowAlert";
import { toast } from "sonner"

function PaymentVoucher({ fromID,  fromName,  fixingCode }) {
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
      fromID: parseFloat(fromID) || null,
      fromName: fromName,
      fixingCode: parseFloat(fixingCode) || null,
    };

    const validation = validateForm(Paymentdata);
    if (!validation.isValid) {
      toast.error(validation.errorMessage);
      return;
    }

    const payment = await savePaymentVoucher(Paymentdata);
    
    setResult({
      paymentNo: payment.paymentNo,
      client: payment.client,
      amt: payment.amt,
      fixNo: payment.fixNo,
      msg: payment.msg,
      detail:payment.detail
    });
    document.getElementById("paymentForm").reset()
    setOpen(true);
     
  };

  return (
    <>
      <form
        action={handleSubmit}
        id="paymentForm"
        className=" w-full flex flex-col items-center gap-2 bg-gray-400 rounded-md  shadow-lg py-3 px-3"
      >
        <div className=" flex items-center justify-between w-full  border-b p-4  gap-4 ">
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
            id="amount"
            bgColor="bg-white"
            roundedCorners="rounded-none"
            value={currentDate}
            disabled
            iconBgColor="bg-red-500"
          />
        </div>
        <div className="relative   w-full  ">
          <Textarea
            type="text"
            name="detail"
            placeholder="وصف السند"
            className="border bg-white border-red-500 rounded-md px-4 py-2 w-full resize-none"
            rows={3}
          />
        </div>
        <div className="flex items-center gap-4  w-full justify-end">
          <Submit color="bg-red-500" title="حفظ سند صرف تشغيلي" />
          <ClearButton formId={"RecietForm"} FoucFiled={"amount"} />
        </div>
      </form>
      <ShowAlert open={open} setIsopen={setOpen} data={result} />
    </>
  );
}
export default PaymentVoucher;


