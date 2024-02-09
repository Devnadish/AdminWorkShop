import NewLabor from "@/app/dashboard/setting/_component/NewLabor";
import DeleteExpinces from "@/components/shared/DeleteExpinces";
import PageTitle from "@/components/sharedcompnent/PageTitle";
import { displayAllLabor } from "@/db/labor";

import React from "react";

async function page() {
  const exp = await displayAllLabor();
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
            <p className="text-white">{el.laborName}</p>
            {/* <DeleteExpinces expName={el.laborName} id={el.id} /> */}
          </div>
        );
      })}
    </div>
  );
};
