import React from "react";

function InfoBox({ children, title, tileIcon, footer = 0,NotBalance=true }) {
  return (
    <div className="w-[230px] min-h-[300px] max-h-[300px] shadow-xl rounded-md  border border-border flex flex-col  items-center gap-3 overflow-hidden">
      <div className="px-1 bg-accent text-accent-foreground flex items-center gap-1 w-full h-10 justify-between">
        <div className="flex items-center gap-2">
          {tileIcon}
          <h3>{title}</h3>
        </div>
        {NotBalance &&<div className="flex items-center justify-center px-2 bg-destructive text-destructive-foreground rounded">{footer}</div>}
      </div>

      <div className="w-full flex  h-full ">{children}</div>
      
    </div>
  );
}

export default InfoBox;

export function InfoBoxWithNoBalance({ children, title, tileIcon }) {
  return (
    <div className="w-[250px] min-h-[350px] max-h-[350px] shadow-2xl rounded-md  border border-gray-200 flex flex-col  items-center justify-between overflow-hidden">
      <div className="px-4 bg-sky-800 text-white flex items-center justify-between w-full h-10 ">
        <h3 className="text-lg font-semibold font-tajawal">
          {title}
        </h3>
        {tileIcon}
      </div>

      <div className="w-full flex h-[350px]  ">{children}</div>
    </div>
  );
}
