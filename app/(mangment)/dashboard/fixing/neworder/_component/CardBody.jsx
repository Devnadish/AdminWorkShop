"use client";
import { Textarea } from "@/components/ui/textarea";
import INPUT from "@/components/shared/INPUT";
import { BiHardHat } from "react-icons/bi";
import { FaCalendarCheck } from "react-icons/fa";
import { Car, User,Mic } from "@/lib/icons";
import { Button } from "@/components/ui/button";
import { CardImage } from "./CardImage";

export const CardBody = ({ carid, ClientName, ClientID, loading }) => {
  return (
    <div className="flex items-center justify-between w-full flex-col  bg-gray-300 p-3 px-3 border-t-4 border-gray-400 shadow-xl ">
      <div className="flex items-center  flex-col w-full gap-2">
      {!loading ? (
        <Hd carid={carid} ClientName={ClientName} ClientID={ClientID} />
      ) : (
        <p>loading...</p>
      )}
        
        <Textarea
          placeholder="الخدمة المطلوبة"
          rows={3}
          name="serviceDescription"
          id="serviceDetail"
          className="border border-gray-600 rounded px-4 w-full resize-none bg-gray-400"
        />
       <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between w-full">
        <INPUT
          placeholder="المهندس"
          name="engName"
          icon={<BiHardHat />}
          bgColor="bg-white"
          iconBgColor="bg-gray-500"
        />
        <INPUT
          placeholder="موعد التسليم"
          name="deliveryDate"
          icon={<FaCalendarCheck />}
          bgColor="bg-white"
          iconBgColor="bg-gray-500"
        />
        </div>
      </div>
    </div>
  );
};

const Hd = ({ carid, ClientName, ClientID }) => {
  return (
    <>
      <div
        className={`  flex w-full items-center  gap-4 px-3 rounded ${
          carid === "اختار السيارة"
            ? "bg-red-500 animate-pulse"
            : "bg-gray-600"
        }  text-white`}
      >
        <div className="flex items-center gap-2">
          <Car />
          {carid}
        </div>
        <div className="flex items-center gap-2">
        <User />
        <span className="bg-sky-500 px-4">{ClientID}</span>
          <span>{ClientName}</span>
        </div>

      </div>
    </>
  );
};
