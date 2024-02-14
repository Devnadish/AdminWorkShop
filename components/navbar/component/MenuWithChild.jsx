"use client";
import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger
} from "@/components/ui/menubar";
import Link from "next/link";

export const MenuWithChild = ({
  menuTitle, submenu, menuStyle, mainMenu, menuIcon, toggleSidebar, type,
}) => {
  const handleclose = () => {
    if (type === "mobile") {
      toggleSidebar();
    }
  };
  return (
    <MenubarMenu className="w-full">
      <MenubarTrigger className="w-full  bg-transparent  text-primary  text-md font-tajwal font-semibold flex items-center justify-center gap-4 hover:bg-primary hover:text-white">
        {menuIcon}
        {menuTitle}
      </MenubarTrigger>
      <MenubarContent className={mainMenu}>
        {submenu.map((menu) => {
          return (
            <MenubarItem asChild key={menu.id}>
              <Link
                href={menu.href}
                className={menuStyle}
                onClick={handleclose}
              >
                <p>{menu.title}</p>
                {menu.icon}
              </Link>
            </MenubarItem>
          );
        })}
      </MenubarContent>
    </MenubarMenu>
  );
};
