import { getTimeElapsed } from "@/lib/timeanddate";
import React from "react";
import { FiCalendar } from "react-icons/fi";
import { MdOutlineEditCalendar } from "react-icons/md";

function Caption({
    title,
    data,
    icon,
    row = true,
    dataBgColor = "bg-secondary/30",
    dataTextColor = "text-secondary-foreground",
    titleBgColor = "bg-primary",
    titleTextColor = "text-primary-foreground",
    isBorder = false,
    fonSize="text-sm",
    align="start",
    h="h-9"
}) {
    return (
        <div
            className={`flex items-center justify-center ${isBorder && " border  border-white/30"}  w-full rounded ${row ? "flex-row" : "flex-col"} ${fonSize} ${h}`}
        >
            <span
                className={`${titleBgColor}  ${titleTextColor} flex items-center justify-start flex-1 px-1 font-semibold  h-full text-right font-tajwal `}

            >
                {title}
            </span>

            <span
                className={`${dataTextColor} ${dataBgColor} ${align} flex-1 pl-3 font-bold  flex items-center justify-${align}  py-1 h-full px-2 `}
            >
                {data}
            </span>
        </div>
    );
}

export default Caption;

export function DateCaption({ data ,type}) {
    return (
        <div className="flex items-center justify-end  text-base ">
            <div className={`flex items-center justify-end  border-b  ${type === "lastupdate" ? "border-green-300" : "border-white/40"}   text-foreground px-3 py-1`}>
                <span className=" w-fit   px-3 text-[.7rem]  font-extralight  ">
                    {getTimeElapsed(data)}
                </span>
                {type === "lastupdate" ? <MdOutlineEditCalendar size={18} className="text-green-300"/> :<FiCalendar size={18} />}
            </div>
        </div>
    );
}

export function VCaption({
    title,
    data,
    icon,
    dataBgColor = "bg-white/20",
    dataTextColor = "text-white/80",
    titleBgColor = "bg-white/15",
    titleTextColor = "text-white/80",
    isBorder = true,
    fonSize="text-sm",
    align="start"
}) {
    return (
        <div
            className={`flex items-center justify-center ${isBorder && " border  border-white/30"}  w-full rounded flex-col ${fonSize}`}
        >
            <span
                className={`${titleBgColor} ${titleTextColor} flex items-center justify-start   font-semibold  w-full h-9 px-2  font-tajwal `}

            >
                {title}
            </span>

            <span
                className={`${dataTextColor} ${dataBgColor}  px-3 font-bold  flex items-center justify-${align} px-2 py-2 w-full font-amiri ${fonSize} `}
            >
                {data}
            </span>
        </div>
    );
}
