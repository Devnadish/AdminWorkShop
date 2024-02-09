"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { getClient } from "@/db/clients";
import { CiEdit, Trash } from "@/lib/icons";
import { ShowBeforActon } from "./ShowBeforActon";

function ClientCardAction({ id }) {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");
  const [ClientData, setClientData] = useState({});

  const getClientData = async (id, mode) => {
    const dbClientData = await getClient(id);
    setOpen(true);
    setType(mode);
    setClientData({
      id: dbClientData.clientIDs,
      name: dbClientData.name,
      mobile: dbClientData.mobile,
      email: dbClientData.email,
    });
  };

  return (
    <div className="flex items-center justify-end gap-4  w-full">
      <Button
        variant="secondary"
        onClick={() => getClientData(id, "delete")}
        size="sm"
        className="flex items-center justify-center   text-red-500"
      >
        <Trash size={24} className="text-red-500 " strokeWidth={1} />
      </Button>

      <Button
        onClick={() => getClientData(id, "update")}
        variant="secondary"
        size="sm"
        className="flex items-center justify-center   text-red-500"
      >
        <CiEdit size={24} className="text-lime-500   cursor-pointer" />
      </Button>
      <ShowBeforActon
        open={open}
        setOpen={setOpen}
        type={type}
        ClientData={ClientData}
        setClientData={setClientData}
      />
    </div>
  );
}
export default ClientCardAction;
