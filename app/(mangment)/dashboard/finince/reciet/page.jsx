

import PageTitle from "@/components/shared/PageTitle";
import ReciptForm from "@/components/pagecomponent/back/reciptform/ReciptForm";
import OpenFixCard from "@/components/shared/OpenFixCard";
export const dynamic = "force-dynamic";
const RecietVoucher = () => {
  return (
    <div className="container flex flex-col w-full max-w-3xl">
      <PageTitle title="سند قبض" />
      <ReciptForm />
      <OpenFixCard/>
    </div>
  );
};
export default RecietVoucher;
