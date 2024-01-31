import React from 'react'

function PageTitle({ title, icon, bgColor = "bg-sky-800",textColor="text-white" }) {
  return (
    <div
      className="  w-full   h-16  flex items-center justify-center gap-4  mb-5 "
    >
      <div
        className={`w-10/12 text-xl h-12 font-bold ${bgColor}  ${textColor} flex items-center justify-center gap-2 rounded  text-center py-1 px-16  `}
      >
        {icon}
        <h1 className='font-tajwal'> {title}</h1>
      </div>
    </div>
  );
}

export default PageTitle
