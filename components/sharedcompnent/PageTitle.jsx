import React from "react";

function PageTitle({
  title,
  icon,
  bgColor = "bg-accent/50",
  textColor = "text-white",
}) {
  return (
    <div
      className={`w-full text-md h-9 font-bold ${bgColor}  ${textColor} flex items-center justify-start gap-2 rounded  text-center py-2 px-2 mt-2 `}
    >
      {icon}
      <h1 className="font-tajwal"> {title}</h1>
    </div>
  );
}

export default PageTitle;
