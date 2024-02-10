import React from "react";
import { JustDate } from "@/lib/timeanddate";
import { FiCalendar } from "react-icons/fi";
import IconWithdata from "./IconWithdata";

function OnlyDate({ onlyDate}) {
  return (
       
      <IconWithdata tooltip={"التاريخ"}>
        <span className="text-[.7rem]">{JustDate(onlyDate)}</span>
        <FiCalendar size={15} className="text-primary/50" />
      </IconWithdata>
  );
}

export default OnlyDate;
