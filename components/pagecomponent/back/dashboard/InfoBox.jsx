import React from "react";

function InfoBox({ children, title, tileIcon, footer = 0 }) {
  return (
    <div className="w-[250px] min-h-[350px] max-h-[350px] shadow-2xl rounded-md  border border-gray-200 flex flex-col  items-center justify-between overflow-hidden">
      <div className="px-4 bg-sky-800 text-white flex items-center justify-between w-full h-10 ">
        <h3 className="text-lg font-semibold font-tajawal font-extrabold">
          {title}
        </h3>
        {tileIcon}
      </div>

      <div className="w-full flex  h-full ">{children}</div>
      {footer !== 0 && (
        <div className="flex items-center justify-between w-full bg-green-600 text-white px-3 rounded py-1 h-10 text-xl ">
          <p>الصافي</p>
          <p className="bg-green-800 px-3 rounded-lg py-1 font-bold">
            {footer}
          </p>
        </div>
      )}
      {footer === 0 && <div className="flex items-center justify-between w-full  text-white px-3 rounded py-1 h-10 text-xl "></div>}
    </div>
  );
}

export default InfoBox;

export function InfoBoxWithNoBalance({ children, title, tileIcon }) {
  return (
    <div className="w-[250px] min-h-[350px] max-h-[350px] shadow-2xl rounded-md  border border-gray-200 flex flex-col  items-center justify-between overflow-hidden">
      <div className="px-4 bg-sky-800 text-white flex items-center justify-between w-full h-10 ">
        <h3 className="text-lg font-semibold font-tajawal font-extrabold">
          {title}
        </h3>
        {tileIcon}
      </div>

      <div className="w-full flex h-[350px]  ">{children}</div>
    </div>
  );
}
