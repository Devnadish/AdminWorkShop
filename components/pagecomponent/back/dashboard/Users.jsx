import {
  UserRoundPlus,
  CircleUser,
  // UserRoundSearch,
} from "lucide-react";
import Link from 'next/link';
import {useState} from "react";
import ExpandMenu from "./ExpandMenu";
import { BsTools } from "react-icons/bs";
import { FaUsers } from "react-icons/fa6";
import { Settings, HardHat } from "lucide-react";
import { GiOfficeChair } from "react-icons/gi";

const Setting = ({ toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuStyle =
    "bg-sky-900 w-full px-3 py-1    rounded-md flex items-center justify-between text-white   font-semibold";
  return (
    <>
      <ExpandMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        menuTitle={"الاعدادات"}
        menuIcon={<Settings size={30} className="text-yellow-300" />}
      >
        <div className="w-full  flex  flex-col items-center text-white gap-2 mt-2">

                <Link
                  href={"/dashboard/signup"}
                  className={menuStyle}
                  onClick={() => toggleSidebar()}
                  prefetch={true}
                >
                  <p>مستخدم جديد</p>
                  <UserRoundPlus size={20} className="text-yellow-300" />
                </Link>
          <Link
            href={"/dashboard/setting/expences"}
            className={menuStyle}
            onClick={() => toggleSidebar()}
            prefetch={true}
          >
            <p>المصاريف الادارية</p>
            <GiOfficeChair size={20} className="text-yellow-300" />
          </Link>
          <Link
            href={"/dashboard/setting/labor"}
            className={menuStyle}
            onClick={() => toggleSidebar()}
            prefetch={true}
          >
            <p>الموظفين</p>
            <HardHat  size={20} className="text-yellow-300" />
          </Link>
            </div>


      </ExpandMenu>
    </>
  );
};
export default Setting;
