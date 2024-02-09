

import PageTitle from "@/components/sharedcompnent/PageTitle";
import ReciptForm from "@/app/dashboard/finince/recipt/_component/ReciptForm";
import OpenFixCard from "@/app/dashboard/finince/_component/OpenFixCard";
import { getCarsFromOpenFixOrder } from "@/db/fixing";
import {  LiaCashRegisterSolid } from "@/lib/icons";

export const dynamic = "force-dynamic";
const RecietVoucher = async () => {
  const openCards = await getCarsFromOpenFixOrder()
  return (
    <div className=" flex flex-col  max-w-6xl mx-auto  w-full">
      <PageTitle title="سند قبض" bgColor="bg-green-500" icon={<LiaCashRegisterSolid size={34}/>}/>

      {/* <ReciptForm openCards={openCards}/> */}
      <OpenFixCard type="recipt"/>
    </div>
  );
};
export default RecietVoucher;
