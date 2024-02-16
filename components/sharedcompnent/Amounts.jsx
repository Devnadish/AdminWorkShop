import React from 'react';

export const Amounts = ({ title, amount,bgColor="bg-foreground/30" }) => {
  return (
    <div className="flex flex-col border border-border  w-full  shadow-md rounded ">
      <div className={`text-center  text-foreground w-full ${bgColor}`}>{title}</div>
      <p className='text-center text-foreground font-bold'>{amount || 0} </p>
    </div>
  );
};
