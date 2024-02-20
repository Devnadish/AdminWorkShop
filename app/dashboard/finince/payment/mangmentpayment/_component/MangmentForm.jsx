"use client";
import React, { useState } from 'react';
import ClearButton from '@/components/sharedcompnent/ClearButton';
import INPUT from '@/components/sharedcompnent/INPUT';
import Submit from '@/components/sharedcompnent/Submit';
import { Textarea } from '@/components/ui/textarea';
import { Notify } from "@/lib/notify";
import { IoLogoUsd } from '@/lib/icons';
import Expensis from './Expensis';
import { validateForm } from './validationPayment';
import { savePaymentVoucher } from '@/db/payment';

function MangmentForm({ expData ,AllTag}) {
    const [PymentNo, setPymentNo] = useState(0);
    const [expname, setExpname] = useState("");
    const [value, setValue] = useState("");

    const handleSubmit = async (data) => {
        const amount = parseFloat(data.get("amount"));
        const detail = data.get("detail");
        const docDate = new Date(data.get("docDate")).toISOString().slice(0, 10);
        const paymentType = "mangment";
        const collector = value;
        const Paymentdata = { amount, detail, paymentType, docDate, collector };

        const validation = validateForm(Paymentdata);
        if (!validation.isValid) {
            Notify(validation.errorMessage, "error");
            return;
        }

        try {
            const VoucerNo = await savePaymentVoucher(Paymentdata);
            setPymentNo(VoucerNo.paymentId);
            const msg = "تم انشاء السند بنجاح"
            Notify(msg, "info");
        } catch (error) {
            console.error(error);
        }
    };

    return (
      <form
        id="paymentForm"
        className="w-full flex flex-col gap-4 items-start justify-start border border-border bg-accent rounded p-4 shadow-lg max-w-xl"
        action={handleSubmit}
      >
        <Expensis data={expData} value={value} setValue={setValue} AllTag={AllTag}/>
        <INPUT
          placeholder={"المبلغ"}
          name={"amount"}
          type={"number"}
          icon={<IoLogoUsd />}
          textsize="text-[1rem]"
          id="amount"
        />
        <Textarea
          id="status"
          name="detail"
          rows={3}
          placeholder="تفاصيل السند"
          className="border border-gray-300 rounded px-4 py-2 w-full resize-none"
        />
        <div className="flex items-center justify-end gap-4 w-full">
          <Submit color="bg-border" title="حفظ السند" />
          <ClearButton formId={"paymentForm"} FoucFiled={"amount"} />
        </div>
      </form>
    );
}

export default MangmentForm;
