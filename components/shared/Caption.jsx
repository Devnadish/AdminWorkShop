import { getTimeElapsed } from "@/lib/timeanddate";
import React from "react";
import { FiCalendar } from "react-icons/fi";

function Caption({
    title,
    data,
    icon,
    row = true,
    dataBgColor = "bg-white/20",
    dataTextColor = "text-white/80",
    titleBgColor = "bg-white/15",
    titleTextColor = "text-white/80",
    isBorder = true,
    fonSize="text-sm",
    align="end"
}) {
    return (
        <div
            className={`flex items-center justify-center ${isBorder && " border  border-white/30"}  w-full rounded ${row ? "flex-row" : "flex-col"} ${fonSize} h-9`}
        >
            <span
                className={`${titleBgColor} ${titleTextColor} flex items-center justify-start flex-1 px-1 font-semibold  h-full text-right font-tajwal `}

            >
                {title}
            </span>

            <span
                className={`${dataTextColor} ${dataBgColor} ${align} flex-1 pl-3 font-bold  flex items-center justify-${align}  py-1 h-9`}
            >
                {data}
            </span>
        </div>
    );
}

export default Caption;

export function DateCaption({ data }) {
    return (
        <div className="flex items-center justify-end  text-base w-full ">
            <div className="flex items-center justify-end  border border-white/40 rounded-lg text-white/70 px-3 py-1">
                <span className=" w-fit   px-3 text-sm  font-extralight  ">
                    {getTimeElapsed(data)}
                </span>
                <FiCalendar size={18} />
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
    align="end"
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
                className={`${dataTextColor} ${dataBgColor}  px-3 font-bold  flex items-center justify-${align}  py-2 w-full font-amiri ${fonSize} `}
            >
                {data}
            </span>
        </div>
    );
}
