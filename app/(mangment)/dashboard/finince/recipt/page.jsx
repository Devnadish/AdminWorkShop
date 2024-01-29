

import PageTitle from "@/components/shared/PageTitle";
import ReciptForm from "@/app/(mangment)/dashboard/finince/recipt/_component/ReciptForm";
import OpenFixCard from "@/components/shared/OpenFixCard";
import { getCarsFromOpenFixOrder } from "@/db/fixing";

export const dynamic = "force-dynamic";
const RecietVoucher = async () => {
  const openCards = await getCarsFromOpenFixOrder()
  return (
    <div className=" flex flex-col gap-4 max-w-3xl mx-auto gap-4 w-full">
      <PageTitle title="سند قبض" />

      <ReciptForm openCards={openCards}/>
      <OpenFixCard/>
    </div>
  );
};
export default RecietVoucher;
