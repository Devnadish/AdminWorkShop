import React from 'react'
import { Skeleton } from "@/components/ui/skeleton";

function loading() {
  return (
    <div className="flex items-center justify-center flex-wrap  gap-4">
      <div className="flex items-center space-x-8 ">
        <Skeleton className="h-12 w-12 rounded-full bg-white/10" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]  bg-white/10" />
          <Skeleton className="h-4 w-[200px]  bg-white/10" />
        </div>
      </div>
      <div className="flex items-center space-x-4 ">
        <Skeleton className="h-12 w-12 rounded-full bg-white/10" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]  bg-white/10" />
          <Skeleton className="h-4 w-[200px]  bg-white/10" />
        </div>
      </div>
      <div className="flex items-center space-x-4 ">
        <Skeleton className="h-12 w-12 rounded-full bg-white/10" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]  bg-white/10" />
          <Skeleton className="h-4 w-[200px]  bg-white/10" />
        </div>
      </div>
      <div className="flex items-center space-x-4 ">
        <Skeleton className="h-12 w-12 rounded-full bg-white/10" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]  bg-white/10" />
          <Skeleton className="h-4 w-[200px]  bg-white/10" />
        </div>
      </div>
    </div>
  );
}

export default loading
