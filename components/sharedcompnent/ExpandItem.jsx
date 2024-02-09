import React from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import {
  ChevronsDown,
  ChevronsUp,
   
} from "lucide-react";

function ExpandItem({ isOpen, setIsOpen, menuTitle, menuIcon, children, color = "bg-sky-950" }) {
  return (
    <>
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-full "
      >
        <CollapsibleTrigger asChild>
          <div className={`flex items-end w-full ${color} gap-4  `}>
            <Button
              variant="ghost"
              className="flex items-center  gap-2 w-full justify-between text-white rounded-none h-8  text-sm"
            >
              <div className="flex items-center justify-center gap-4 w-full  h-full">
                {menuIcon}
                <div className="flex items-center justify-center py-1 text-sm  font-bold  w-full">{menuTitle}</div>
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

export default ExpandItem
