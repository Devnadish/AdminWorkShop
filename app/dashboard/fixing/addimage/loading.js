import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function loading() {
  return (
    <div className="flex flex-wrap w-full mt-10  gap-12 items-center justify-center max-w-5xl ">
      <Sk />
      <Sk />
      <Sk />
      <Sk />
      <Sk />
      <Sk />
      <Sk />
      <Sk />
      <Sk />
      <Sk />
    </div>
  );
}

export default loading;

const Sk = () => {
  return (
    <>
      <div className="w-44 flex flex-col gap-4  items-center justify-center border border-border/50 p-4">
        <Skeleton className="h-[80px] w-[80px] rounded-full " />
        <div className="w-full flex items-center justify-between flex-col gap-2 self-start">
          <Skeleton className="h-4 w-32 self-start " />
          <Skeleton className="h-4 w-36 self-start " />
        </div>
        <div className="w-full flex items-center justify-between">
          <Skeleton className="h-6 w-12  " />
          <Skeleton className="h-6 w-16 " />
        </div>
      </div>
    </>
  );
};
