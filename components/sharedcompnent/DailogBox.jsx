import React from "react";
import { AlertDialog, AlertDialogContent, AlertDialogHeader } from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { XSquare } from "@/lib/icons";
import { Separator } from "../ui/separator";
function DailogBox({ children, open, setOpen, title,borederRed="border-primary",bgColor="bg-transpernt" }) {
  
  return (
    <AlertDialog dir="RTL" open={open} onOpenChange={setOpen}   >

      <AlertDialogContent className={`bg-accent  border-t-8 ${borederRed}  p-4`}>
      <AlertDialogHeader >
      <div className={`flex items-center w-full justify-between h-8 ${bgColor} `}>
          <p>{title}</p>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => {
              setOpen(false);
            }}
            className="w-fit p-0"
          >
            <XSquare color="#f80d0d" />
          </Button>
        </div>
        </AlertDialogHeader>
        
        <Separator className="bg-white/10"/>
        <div className="flex items-center justify-center w-full border border-border ">
        {children}
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DailogBox;
