import { Car, Wrench } from "@/lib/icons";
import React from "react";
import { AlertTriangle } from "@/lib/icons";

export const CardInfo = ({ fixingId, selectedCar, isClosed }) => {
  return (<>
    <div className="w-full flex items-center gap-6 justify-between">
      <div className="flex  items-center gap-2">
        <Wrench size={25} strokeWidth={1} />
        <p>{fixingId}</p>
      </div>
      <div className="flex  items-center gap-2">
        <Car size={30} strokeWidth={1} />
        <p>{selectedCar}</p>
      </div>
      <div
        className={`px-3 rounded  border flex  items-center gap-2  text-white ${isClosed ? "bg-green-500" : "bg-red-500"}`}
      >
        {isClosed ? (
          <AlertTriangle
            size={20}
            strokeWidth={1.75}
            className="text-white" />
        ) : (
          <AlertTriangle size={20} strokeWidth={1} className="text-white" />
        )}
        <p className="text-white font-tajwal">
          {isClosed ? "منتهى" : "مفتوح"}
        </p>
      </div>
    </div>

  </>);
};
