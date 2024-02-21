import React from "react";
import { Tag } from "@/lib/icons";

export const ShowTags = ({ tags }) => {
  return (
    <div className="flex items-center gap-4">
      <Tag size={15} />
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
