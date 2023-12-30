
import React from 'react'
import {  Smile } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
function ModalSlider({
  open,
  setOpen,
  title,
  description,
  children,
  side = "bottom",
}) {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Sheet open={open} onOpenChange={setOpen} onClose={handleClose}>
        {/* <Sheet key={side}> */}

        <SheetContent side={side}>
          <SheetHeader>
            <SheetTitle className="flex items-center justify-center  gap-2 mb-2 font-extrabold  underline underline-offset-8 text-md">
              {title}
            </SheetTitle>
            <SheetDescription className="flex items-center gap-2 mb-2 font-extrabold text-md">
              {description}
              <Smile className="text-green-600" />
            </SheetDescription>
          </SheetHeader>
          {children}
        </SheetContent>
      </Sheet>
    </>
  );
}

export default ModalSlider
