"use client";
import React from "react";
import { deleteCar, updateCar } from "@/db/cars";
import INPUT from "@/components/sharedcompnent/INPUT";
import Submit from "@/components/sharedcompnent/Submit";
import ClearButton from "@/components/sharedcompnent/ClearButton";
import {
  Pencil,
  Trash,
  Car,
  CarFront,
  RiCalendar2Fill,
  GiKeyCard,
  User
} from "@/lib/icons";
import { toast } from "sonner";

export const FormAction = ({ type, CarData, setCarData, setOpen }) => {
  const handleSubmit = async (data) => {
    const carName = data.get("carName");
    const Model = data.get("Model");
    const CarNo = data.get("CarNo");
    const BodyNo = data.get("BodyNo");
    // const formattedCarNo = CarNo.replace(/\s/g, "").toUpperCase();
    const car = {
      carName,
      Model,
      BodyNo,
    };

    if (type === "update") {
      const dbUpdateCar = await updateCar(CarData.carId, car);
      if (dbUpdateCar.code === 200) {
        toast.info(dbUpdateCar.msg);
        setOpen(false);
        return;
      }
    }


    if (type === "delete") {
      const dbDeleteCar = await deleteCar(CarData.carId);
      if (dbDeleteCar.code === 400) {
        toast.error(dbDeleteCar.msg);
        return;
      }
      if (dbDeleteCar.code === 200) {
        toast.success(dbDeleteCar.msg);
        setOpen(false);
        return;
      }

      return;
    }
  };



  return (
    <>
      <form
        action={handleSubmit}
        className="flex flex-col   flex-wrap gap-4 p-4 w-full  text-white max-w-md  rounded"
        id="Newcar"
      >
        <INPUT
          type="text"
          name="CarNo"
          value={CarData.clientName}

          placeholder=" اسم العميل"
          icon={<User className="text-primary" />}
          disabled />

        <INPUT
          type="text"
          name="CarNo"
          value={CarData.CarNo}
          placeholder=" رقم اللوحة الاجنبي"
          icon={<Car className="text-primary"/>}
          disabled />

        <INPUT
          type="text"
          name="carName"
          placeholder="نوع السيارة"
          icon={<CarFront className="text-primary" />}
          value={CarData.carName}
          id="carNameId"
          disabled={type === "delete"}
          onChange={(event) => setCarData({ ...CarData, carName: event.target.value })} />
        <INPUT
          type="text"
          name="Model"
          placeholder="الموديل"
          
          icon={<RiCalendar2Fill className="text-primary"/>}
          value={CarData.Model}
          disabled={type === "delete"}
          onChange={(event) => setCarData({ ...CarData, Model: event.target.value })} />

        <INPUT
          type="text"
          name="BodyNo"
          placeholder="رقم الهيكل"
          icon={<GiKeyCard className="text-primary"/>}
          value={CarData.BodyNo}
          disabled={type === "delete"}
          onChange={(event) => setCarData({ ...CarData, BodyNo: event.target.value })} />

        <div className="flex items-center gap-4 justify-end  w-full">
          <Submit
            title={type === "update" ? "حفظ التعديلات" : "حذف الملف"}
            color={type === "update" ? "bg-primary" : "bg-destructive"}
            textColor={type === "update" ? "text-black" : "text-white"}
            icon={type === "update" ? <Pencil /> : <Trash />} />
          <ClearButton formId={"Newcar"} FoucFiled={"carNameId"} />
        </div>
      </form>
    </>
  );
};
