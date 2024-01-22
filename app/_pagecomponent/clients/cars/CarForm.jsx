"use client";
import ClearButton from "@/components/shared/ClearButton";
import INPUT from "@/components/shared/INPUT";
import Submit from "@/components/shared/Submit";
import React, { useState } from "react";
import { AddNewCar } from "@/db/cars";
import SelectClient from "@/app/_pagecomponent/clients/cars/SelectClient";
import { toast } from "sonner";
import { validateForm } from "@/lib/validation/addCar";
import { CarFront, Car, GiKeyCard, RiCalendar2Fill } from "@/lib/icons";

function CarForm({ clientData, setOpen }) {
  const [ClientId, setClientId] = useState("");

  const handleSubmit = async (data) => {
    const carName = data.get("carName");
    const Model = data.get("Model");
    const CarNo = data.get("CarNo");
    const BodyNo = data.get("BodyNo");
    const formattedCarNo = CarNo.replace(/\s/g, "").toUpperCase();

    const car = {
      carName,
      Model,
      CarNo: formattedCarNo,
      BodyNo,
      clientId: parseInt(ClientId),
    };

    const validation = validateForm(car);
    if (!validation.isValid) {
      toast.error(validation.errorMessage);
      return;
    }
    
    const result = await AddNewCar(car);
    if (result.code === 400) {
      toast.error(result.msg);
      return;
    }
    if (result.code === 200) {
      toast.success(result.msg);
      setOpen(false);
      return;
    }
  };
  return (
    <form
      action={handleSubmit}
      className="flex flex-col   flex-wrap gap-4 p-4 w-full  text-white max-w-md border rounded"
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
        placeholder=" رقم اللوحة الاجنبي"
        icon={<Car />}
        iconBgColor="bg-systemColor-alzami"
      />

      <INPUT
        type="text"
        name="carName"
        placeholder="نوع السيارة"
        icon={<CarFront />}
        id="carNameId"
        iconBgColor="bg-gray-500"
      />
      <INPUT
        type="text"
        name="Model"
        placeholder="الموديل"
        icon={<RiCalendar2Fill />}
        iconBgColor="bg-gray-500"
      />

      <INPUT
        type="text"
        name="BodyNo"
        placeholder="رقم الهيكل"
        icon={<GiKeyCard />}
        iconBgColor="bg-gray-500"
      />

      <div className="flex items-center gap-4 justify-end  w-full">
        <Submit />
        <ClearButton formId={"Newcar"} FoucFiled={"carNameId"} />
      </div>
    </form>
  );
}

export default CarForm;
