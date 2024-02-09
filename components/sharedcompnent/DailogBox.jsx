import React from "react";
import { AlertDialog, AlertDialogContent } from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";
import { XSquare } from "@/lib/icons";
import { Separator } from "../ui/separator";
function DailogBox({ children, open, setOpen, title,borederRed="border-primary" }) {
  return (
    <AlertDialog dir="RTL" open={open} onOpenChange={setOpen}  >
      <AlertDialogContent className={`bg-accent  border-t-8 ${borederRed}  rounded-none`}>
        <div className="flex items-center w-full justify-between">
          <p>{title}</p>
          <Button
            variant="ghost"
            onClick={() => {
              setOpen(false);
            }}
            className="w-fit"
          >
            <XSquare color="#f80d0d" />
          </Button>
        </div>
        <Separator className="bg-white/10"/>
        {children}
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DailogBox;
