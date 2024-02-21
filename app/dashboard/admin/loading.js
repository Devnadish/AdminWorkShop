import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function loading() {
  return (
    <div className="flex flex-col w-full mt-3 items-center justify-center max-w-6xl gap-4">
      <div className="flex  items-center justify-center gap-4 w-full flex-wrap">
        <Skeleton className="h-40 w-44 " />
        <Skeleton className="h-40 w-44  " />
        <Skeleton className="h-40 w-44 " />
        <Skeleton className="h-40 w-44  " />
        <Skeleton className="h-40 w-44 " />
      </div>
      <div className="flex  items-center justify-center gap-4 w-full flex-wrap">
        <Skeleton className="h-64 w-44 " />
        <Skeleton className="h-64 w-44  " />
        <Skeleton className="h-64 w-44 " />
        <Skeleton className="h-64 w-44  " />
        <Skeleton className="h-64 w-44 " />
      </div>
    </div>
  );
}

export default loading;
