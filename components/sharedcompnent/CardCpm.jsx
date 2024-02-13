import React from 'react'
import {
    Card,
    CardContent,
  } from "@/components/ui/card";
   

function CardCpm({children,topBorderColor="border-primary",h="min-h-72",borderSize="border-t-4" ,minW="min-w-[300px]"}) {
  return (
    <Card dir="RTL" className={`  overflow-hidden rounded-none border-none hover:bg-secondary/5`} >
      <CardContent className={`${minW} flex flex-col  justify-between     py-3 overflow-hidden  ${h} ${borderSize} ${topBorderColor}  `}>
        {children}
      </CardContent>
    </Card>
  );
}

export default CardCpm