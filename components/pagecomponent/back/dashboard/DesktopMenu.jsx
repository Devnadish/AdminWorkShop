
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { clientMenu, maintainanceMenu, fininceMenu, settingeMenu } from "@/constant/menu"
import {
  UsersRound,
  BadgeDollarSign,
  Settings
} from "lucide-react";
import Link from "next/link";
import { FaCarCrash } from "react-icons/fa";

export function DesktopMenu() {
  const menuStyle = "flex w-full items-center justify-between px-1"
  const mainMenu = "w-96  md:w-60 font-tajwal"
  return (
    <Menubar className="bg-transparent h-full   w-full  flex items-center gap-4 justify-around flex-col md:flex-row border-none" dir="RTL">
      <MenuWithChild menuTitle="العملاء" menuIcon={<UsersRound size={20} strokeWidth={1} />} submenu={clientMenu} menuStyle ={menuStyle} mainMenu={mainMenu}/>
      <MenuWithChild menuTitle="الصيانة" menuIcon={<FaCarCrash size={20} strokeWidth={1} />} submenu={maintainanceMenu} menuStyle={menuStyle} mainMenu={mainMenu} />
      <MenuWithChild menuTitle="المالية" menuIcon={<BadgeDollarSign size={20} strokeWidth={1} />} submenu={fininceMenu} menuStyle={menuStyle} mainMenu={mainMenu} />
      <MenuWithChild menuTitle="الاعدادات" menuIcon={<Settings size={20} strokeWidth={1} />} submenu={settingeMenu} menuStyle={menuStyle} mainMenu={mainMenu} />
    </Menubar>
  )
}
export default DesktopMenu

const MenuWithChild = ({ menuTitle, submenu, menuStyle, mainMenu, menuIcon })=>{
  return (
  <MenubarMenu className="w-full" >
      <MenubarTrigger className="w-full bg-white/30 text-lg font-tajwal font-semibold flex items-center justify-center gap-4">
        {menuIcon}
        {menuTitle}
        </MenubarTrigger>
    <MenubarContent className={mainMenu} >
        {submenu.map(
          (menu)=>{return(
            <MenubarItem key={menu.id} className={menuStyle}>
              <Link href={menu.href} className={menuStyle}>
              <p>
                {menu.title}
              </p>
              {menu.icon}
              </Link>
            </MenubarItem>
          )})}
    </MenubarContent>
  </MenubarMenu>
)}
