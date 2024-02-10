"use client";
import React, { useState } from "react";
import { Angry, Lightbulb } from "lucide-react";
import { VscCommentUnresolved } from "react-icons/vsc";
import { Button } from "@/components/ui/button";
import { getRecordCounts } from "@/db/dashboard";
import { Bell } from "@/lib/icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

export const ClientActivityDropMenu = ({ gotoActivity }) => {
  const [open, setOpen] = useState(false);
  const [clientData, setClientData] = useState({});
  const collectData = async () => {
    const data = await getRecordCounts();
    setOpen(!open);
    setClientData(pre => data);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const DoPush = (url) => {
    gotoActivity(url);
    handleClose();

  };

  return (
    <>
      <DropdownMenu open={open} onOpenChange={collectData} onClose={handleClose} dir="RTL">
        <DropdownMenuTrigger asChild onClick={collectData}>
          <Button className="rounded-l-none p-0 w-8 bg-white "><Bell size={20} strokeWidth={1.5} className="text-blue-700" /></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel className="bg-blue-400 text-white text-center ">تفاعل العملاء</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => DoPush("/dashboard/clients/comment")}>
              <div className="flex items-center justify-between px-1 w-full">
                <div className="flex items-center gap-1">
                  <VscCommentUnresolved size={15} />
                  <p>مشاركات  العملاء</p>
                </div>
                <div className="flex gap-1 ">
                  <span className="text-red-500 px-1   flex items-center justify-center">{clientData.pendingComments || 0}</span>
                  <span className="text-green-500 px-1 flex items-center justify-center">{clientData.visibleComments || 0}</span>
                </div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => DoPush("/dashboard/clients/complain")}>
              <div className="flex items-center justify-between px-1 w-full">
                <div className="flex items-center gap-1">
                  <Angry size={15} strokeWidth={1.25} />

                  <p>شكاوي  العملاء</p>
                </div>
                <div className="flex gap-1 ">
                  <span className="text-red-400 px-1    flex items-center justify-center">{clientData.pendingComplains}</span>
                  <span className="text-green-500 px-1   flex items-center justify-center">{clientData.visibleComplains}</span>
                </div>
              </div>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => DoPush("/dashboard/clients/suggestion")}>
              <div className="flex items-center justify-between px-1 w-full">
                <div className="flex items-center gap-1">
                  <Lightbulb size={15} strokeWidth={1.25} />
                  <p>اقتراحات  العملاء</p>
                </div>
                <div className="flex gap-1 ">
                  <span className="text-red-500 px-1  flex items-center justify-center">{clientData.pendingSuggestions}</span>
                  <span className="text-green-500 px-1  flex items-center justify-center">{clientData.visibleSuggestions}</span>
                </div>
              </div>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
