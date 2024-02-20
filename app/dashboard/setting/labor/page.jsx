import NewLabor from "@/app/dashboard/expensis/_component/NewExpens";
import DeleteExpinces from "@/app/dashboard/finince/payment/mangmentpayment/_component/DeleteExpinces";
import PageTitle from "@/components/sharedcompnent/PageTitle";
import { displayAllExpensis, displayAllLabor } from "@/db/expensis";

import React from "react";

async function page() {
  const exp = await displayAllExpensis();
  return (
    <div className="w-full max-w-md flex items-center justify-start flex-col gap-4 py-4">
      <PageTitle title={"الموظفين"} />
      <NewLabor />
      <ShowData data={exp} />
    </div>
  );
}

export default page;

const ShowData = ({ data }) => {
  return (
    <div className="border  w-full flex gap-4 items-center flex-col p-4 rounded border-white/30 ">
      {data.map((el) => {
        return (
          <div className="flex items-center justify-between w-full px-3" key={el.id}>
            <p className="text-white">{el.expName}</p>
            {/* <DeleteExpinces expName={el.expName} id={el.id} /> */}
          </div>
        );
      })}
    </div>
  );
};
