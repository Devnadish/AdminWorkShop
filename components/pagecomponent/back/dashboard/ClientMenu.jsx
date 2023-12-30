"use client";
import { Car, Receipt, UserRoundPlus, UsersRound } from "lucide-react";
import Link from "next/link";
import {useState} from "react";


import ExpandMenu from "./ExpandMenu";

const ClientMenu = ({ toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuStyle =
    "bg-sky-900 w-full px-3    rounded-md flex items-center justify-between text-white   font-semibold";
  return (
    <>
      <ExpandMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        menuTitle={"العملاء"}
        menuIcon={<UsersRound size={30} className="text-yellow-300" />}
      >
        <div className="w-full  flex  flex-col items-center text-white">
          <div className="w-full flex flex-col items-center gap-2 p-2">
            <Link
              href={"/dashboard/clients/new"}
              className={menuStyle}
              onClick={() => toggleSidebar()}
              prefetch={true}
            >
              <p>عميل جديد</p>
              <UserRoundPlus size={30} strokeWidth={1} />
            </Link>

            <Link
              href={"/dashboard/clients/display"}
              // prefetch={false}
              className={menuStyle}
              onClick={() => toggleSidebar()}
              prefetch={true}
            >
              <p>ارصدة العملاء</p>
              <UsersRound size={30} />
            </Link>

            <Link
              href={"/dashboard/clients/addcar"}
              className={menuStyle}
              prefetch={true}
            >
              <p>اضافة سيارة </p>
              <Car size={30} strokeWidth={1} onClick={() => toggleSidebar()} />
            </Link>

            <Link
              href={"/dashboard/clients/statment/"}
              className={menuStyle}
              prefetch={true}
              onClick={() => toggleSidebar()}
            >
              {/* <FileCheck size={35} /> */}
              <p>كشف حساب عميل </p>
              <Receipt size={30} strokeWidth={1} />
            </Link>
          </div>
        </div>
      </ExpandMenu>
    </>
  );
};
export default ClientMenu;
