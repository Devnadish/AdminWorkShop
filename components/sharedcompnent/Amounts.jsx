import React from 'react';

export const Amounts = ({ title, amount }) => {
  return (
    <div className="flex flex-col border border-border  w-full bg-secondary shadow-md rounded ">
      <div className='text-center bg-foreground/30 w-full'>{title}</div>
      <p className='text-center font-bold'>{amount || 0} </p>
    </div>
  );
};
