import React from 'react'
import {
    Card,
    CardContent,
  } from "@/components/ui/card";
   

function CardCpm({children,topBorderColor="border-primary/50",h="min-h-72",borderSize="border-t-8"}) {
  return (
    <Card dir="RTL" className={`  overflow-hidden rounded-none border-none hover:bg-secondary/5`} >
      <CardContent className={`min-w-[300px] flex flex-col  justify-between    py-3 overflow-hidden  ${h} ${borderSize} ${topBorderColor}  `}>
        {children}
      </CardContent>
    </Card>
  );
}

export default CardCpm