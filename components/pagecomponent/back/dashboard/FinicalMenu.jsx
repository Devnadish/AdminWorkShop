import { BadgeDollarSign, CarIcon, Frown, ScrollText, ShoppingCart, Smile } from 'lucide-react';
import Link from 'next/link';
import {useState} from "react";
import ExpandMenu from "./ExpandMenu";
import { BsTools } from "react-icons/bs";
import { FaCashRegister } from "react-icons/fa6";
import { FaCarCrash } from "react-icons/fa"

const FinicalMenu = ({ toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuStyle =
    "bg-sky-900 w-full px-3 py-1    rounded-md flex items-center justify-between text-white   font-semibold";
  return (
    <>
      <ExpandMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        menuTitle={"  الحركة المالية"}
        menuIcon={<FaCashRegister size={30} className="text-yellow-300" />}
      >
        <div className="w-full  flex  flex-col items-center text-white">
          <div className="w-full flex flex-col items-center gap-4 p-2">
            <div className="flex w-full flex-col  gap-4 items-center ">
              <div className="flex flex-col w-full">
                <Link
                  href={"/dashboard/finince/reciet"}
                  className={menuStyle}
                  onClick={() => toggleSidebar()}
                  prefetch={true}
                >
                  <p>سند قبض</p>
                  <Smile size={25} />
                </Link>
              </div>

              <div className="flex flex-col w-full">
                <Link
                  href={"/dashboard/finince/fixpayment"}
                  className={menuStyle}
                  onClick={() => toggleSidebar()}
                  prefetch={true}
                >
                  <p>سند صرف تشغيلي</p>
                  <BsTools size={20} className="text-yellow-300" />
                </Link>
              </div>
              <div className="flex flex-col w-full">
                <Link
                  href={"/dashboard/finince/mangmentpayment"}
                  className={menuStyle}
                  onClick={() => toggleSidebar()}
                  prefetch={true}
                >
                  <p>سند صرف اداري</p>
                  <Frown size={25} />
                </Link>
              </div>
            </div>
            <div className="flex  flex-col  w-full gap-4 items-center ">
              <Link
                href={"/dashboard/finince/invoice"}
                className={menuStyle}
                prefetch={true}
                onClick={() => toggleSidebar()}
              >
                <p>فاتورة</p>
                <ScrollText size={25} />
              </Link>
              {/* <Link
                href={"/dashboard/finince/purchase"}
                className={menuStyle}
                onClick={() => toggleSidebar()}
                prefetch={true}
              >
                <p>مشتريات</p>
                <ShoppingCart size={25} />
              </Link> */}
            </div>
          </div>
        </div>
      </ExpandMenu>
    </>
  );
};
export default FinicalMenu;
