import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function loading() {
  return (
    <div className="flex flex-col w-full mt-3 items-center justify-center max-w-6xl">
      <div className="flex flex-col w-full items-center justify-center gap-4 p-4">
      <Skeleton className="h-7  w-36 rounded-md  self-start" />
      <div className="flex  items-center justify-center gap-4 w-full flex-wrap">
        <Skeleton className="h-52 w-72 " />
        <Skeleton className="h-52 w-72  " />
        <Skeleton className="h-52 w-72 " />
        <Skeleton className="h-52 w-72  " />
        <Skeleton className="h-52 w-72 " />
        <Skeleton className="h-52 w-72  " />
         
        </div>
      </div>
      </div>
  );
}

export default loading;
