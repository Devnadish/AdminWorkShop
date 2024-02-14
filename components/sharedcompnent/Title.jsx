import React from 'react';

export const Title = ({ title, dataX, color = "bg-tranperent" }) => {
  return (
    <>
      <div className=" rounded-md   flex items-center  border-border">
        <span className={`${color} text-foreground py-1 h-7 px-1 rounded flex items-center`}>{title} {":"}</span>
        <span className=" px-3 py-1 font-bold text-right text-foreground flex items-center">{dataX}</span>
      </div>
    </>
  );
};
