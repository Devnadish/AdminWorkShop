"use client"
import ClearButton from '@/components/shared/ClearButton';
import INPUT from '@/components/shared/INPUT';
import Submit from '@/components/shared/Submit';
import { Car } from 'lucide-react';
import React, { useState } from 'react'
import { AddNewCar } from "@/db/cars";
import SelectClient from "@/components/pagecomponent/back/clients/cars/SelectClient";

import { toast } from "react-hot-toast";
import { validateForm } from "@/lib/validation/addCar";
import { GiKeyCard } from "react-icons/gi";
import { RiCalendar2Fill } from "react-icons/ri";
import { SiAdobeindesign as ID } from "react-icons/si";


function CarForm({ clientData }) {

const [ClientId, setClientId] = useState("");

  const handleSubmit = async (data) => {
    const carName = data.get("carName");
    const Model = data.get("Model");
    const CarNo = data.get("CarNo");
    const BodyNo = data.get("BodyNo");

    const car = {
      carName,
      Model,
      CarNo,
      BodyNo,
      clientId: parseInt(ClientId),
      // clientName: client,
      // CId: clientId,
    };

    const validation = validateForm(car);
    if (!validation.isValid) {
      toast.error(validation.errorMessage);
      return;
    }
    const result = await AddNewCar(car);
    toast.success(result);
    return;
  };
  return (
    <form
      action={handleSubmit}
      className="flex flex-col   flex-wrap gap-4 p-4 w-full  text-white max-w-md "
      id="Newcar"
    >
      <SelectClient
        clientData={clientData}
        ClientId={ClientId}
        setClientId={setClientId}
      />
      <INPUT
        type="text"
        name="CarNo"
        placeholder="استخدم رقم اللوحة الاجنبي"
        icon={<ID color={"red"} />}
      />

      <INPUT
        type="text"
        name="carName"
        placeholder="نوع السيارة"
        icon={<Car />}
        id="carNameId"
      />
      <INPUT
        type="text"
        name="Model"
        placeholder="الموديل"
        icon={<RiCalendar2Fill />}
      />

      <INPUT
        type="text"
        name="BodyNo"
        placeholder="رقم الهيكل"
        icon={<GiKeyCard />}
      />

      <div className="flex items-center justify-around">
        <Submit />
        <ClearButton formId={"Newcar"} FoucFiled={"carNameId"} />
      </div>
    </form>
  );
}

export default CarForm
