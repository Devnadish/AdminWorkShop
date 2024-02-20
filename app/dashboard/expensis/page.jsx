import React from "react";
import CardCpm from "@/components/sharedcompnent/CardCpm";
import { displayAllExpensis,  getAllTag } from "@/db/expensis";
import PageTitle from "@/components/sharedcompnent/PageTitle";
import { CiEdit, GiExpense, Tag, Trash } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import NewExpens from "./_component/NewExpens";

async function page() {
  const AllExp = await displayAllExpensis();
  const AllTag = await getAllTag();

  return (
    <div className="flex flex-col items-center gap-6 w-full ">
      <PageTitle icon={<GiExpense />} title={"المصاريف الادارية"} />
      <NewExpens AllTag={AllTag} />
      <ShowAllExp data={AllExp} />
    </div>
  );
}

export default page;
const ShowAllExp = ({ data }) => {
  return (
    <div className="flex items-center gap-3 flex-wrap max-w-5xl">
      {data.map((el) => {
        return (
          <CardCpm key={el.id} h="min-h-32">
            <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center"><GiExpense size={18}/>{el.expName}</div>
            <ShowTags tags={el.tag} />
            <ExpenAction />
            </div>
          </CardCpm>
        );
      })}
    </div>
  );
};
const ExpenAction = () => {
  return (
    <div className="flex items-center gap-4 w-full justify-end">
      <Button size="icon" variant="secondary">
        <CiEdit size={25} className="text-primary" />
      </Button>
      <Button size="icon" variant="secondary">
        <Trash size={25} className="text-destructive" />
      </Button>
    </div>
  );
};

const ShowTags = ({ tags }) => {
  return (
    <div className="flex items-center gap-4">
      <Tag size={15}/>
      {tags.map((tag, idx) => (
        <div
          key={idx}
          className="flex items-center border border-primary px-1 rounded-full gap-2"
        >
          <span className="flex items-center justify-center text-[.8rem] px-2 py-[3px]">
            {tag}
          </span>
        </div>
      ))}
    </div>
  );
};
