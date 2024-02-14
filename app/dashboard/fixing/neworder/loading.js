import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function loading() {
  return (
    <div className="flex  w-full mt-16 items-center justify-center max-w-5xl gap-8">
      <Skeleton className="h-80  w-1/3 rounded-md bg-secondary/10 dark:bg-secondary self-start" />
      <Skeleton className="h-80 w-full bg-secondary/10 dark:bg-secondary " />
    </div>
  );
}

export default loading;
