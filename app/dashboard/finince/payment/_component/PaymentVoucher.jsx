"use client";
import React, { useState } from "react";
import Submit from "@/components/sharedcompnent/Submit";
import { Textarea } from "@/components/ui/textarea";
import { CircleDollarSign, Calendar } from "lucide-react";
import INPUT from "@/components/sharedcompnent/INPUT";
import ClearButton from "@/components/sharedcompnent/ClearButton";
import { validateForm } from "@/lib/validation/recipt";
import { savePaymentVoucher } from "@/db/payment";
import { toast } from "sonner";

function PaymentVoucher({ fromID, fromName, fixingCode }) {
  var today = new Date();
  var year = today.getFullYear();
  var month = String(today.getMonth() + 1).padStart(2, "0");
  var day = String(today.getDate()).padStart(2, "0");
  var currentDate = day + "-" + month + "-" + year;

  const handleSubmit = async (data) => {
    const detail = data.get("detail");
    const amount = parseFloat(data.get("amount"));
    const docDate = new Date(data.get("docDate")).toISOString().slice(0, 10);
    const Paymentdata = {
      amount,
      detail,
      paymentType: "fixing",
      collector: "سند تشغيلي",
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

    document.getElementById("paymentForm").reset();
    toast.success("تم انشاء سند الصرف بنجاح");
  };

  return (
    <>
      <form
        action={handleSubmit}
        id="paymentForm"
        className=" w-full flex flex-col items-center gap-2 bg-background/40 rounded-md  shadow-lg py-3 px-3"
      >
        <div className=" flex items-center justify-between w-full  border-b p-4  gap-4 ">
          <INPUT
            placeholder={"المبلغ"}
            name={"amount"}
            type={"number"}
            icon={<CircleDollarSign />}
            textsize="text-[1rem]"
            id="amount"
            roundedCorners="rounded-none"
            iconBgColor="bg-destructive"
          />
          <INPUT
            name={"date"}
            type={"text"}
            icon={<Calendar />}
            textsize="text-[1rem]"
            id="date"
            value={currentDate}
            disabled
          />
        </div>
        <div className="relative   w-full  ">
          <Textarea
            type="text"
            name="detail"
            placeholder="وصف السند"
            className="border   border-destructive rounded-md px-4 py-2 w-full resize-none"
            rows={3}
          />
        </div>
        <div className="flex items-center gap-4  w-full justify-end">
          <Submit color="bg-destructive" title="حفظ سند صرف تشغيلي" />
          <ClearButton formId={"RecietForm"} FoucFiled={"amount"} />
        </div>
      </form>
    </>
  );
}
export default PaymentVoucher;
