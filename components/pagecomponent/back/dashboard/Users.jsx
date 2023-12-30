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

const Users = ({ toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuStyle =
    "bg-sky-900 w-full px-3 py-1    rounded-md flex items-center justify-between text-white   font-semibold";
  return (
    <>
      <ExpandMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        menuTitle={"المستخدمين"}
        menuIcon={<CircleUser size={30} className="text-yellow-300" />}
      >
        <div className="w-full  flex  flex-col items-center text-white">
          <div className="w-full flex flex-col items-center gap-4 p-2">
            <div className="flex w-full flex-col  gap-4 items-center ">
              <div className="flex flex-col w-full">
                <Link
                  href={"/dashboard/signup"}
                  className={menuStyle}
                  onClick={() => toggleSidebar()}
                  prefetch={true}
                >
                  <p>مستخدم جديد</p>
                  <UserRoundPlus size={20} className="text-yellow-300" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </ExpandMenu>
    </>
  );
};
export default Users;
