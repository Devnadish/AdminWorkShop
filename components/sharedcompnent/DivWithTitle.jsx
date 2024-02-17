"use client";
import React from "react";

export const DivWithTitle = ({ title, children ,h="h-12"}) => {
  return (
    <div className={`relative bg-inherit ${h}`}>
      <p className="absolute -top-2 px-3 bg-inherit text-primary text-[.7rem] right-2">
        {title}
      </p>
      {children}
    </div>
  );
};
