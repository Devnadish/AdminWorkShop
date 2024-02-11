import React from "react";
import { JustDate } from "@/lib/timeanddate";
import { FiCalendar } from "react-icons/fi";
import IconWithdata from "./IconWithdata";

function OnlyDate({ onlyDate,type}) {
  return (
    <IconWithdata tooltip={"التاريخ"}>
      {type === "onlyShow" ? (
        <span className="text-[.7rem] text-black">{onlyDate}</span>
      ) : (
        <span className="text-[.7rem] text-black">{JustDate(onlyDate)}</span>
      )}
      {/* <span className="text-[.7rem]">{JustDate(onlyDate)}</span> */}
      <FiCalendar size={15} className="text-secondary" />
    </IconWithdata>
  );
}

export default OnlyDate;
