"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";




const INPUT = ({
  icon,
  placeholder,
  type = "text",
  name,
  cN,
  h = "h-9",
  w = "w-full",
  textsize = "text-[1rem]",
  bgColor="bg-input",
  iconBgColor ="bg-popover/70",
  roundedCorners ="rounded",
  textcolor="text-foreground",

  ...setting

}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`relative ${w} ${h}   border border-border ${roundedCorners} overflow-hidden ${
        isFocused ? "focus-within:border-primary" : ""
      }`}
    >
      <Input
        type={type}
        name={name}
        className={`input-placeholder  border-0 ${h}   ${textcolor}  ${textsize} ${bgColor} rounded-none  pl-3 ${
          icon ? "pr-12" : "pr-2"
        } py-2   font-medium focus:outline-none`}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...setting}
        style={{ "::placeholder": { color: "red", fontSize: "1rem" } }}
      />
      {icon && (
        <div
          className={`absolute inset-y-0 right-0 flex items-center justify-center w-[40px] pointer-events-none ${iconBgColor}`}>
          {icon}
        </div>
      )}
    </div>
  );
};



export default INPUT
