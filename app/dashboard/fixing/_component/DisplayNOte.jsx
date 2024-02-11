"use client";
import React, { useState } from "react";
import ExpandItem from "@/components/sharedcompnent/ExpandItem";
import { MdOutlineEditNote } from "react-icons/md";
import { DateCaption } from "@/components/sharedcompnent/Caption";
import { User } from "lucide-react";
import ExpandNote from "@/app/dashboard/dashboard/_component/ExpandNote";

function DisplayNOte({ note }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    {note.length !== 0  ?
    (<ExpandNote
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      menuTitle={
        note.length === 0
          ? " ملاحظات للكرت"
          : "تو جد :  " + note.length + " ملاحظات"
      }
      color={note.length === 0 ? "bg-secondary" : "bg-accent"}
      menuIcon={<MdOutlineEditNote size={30} className="text-primary" />}
    >
      <div className="flex flex-col gap-4 p-3">
        {note.map((el, index) => {
          return (
            <div
              key={el.id}
              className="border  flex flex-col justify-between rounded p-4 gap-4 border-border shadow-xl"
            >
              <p>{el.note}</p>
              <div className="h-8  flex items-center justify-between w-full px-3">
                <div className="text-primary-foreground  px-2 rounded text-base border-border flex items-center gap-4">
                  <User strokeWidth={1} className="text-accent-foreground/30"/>
                  <p className="text-accent-foreground/40">{el.userName}</p>
                </div>
                <DateCaption data={el.updatedAt} />
              </div>
            </div>
          );
        })}
      </div>
    </ExpandNote>) : null }
    </>
  );
}

export default DisplayNOte;
