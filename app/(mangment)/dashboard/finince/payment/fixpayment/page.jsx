import PageTitle from "@/components/shared/PageTitle";

import OpenFixCard from "@/app/(mangment)/dashboard/finince/_component/OpenFixCard";
import { getCarsFromOpenFixOrder } from "@/db/fixing";
import PaymentVoucher from "@/app/(mangment)/dashboard/finince/payment/_component/PaymentVoucher";
import { FaTools } from "@/lib/icons";
export const dynamic = "force-dynamic";
const FixPaymentVoucher = async () => {
  const openCards = await getCarsFromOpenFixOrder()
  return (
    <div className=" flex flex-col  max-w-6xl mx-auto  w-full">
      <PageTitle title="سند صرف تشغيلي" icon={<FaTools />} bgColor="bg-red-500"/>
      {/* <PaymentVoucher openCards={openCards} /> */}
      <OpenFixCard  type="payment"/>
    </div>
  );
};

export default FixPaymentVoucher;
