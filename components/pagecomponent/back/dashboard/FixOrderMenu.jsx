"use client";
import {useState} from "react";
import Link from 'next/link';
import { Car, FileCheck, FileEdit, FilePlus, PlusCircle } from 'lucide-react';
import { FaCarCrash } from "react-icons/fa";
import ExpandMenu from "./ExpandMenu";
const FixOrderMenu = ({ toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuStyle =
    "bg-sky-900 w-full px-3 h-10   rounded-md flex items-center justify-between text-white   font-semibold";
  return (
    <>
      <ExpandMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        menuTitle={"كرت صيانة"}
        menuIcon={<FaCarCrash size={30} className="text-yellow-300" />}
      >
        <div className="w-full  flex  flex-col items-center text-white">
          <div className="w-full flex flex-col items-center gap-2 p-2">
            <Link
              href={"/dashboard/fixing/neworder"}
              className={menuStyle}
              onClick={() => toggleSidebar()}
              prefetch={true}
            >
              <p>كرت صيانة جديد</p>
              <FilePlus size={25} strokeWidth={1} />
            </Link>

            <Link
              href={"/dashboard/fixing/displayorders"}
              className={menuStyle}
              onClick={() => toggleSidebar()}
              prefetch={true}
            >
              <p>عرض كروت الصيانة</p>
              <FileEdit size={25} strokeWidth={1} />
            </Link>
            {/* <Link
              href={"/dashboard/fixing/addservice"}
              className={menuStyle}
              onClick={() => toggleSidebar()}
              prefetch={true}
            >
              <p>اضافة جديدة لكرت صيانة</p>
              <PlusCircle size={30} />
            </Link> */}
            <Link
              href={"/dashboard/fixing/closeorder"}
              className={menuStyle}
              onClick={() => toggleSidebar()}
              prefetch={true}
            >
              <p>اقفال كرت صيانة</p>
              <FileCheck size={25} strokeWidth={1} />
            </Link>
          </div>
        </div>
      </ExpandMenu>
    </>
  );
};

export default FixOrderMenu;
