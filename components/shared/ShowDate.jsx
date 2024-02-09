import React from "react";
import { getTimeElapsed } from "@/lib/timeanddate";
import { FiCalendar } from "react-icons/fi";
import { MdOutlineEditCalendar } from "react-icons/md";
import IconWithdata from "../sharedcompnent/IconWithdata";

function ShowDate({ create, update }) {
  return (
    <div  className="flex items-center justify-between  border-b border-border w-full  text-foreground/40  py-1">
      <IconWithdata tooltip={"التاسيس"}>
      <span className="text-[.7rem]">{getTimeElapsed(create)}</span>
        <MdOutlineEditCalendar size={15} className="text-primary/50" />
      </IconWithdata>
      <IconWithdata tooltip={"اخر تعديل"}>
        <span className="text-[.7rem]">{getTimeElapsed(update)}</span>
        <FiCalendar size={15} className="text-primary/50" />
      </IconWithdata>
    </div>
  );
}

export default ShowDate;
