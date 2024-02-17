import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function loading() {
  return (
      <div className="flex  items-center mt-12 justify-center gap-4 w-full flex-wrap">
        <Skeleton className="h-52 w-72 " />
        <Skeleton className="h-52 w-72  " />
        <Skeleton className="h-52 w-72 " />
        <Skeleton className="h-52 w-72  " />
        <Skeleton className="h-52 w-72 " />
        <Skeleton className="h-52 w-72  " />
         <Skeleton className="h-52 w-72 " />
        <Skeleton className="h-52 w-72  " />
        </div>
  );
}

export default loading;
