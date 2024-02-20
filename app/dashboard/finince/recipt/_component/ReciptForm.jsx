"use client";
import React, { useState } from "react";
import Submit from "@/components/sharedcompnent/Submit";
import { Textarea } from "@/components/ui/textarea";
import { CircleDollarSign, Calendar } from "lucide-react";
import INPUT from "@/components/sharedcompnent/INPUT";
import ClearButton from "@/components/sharedcompnent/ClearButton";

import { validateForm } from "@/lib/validation/recipt";
import { saveRecietVoucher } from "@/db/reciet";
import { Notify } from "@/lib/notify";

function ReciptForm({ fromID, fromName, fixingCode }) {
  var today = new Date();
  var year = today.getFullYear();
  var month = String(today.getMonth() + 1).padStart(2, "0");
  var day = String(today.getDate()).padStart(2, "0");
  var currentDate = day + "-" + month + "-" + year;

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
      Notify(validation.errorMessage,"error")
      return;
    }

    const Reciet = await saveRecietVoucher(RecietData);
    document.getElementById("RecietForm").reset();
    Notify("تم انشاء سند القبض بنجاح","info")
  };

  return (
    <>
      <form
        action={handleSubmit}
        id="RecietForm"
        className=" w-full flex flex-col items-center gap-2 bg-background/30 rounded-md  shadow-lg p-3"
      >
        <div className=" flex items-center justify-between w-full  border-b border-border py-2   gap-4">
          <INPUT
            placeholder={"المبلغ"}
            name={"amount"}
            type={"number"}
            icon={<CircleDollarSign />}
            // w="w-[170px]"
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
            id="amount"
            roundedCorners="rounded-none"
            value={currentDate}
            disabled
          />
        </div>
        <div className="relative   w-full   ">
          <Textarea
            type="text"
            name="detail"
            placeholder="وصف السند"
            className="border border-primary rounded-md px-4 py-2 w-full resize-none"
            rows={3}
          />
        </div>
        <div className="flex items-center gap-4  justify-end px-3 w-full">
          <Submit color="bg-primary" title="حفظ سند القبض"  textColor="bg-primary-foreground"/>
          <ClearButton formId={"RecietForm"} FoucFiled={"amount"} />
        </div>
      </form>
    </>
  );
}

export default ReciptForm;
