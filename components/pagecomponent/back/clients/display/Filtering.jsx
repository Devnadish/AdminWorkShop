"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Equal, SlidersHorizontal } from "lucide-react";
import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  getZeroBalance,
  getClientsWithPositiveBalance,
  getClientsWithgetNegativeBalance,
} from "@/db/clients";
import ShowClientCard from "@/components/pagecomponent/back/clients/display/ShowClientCard";

function Filtering({ clientsData }) {
  const [clients, setClients] = useState(clientsData);
  const [open, setOpen] = useState(false);

  const handlePositiveBalance = async () => {
    const result = await getClientsWithPositiveBalance();
    setClients(result);
    setOpen(false);
  };

  const handleNegativeBalance = async () => {
    const result = await getClientsWithgetNegativeBalance();
    setClients(result);
    setOpen(false);
  };

  const handleZeroBalance = async () => {
    const result = await getZeroBalance();
    setClients(result);
    setOpen(false);
  };


  return (
    <div className="  flex flex-col items-center justify-center gap-4 md:flex-row flex-wrap">
      <div className="w-1/2  mt-2 flex flex-col items-center justify-center gap-4 ">
        <Popover open={open} onOpenChange={setOpen}>
          <div className="bg-purple-500 py-1 px-3 flex gap-4 w-full  items-center mb-2 shadow-lg rounded-md justify-between self-start">
            <p className="text-md font-bold">العملاء </p>
            <PopoverTrigger>
              <div className="border-l pl-3">
                <SlidersHorizontal />
              </div>
            </PopoverTrigger>
          </div>
          <PopoverContent>
            <div className="flex  px-6 pt-4 flex-col pb-2  items-center justify-center gap-4 w-full">
              <Button
                onClick={() => handlePositiveBalance()}
                className="bg-gray-300/40  hover:bg-blue-200 text-blue-500 py-2 px-4 rounded-md flex items-center gap-3 w-full"
              >
                العملاء المطلوب منهم الدفع
              </Button>
              <Button
                onClick={() => handleNegativeBalance()}
                className="bg-gray-300/40  hover:bg-red-200 text-red-600 py-2 px-4 rounded-md ml-2 flex items-center gap-3 w-full"
              >
                العملاء واجب السداد لهم
              </Button>
              <Button
                onClick={() => handleZeroBalance()}
                className="bg-gray-300/20 text-green-600  hover:bg-green-200  py-2 px-4 rounded-md ml-2 flex items-center gap-3 w-full"
              >
                العملاء الذي ليس لديهم رصيد
                <Equal className="text-green-600" />
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <ShowClientCard clients={clients} />
    </div>
  );
}

export default Filtering;
