"use client";
import INPUT from "@/components/sharedcompnent/INPUT";
import { BsCashStack } from "react-icons/bs";
import { FaCashRegister } from "react-icons/fa6";
import { FaBalanceScale } from "react-icons/fa";
import { useEffect } from "react";


export const CardFinice = ({setTotalCost,setReceivedAmount,setDueAmount,totalCost,  receivedAmount,  dueAmount}) => {
  useEffect(() => {
    const total = parseFloat(totalCost) || 0;
    const received = parseFloat(receivedAmount) || 0;
    setDueAmount(total - received);
  }, [totalCost, receivedAmount]);
  return (
    <div className="flex  gap-4  flex-col md:flex-row  p-2  w-full bg-background/50 border-t-4 border-destructive shadow-xl">
      <INPUT
        placeholder="التكلفة الاجمالية"
        type="number"
        name="totalCost"
        onChange={(event) => setTotalCost(event.target.value)}
        icon={<FaCashRegister />}
        iconBgColor="bg-destructive" />
      <INPUT
        placeholder="المبلغ المستلم"
        type="number"
        name="receivedAmount"
        onChange={(event) => setReceivedAmount(event.target.value)}
        icon={<BsCashStack />}
         />

      <INPUT
        placeholder="المتبفيى"
        value={dueAmount}
        disabled
        onChange={(event) => setDueAmount(event.target.value)}
        icon={<FaBalanceScale />}
         />
    </div>
  );
};
