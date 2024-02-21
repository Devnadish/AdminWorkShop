import React from "react";
import CardCpm from "@/components/sharedcompnent/CardCpm";
import { GiExpense } from "@/lib/icons";
import { ShowTags } from "./ShowTags";
import { ExpenAction } from "./ExpenAction";

export const ShowAllExp = ({ data }) => {
  return (
    <div className="flex items-center gap-3 flex-wrap max-w-5xl">
      {data.map((el) => {
        return (
          <CardCpm key={el.id} h="min-h-32">
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 items-center"><GiExpense size={18} />{el.expName}</div>
              <ShowTags tags={el.tag} />
              <ExpenAction />
            </div>
          </CardCpm>
        );
      })}
    </div>
  );
};
