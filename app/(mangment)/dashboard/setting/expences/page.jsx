import NewExpencis from "@/components/pagecomponent/back/Expences/NewExpencis";
import DeleteExpinces from "@/components/shared/DeleteExpinces";
import PageTitle from "@/components/shared/PageTitle";
import { displayAllExpencies } from "@/db/expencisData";

import React from "react";

async function page() {
  const exp = await displayAllExpencies();
  return (
    <div className="w-full max-w-md flex items-center justify-start flex-col gap-4 py-4">
      <PageTitle title={"المصروفات الادارية"}/>
      <NewExpencis/>
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
            <DeleteExpinces expName={el.expName} id={el.id}/>
          </div>
        );
      })}
    </div>
  );
};
