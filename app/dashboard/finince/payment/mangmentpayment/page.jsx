"use client";
import React, { useState } from "react";
import ClearButton from "@/components/sharedcompnent/ClearButton";
import Expensis from "@/app/dashboard/finince/payment/mangmentpayment/_component/Expensis";
import INPUT from "@/components/sharedcompnent/INPUT";
import PageTitle from "@/components/sharedcompnent/PageTitle";
import Submit from "@/components/sharedcompnent/Submit";
import { Textarea } from "@/components/ui/textarea";
import { savePaymentVoucher } from "@/db/payment";
import { validateForm } from "@/lib/validation/payment";
import { CircleDollarSign } from "lucide-react";
import { toast } from "sonner";
import { GiOfficeChair } from "@/lib/icons";

const PaymentVoucherForm = () => {
  const [PymentNo, setPymentNo] = useState(0);
  const [expname, setExpname] = useState("");




  const handleSubmit = async (data) => {
    const amount = parseFloat(data.get("amount"));
    const detail = data.get("detail");
    const docDate = new Date(data.get("docDate")).toISOString().slice(0, 10);
    const paymentType = "mangment";
    const collector = expname;
    const Paymentdata = { amount, detail, paymentType, docDate, collector };
     const validation = validateForm(Paymentdata);
     if (!validation.isValid) {
       toast.error(validation.errorMessage);
       return;
     }

    try {
      const VoucerNo = await savePaymentVoucher(Paymentdata);
      setPymentNo(VoucerNo.paymentId);
      const msg = `تم صرف مبلغ  ${VoucerNo.amount} بموجب سند صرف رقم  ${VoucerNo.paymentId}`;
       toast.success(msg, { duration: 5000 });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" flex flex-col w-full items-center justify-center max-w-6xl gap-8">
      <PageTitle title="سند صرف اداري" icon={<GiOfficeChair/>}/>
      <div className="flex max-w-3xl w-full">
      <form
        id="paymentForm"
        className="  w-full  flex flex-col gap-4 items-center justify-center border border-border bg-accent rounded p-4 shadow-lg"
        action={handleSubmit}
      >
        <div className="flex w-full items-center justify-between gap-4">
          <Expensis setExpname={setExpname} />
        </div>

        <div className="flex w-full items-center justify-between gap-4">
          <div className="flex items-center justify-between w-full gap-4">
            <div className="flex flex-col justify-start gap-2">
              <INPUT
                placeholder={"المبلغ"}
                name={"amount"}
                type={"number"}
                icon={<CircleDollarSign />}
                textsize="text-[1rem]"
                id="amount"
              />
            </div>
          </div>
        </div>

        <Textarea
          id="status"
          name="detail"
          rows={3}
          placeholder="تفاصيل السند"
          className="border border-gray-300 rounded px-4 py-2 w-full resize-none"
        />

        <div className="flex items-center justify-end gap-4  w-full">
          <Submit color="bg-border" title="حفظ السند"/>
          <ClearButton formId={"paymentForm"} FoucFiled={"amount"} />
        </div>
      </form>
      </div>
    </div>
  );
};

export default PaymentVoucherForm;
