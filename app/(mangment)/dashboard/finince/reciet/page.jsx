

import PageTitle from "@/components/shared/PageTitle";
import ReciptForm from "@/components/pagecomponent/back/reciptform/ReciptForm";
import OpenFixCard from "@/components/shared/OpenFixCard";

export const dynamic = "force-dynamic";
const RecietVoucher = () => {
  return (
    <div className=" flex flex-col gap-4 max-w-3xl mx-auto gap-4 w-full">
      <PageTitle title="سند قبض" />
      <ReciptForm />
      <OpenFixCard/>
    </div>
  );
};
export default RecietVoucher;
