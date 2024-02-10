import PageTitle from "@/components/sharedcompnent/PageTitle";

import OpenFixCard from "@/app/dashboard/finince/_component/OpenFixCard";
import { getCarsFromOpenFixOrder } from "@/db/fixing";
import PaymentVoucher from "@/app/dashboard/finince/payment/_component/PaymentVoucher";
import { FaTools } from "@/lib/icons";
export const dynamic = "force-dynamic";
const FixPaymentVoucher = async () => {
  const openCards = await getCarsFromOpenFixOrder()
  return (
    <div className=" flex flex-col  max-w-5xl items-center justify-center  gap-4 w-full">
      <PageTitle title="سند صرف تشغيلي" icon={<FaTools />} />
      <OpenFixCard  type="payment"/>
    </div>
  );
};

export default FixPaymentVoucher;
