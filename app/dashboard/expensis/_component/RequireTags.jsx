"use client";
import { Tag } from "@/lib/icons";

export const RequireTags = ({ AllTagData }) => {
  return (
    <div className="flex items-center gap-3 p-2 flex-col w-full text-[.7rem] justify-start ">
      <p className="flex w-full justify-start">
        مجموعات لابد من اضافتها
      </p>

      <div className="border border-border flex items-center gap-3 p-2  w-full">
        {AllTagData.map((el, idx) => {
          return (
            <div key={idx} className="flex items-center gap-2 text-purple-600">
              <Tag size={10} />
              <span className="text-[.7rem]">{el}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
