

import PageTitle from "@/components/sharedcompnent/PageTitle";
import ReciptForm from "@/app/dashboard/finince/recipt/_component/ReciptForm";
import OpenFixCard from "@/app/dashboard/finince/_component/OpenFixCard";
import { getCarsFromOpenFixOrder } from "@/db/fixing";
import {  LiaCashRegisterSolid } from "@/lib/icons";

export const dynamic = "force-dynamic";
const RecietVoucher = async () => {
  const openCards = await getCarsFromOpenFixOrder()
      // await new Promise((resolve)=>setTimeout(resolve,150000))
  return (
    <div className=" flex flex-col  max-w-5xl items-center justify-center  gap-4 w-full">
      <PageTitle title="سند قبض"   icon={<LiaCashRegisterSolid size={34}/>}/>
      <OpenFixCard type="recipt"/>
    </div>
  );
};
export default RecietVoucher;
