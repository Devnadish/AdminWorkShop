import React from "react";

function PageTitle({
  title,
  icon,
  bgColor = "bg-transperent",
  textColor = "text-foreground",
}) {
  return (
    <div
      className={`self-start text-md h-9 font-bold ${bgColor}   flex items-center justify-start gap-2 rounded  text-center py-2 px-2 mt-2 border-b-4 border-primary w-fit `}
    >
      {icon}
      <h1 className={` ${textColor} font-tajwal `}> {title}</h1>
    </div>
  );
}

export default PageTitle;
