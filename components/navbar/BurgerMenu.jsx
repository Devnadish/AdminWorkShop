"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { menuItem } from "@/constant/menu";
import Link from "next/link";

function BuregerMenu({ navigation, lang }) {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button
        onClick={() => {
          setOpen(true);
        }}
        variant="menughost"
      >
        <Menu className="text-primary-foreground" />
      </Button>
      <Sheet open={open} onOpenChange={setOpen} onClose={handleClose}>
        <SheetContent className="p-8">
          <div className="mt-8">
            {menuItem.map((menu) => {
              return (
                <Link
                  className="flex items-center gap-2 p-4 border-b hover:bg-green-500 hover:text-primary-foreground"
                  key={menu.id}
                  href={menu.href}
                  onClick={handleClose}
                >
                  {menu.icon}
                  {menu.title}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col gap-4 items-center justify-center bg-yellow-300 text-xl p-4 rounded-md mt-4 border-4 border-dashed border-blue-400 shadow-lg">
            <p>تحت اشراف المهندس</p>
            <p className="text-2xl font-bold">معاذ الشريف</p>
            <p>جوال : 0509723508</p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default BuregerMenu;
