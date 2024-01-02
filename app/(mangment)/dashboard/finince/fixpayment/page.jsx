import PageTitle from "@/components/shared/PageTitle";
import { getOpenCards  } from "@/db/payment";
import {  Wrench } from "lucide-react";

import SaveVoucher from "@/components/pagecomponent/back/payment/SaveVoucher";
import OpenFixCard from "@/components/shared/OpenFixCard";
// import ShowCardInfo from "@/components/pagecomponent/back/payment/ShowCardInfo";
export const dynamic = "force-dynamic";
const FixPaymentVoucher = async () => {
  const openCardsData = await getOpenCards();


  return (
    <div className=" flex flex-col gap-4 max-w-3xl mx-auto gap-4 w-full">
      <PageTitle title="سند صرف تشغيلي" icon={<Wrench />} />
      <SaveVoucher data={openCardsData} />
      <OpenFixCard />
    </div>
  );
};

export default FixPaymentVoucher;
