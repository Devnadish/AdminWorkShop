"use client";
import INPUT from "@/components/shared/INPUT";
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
    <div className="flex  gap-4 border flex-col md:flex-row  border-white/30  p-2  w-full bg-gray-300 border-t-4 border-red-700 shadow-xl">
      <INPUT
        placeholder="التكلفة الاجمالية"
        type="number"
        name="totalCost"
        onChange={(event) => setTotalCost(event.target.value)}
        // bgColor="bg-red-300"
        icon={<FaCashRegister />}
        h="h-9"
        iconBgColor="bg-red-500" />
      <INPUT
        placeholder="المبلغ المستلم"
        type="number"
        name="receivedAmount"
        onChange={(event) => setReceivedAmount(event.target.value)}
        bgColor="bg-blue-300"
        icon={<BsCashStack />}
        // iconBgColor="bg-systemColor-optional"
        h="h-9" />

      <INPUT
        placeholder="المتبفيى"
        value={dueAmount}
        disabled
        onChange={(event) => setDueAmount(event.target.value)}
        icon={<FaBalanceScale />}
        h="h-9" />
    </div>
  );
};
