 import  { useState } from "react";
import ExpandMenu from "../dashboard/ExpandMenu";
import { FaCarCrash } from "react-icons/fa";
import { GiCash } from "react-icons/gi";
import { LiaCashRegisterSolid } from "react-icons/lia";
import { BiExport } from "react-icons/bi";
import { BsCashCoin } from "react-icons/bs";
import { User } from "lucide-react";


function ShowCardInfo({ info }) {
  const [isOpen, setIsOpen] = useState(false);
  const fixOrderReceiveValue = isNaN(parseFloat(info.fixOrderReceive))
    ? 0
    : parseFloat(info.fixOrderReceive);
  const totalSpentValue = isNaN(parseFloat(info.totalSpent))
    ? 0
    : parseFloat(info.totalSpent);

  const balance = fixOrderReceiveValue - totalSpentValue;

  return (
    <ExpandMenu
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      menuTitle={info.clientName}
      menuIcon={<User size={30} className="text-yellow-300" />}
    >
      <div className="flex w-full flex-wrap  items-center gap-4 shadow-xl  p-2 mb-4 rounded-b-md bg-sky-800 max-w-md">
        <div className="flex   items-center  gap-4 bg-blue-500 w-fit px-3 py-1 rounded-md">
          <FaCarCrash size={30} className="text-yellow-300" />
          <span>{info.fixingCode}</span>
        </div>
        <div className="flex   items-center  gap-4 bg-blue-500 w-fit px-3 py-1 rounded-md">
          <GiCash size={30} className="text-yellow-300" />
          <span>{info.fixOrdertotal}</span>
        </div>

        <div className="flex   items-center  gap-4 bg-green-500 w-fit px-3 py-1 rounded-md flex-grow">
          <LiaCashRegisterSolid size={30} className="text-yellow-300" />
          <p>{info.fixOrderReceive}</p>
        </div>
        <div className="flex   items-center  gap-4 bg-red-500 w-fit px-3 py-1 rounded-md ">
          <BiExport size={30} className="text-red-200" />
          <p>{info.totalSpent}</p>
        </div>
        <div
          className={`flex   items-center justify-center gap-4
              ${
                balance > 0 ? "bg-emerald-950" : "bg-red-950"
              } w-fit px-3 py-1 rounded-md flex-grow`}
        >
          <BsCashCoin size={30} className="text-red-200" />
          <p>{balance}</p>
        </div>
      </div>
    </ExpandMenu>
  );
}

export default ShowCardInfo;
