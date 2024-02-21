import React from "react";
import { displayAllExpensis,  getAllTag } from "@/db/expensis";
import PageTitle from "@/components/sharedcompnent/PageTitle";
import { GiExpense } from "@/lib/icons";
import NewExpens from "./_component/NewExpens";
import { ShowAllExp } from "./_component/ShowAllExp";

async function page() {
  const AllExpDB =  displayAllExpensis();
  const AllTagDB =  getAllTag();
  const [AllExp, AllTag] = await Promise.all([AllExpDB, AllTagDB]);

  return (
    <div className="flex flex-col items-center gap-6 w-full ">
      <PageTitle icon={<GiExpense />} title={"المصاريف الادارية"} />
      <NewExpens AllTag={AllTag} />
      <ShowAllExp data={AllExp} />
    </div>
  );
}

export default page;

