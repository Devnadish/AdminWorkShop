import PageTitle from "@/components/shared/PageTitle";
import {  Wrench } from "lucide-react";

import OpenFixCard from "@/components/shared/OpenFixCard";
import { getCarsFromOpenFixOrder } from "@/db/fixing";
import PaymentVoucher from "@/components/pagecomponent/back/payment/PaymentVoucher";
export const dynamic = "force-dynamic";
const FixPaymentVoucher = async () => {
  const openCards = await getCarsFromOpenFixOrder()
  return (
    <div className=" flex flex-col gap-4 max-w-3xl mx-auto gap-4 w-full">
      <PageTitle title="سند صرف تشغيلي" icon={<Wrench />} />
      <PaymentVoucher openCards={openCards} />
      <OpenFixCard  />
    </div>
  );
};

export default FixPaymentVoucher;
