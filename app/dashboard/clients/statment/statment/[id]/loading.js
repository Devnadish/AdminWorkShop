import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function loading() {
  return (
    <div className="flex flex-col w-full mt-16 items-center justify-center max-w-5xl h-full">
      <div className="flex flex-col w-full items-center justify-center gap-4 p-4">
      <Skeleton className="h-7  w-full rounded-md  self-start" />
      <div className="flex  items-center justify-center gap-1 w-full flex-wrap">
        <div className="flex items-center gap-4 w-full justify-end">

        <Skeleton className="h-7 w-[100px] self-start " />
        <Skeleton className="h-7 w-[100px] self-start " />
        <Skeleton className="h-7 w-[100px] self-start " />
        <Skeleton className="h-7 w-[100px] self-start " />
        <Skeleton className="h-7 w-[100px] self-start " />
        <Skeleton className="h-7 w-[100px] self-start " />
        <Skeleton className="h-7 w-[100px] self-start " />
        <Skeleton className="h-7 w-[100px] self-start " />
        </div>

        <Skeleton className="h-9 w-full  " />
        <Skeleton className="h-9 w-full " />
        <Skeleton className="h-9 w-full  " />
        <Skeleton className="h-9 w-full " />
        <Skeleton className="h-9 w-full  " />
         
        </div>
      </div>
      </div>
  );
}

export default loading;
