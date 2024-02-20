import PageTitle from "@/components/sharedcompnent/PageTitle";

import { GiOfficeChair } from "@/lib/icons";

import MangmentForm from "./_component/MangmentForm";
import { getAllExpencies, getAllTag } from "@/db/expensis";

export const dynamic = "force-dynamic";
const PaymentVoucherForm = async () => {
  const expData = await getAllExpencies();
  const AllTag = await getAllTag();
  return (
    <div className=" flex flex-col w-full items-center justify-center max-w-6xl gap-8">
      <PageTitle title="سند صرف اداري" icon={<GiOfficeChair />} />
      <MangmentForm expData={expData} AllTag={AllTag} />
    </div>
  );
};

export default PaymentVoucherForm;
