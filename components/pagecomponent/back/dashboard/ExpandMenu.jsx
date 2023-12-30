import React from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { FaCashRegister } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import {
  ChevronsDown,
  ChevronsUp,
} from "lucide-react";

function ExpandMenu({ isOpen,setIsOpen,menuTitle,menuIcon,children }) {
  return (
    <>
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[100%] "
      >
        <CollapsibleTrigger asChild>
          <div className="flex items-end   bg-sky-950">
            <Button
              variant="ghost"
              // size="sm"
              className="flex items-center  gap-2 w-full justify-between text-white "
            >
              <div className="flex items-center justify-center gap-4 h-full">
                {menuIcon}
                <p className="flex items-center justify-center py-1 text-xl  font-bold ">{menuTitle}</p>
              </div>
              {isOpen ? <ChevronsUp /> : <ChevronsDown />}
            </Button>
          </div>
        </CollapsibleTrigger>

        <CollapsibleContent className="space-y-2">
         {children}
        </CollapsibleContent>
      </Collapsible>
    </>
  );
}

export default ExpandMenu
