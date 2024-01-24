import React from "react";
import { getTimeElapsed } from "@/lib/timeanddate";
import { FiCalendar } from "react-icons/fi";
import { MdOutlineEditCalendar } from "react-icons/md";

function ShowDate({ create, update }) {
  return (
    <div className="flex items-center justify-end  text-base ">
      <div
        className={`flex items-center justify-end  border-b  text-white/70 px-3 py-1`}
      >
        <div className=" w-fit   px-3 text-[.7rem]  font-extralight  ">
          <span>{getTimeElapsed(create)}</span>
          <MdOutlineEditCalendar size={18} className="text-green-300" />
        </div>
        <div className=" w-fit   px-3 text-[.7rem]  font-extralight  ">
          <span>{getTimeElapsed(update)}</span>
          <FiCalendar size={18} className="text-green-300" />
        </div>
      </div>
    </div>
  );
}

export default ShowDate;
