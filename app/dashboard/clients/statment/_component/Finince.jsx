import React from "react";
import { GiCash, LiaCashRegisterSolid, Scale, FaTools } from "@/lib/icons";
import ViewFixCard from "./ViewFixCard";
import IconWithdata from "@/components/sharedcompnent/IconWithdata";

export const Finince = ({ total, sumOfReceipts, sumOfExpenses, fixData }) => {
  return (
    <>
      <div className="w-full flex items-center justify-between">
        <IconWithdata>
          <GiCash size={30} strokeWidth={1} />
          <p>{total}</p>
        </IconWithdata>

        <IconWithdata>
          <LiaCashRegisterSolid size={17} strokeWidth={1} />
          <p>{sumOfReceipts}</p>
        </IconWithdata>

        <IconWithdata>
          <FaTools size={17} strokeWidth={1} />
          <p>{sumOfExpenses}</p>{" "}
        </IconWithdata>

        <IconWithdata>
          <Scale size={17} strokeWidth={1} />
          <p>{total - sumOfReceipts + sumOfExpenses}</p>
        </IconWithdata>
        <ViewFixCard CardData={fixData} />
      </div>
    </>
  );
};
