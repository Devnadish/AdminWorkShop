import React from 'react'
import {
    Card,
    CardContent,
  } from "@/components/ui/card";
   

function CardCpm({children,topBorderColor="border-primary/50",h="min-h-72"}) {
  return (
    <Card dir="RTL" className={`border-none rounded-none m-2  hover:bg-secondary/50`} >
      <CardContent className={`min-w-[300px] flex flex-col  justify-between rounded-b-lg  py-3 overflow-hidden  ${h} border-t-8 ${topBorderColor}  `}>
        {children}
      </CardContent>
    </Card>
  );
}

export default CardCpm