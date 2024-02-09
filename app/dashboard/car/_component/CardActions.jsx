"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { getCar } from "@/db/cars";
import {
  CiEdit,
  Pencil,
  Trash,
} from "@/lib/icons";
import { ShowBeforActon } from "./ShowBeforActon";

function CardActions({ id }) {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");
  const [CarData, setCarData] = useState({});

  const getCarData = async (id, mode) => {
    const dbCarData = await getCar(id);
    setOpen(true);
    setType(mode);
    setCarData({
      carId: dbCarData.id,
      clientName: dbCarData.clientName,
      carName: dbCarData.carName,
      CarNo: dbCarData.CarNo,
      MasterCar: dbCarData.MasterCar,
      BodyNo: dbCarData.BodyNo,
      Model: dbCarData.Model,
    });
  };

  return (
    <div className="flex items-center justify-end  w-full gap-4">
      <Button
        onClick={() => getCarData(id, "delete")}
        size="icon"
        variant="secondary"
       
      >
         <Trash size={24} className="text-destructive " strokeWidth={1} />
      </Button>
      <Button
        onClick={() => getCarData(id, "update")}
        size="icon"
        variant="secondary"
      >
         <CiEdit size={24} className="text-primary " />
      </Button>
      <ShowBeforActon
        open={open}
        setOpen={setOpen}
        type={type}
        CarData={CarData}
        setCarData={setCarData}
      />
    </div>
  );
}

export default CardActions;


