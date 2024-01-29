import React from "react";
import {
  GiCash,
  LiaCashRegisterSolid,
  Scale,
  FaTools
} from "@/lib/icons";
import ViewFixCard from "./ViewFixCard";

export const Finince = ({ total, sumOfReceipts, sumOfExpenses, fixData }) => {
  return (<>


    <div className="w-full flex items-center justify-between">
      <div className="flex  items-center gap-2">
        <GiCash size={30} strokeWidth={1} />
        <p>{total}</p>
      </div>
      <div className="flex  items-center gap-2">
        <LiaCashRegisterSolid size={17} strokeWidth={1} />
        <p>{sumOfReceipts}</p>
      </div>
      <div className="flex  items-center gap-2">
        <FaTools size={17} strokeWidth={1} />
        <p>{sumOfExpenses}</p>
      </div>
      <div className="flex  items-center gap-2 bg-black px-4 rounded-lg">
        <Scale size={17} strokeWidth={1} />
        <p>{total - sumOfReceipts + sumOfExpenses}</p>
      </div>
      <ViewFixCard CardData={fixData} />
    </div>



  </>);
};
