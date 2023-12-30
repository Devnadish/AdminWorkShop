"use client";
import React, { useState } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { getFixingOrder } from "@/db/payment";
import ShowCardInfo from "./ShowCardInfo";

const OpenFixingCard = ({ data, setInfo,info }) => {
  const handleGetData = async (id) => {
    try {
      const data = await getFixingOrder(id);
      setInfo({
        clientId: data.clientId,
        clientName: data.clientName,
        fixingCode: data.fixingCode,
        fixOrdertotal: data.fixOrdertotal,
        fixOrderReceive: data.totalRecipt,
        totalSpent: data.totalSpent,
      });
    } catch (error) {
      console.error("Error fetching open cards:", error);
    }
  };

  return (
    <>
      <div className="text-white max-w-md  h-18 ">
        <div className="flex justify-between w-full">
          <p className="bg-white text-black w-fit px-3 text-[.7rem] rounded-md">
            سيارات تحت الصيانة
          </p>
          <p className="bg-white text-black w-fit px-3 text-[.7rem] rounded-md">
            {data.length}
          </p>
        </div>
        {/* <ScrollArea className=" rounded-b-md px-3 "> */}
          <div className="flex flex-wrap max-w-sm items-start justify-start gap-4">
            {data.map((el) => {
              return (
                <div key={el.id} >
                  <Button
                    className="border  h-6 px-2  w-fit flex flex-col rounded-2xl  bg-white/40"
                    variant="secondary"
                    onClick={() => {
                      handleGetData(el.id);
                    }}
                  >
                    <p>{el.selectedCar}</p>
                    {/* <p className="text-[.7rem]]">{el.clientName}</p> */}
                  </Button>
                </div>
              );
            })}
          </div>
          {/* <ScrollBar orientation="horizontal" /> */}
        {/* </ScrollArea> */}
        {info.clientName ? (
          <div className="p-2">
            <ShowCardInfo info={info} />
          </div>
        ) : (
          <div className="text-white w-full h-18">اختار السيارة</div>
        )}
      </div>
    </>
  );
};

export default OpenFixingCard;
