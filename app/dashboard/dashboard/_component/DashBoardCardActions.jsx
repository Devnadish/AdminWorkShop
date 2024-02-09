"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import { newNote } from "@/db/fixNote";
import { ImagePlus, Edit } from "@/lib/icons";
import Ttip from "@/components/sharedcompnent/Ttip";
import { Button } from "@/components/ui/button";
import { AddImage } from "./AddImage";
import { AddNote } from "./AddNote";

function DashBoardCardActions({ cardid, carId }) {
  const { data: session } = useSession();
  const [openNote, setOpenNote] = useState(false);
  const [Imageopen, setImageOpen] = useState(false);

  const fixCard = cardid;
  const handleNote = async (data) => {
    const note = data.get("note");
    const notedata = {
      note,
      CardId: fixCard,
      userID: session.user.phone,
      userName: session.user.name,
      userAvatar: session.user.avatar,
    };
    const saveNote = await newNote(notedata);
    handleclose();
  };
  const handleclose = () => {
    setOpenNote(false);
  };

  return (
    <div className="flex items-center justify-end w-full gap-2 py-2 ">
      <Button
        variant="outline"
        onClick={() => {
          setOpenNote(true);
        }}
      >
        <Ttip tool={"اضافة ملاحظة"}>
          <Edit className="text-primary" />
        </Ttip>
      </Button>

      <Button
        variant="outline"
        onClick={() => {
          setImageOpen(true);
        }}
      >
        <Ttip tool={"البوم الصور"}>
          <ImagePlus className="text-primary" />
        </Ttip>
      </Button>

      {openNote && (
        <AddNote
          cardid={cardid}
          open={openNote}
          setOpen={setOpenNote}
          handleNote={handleNote}
        />
      )}

      {Imageopen && (
        <AddImage
          carId={carId}
          open={Imageopen}
          setOpen={setImageOpen}
          handleNote={handleNote}
        />
      )}
    </div>
  );
}

export default DashBoardCardActions;
