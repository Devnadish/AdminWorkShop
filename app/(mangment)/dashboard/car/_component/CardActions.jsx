"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { deleteCar, getCar, updateCar } from "@/db/cars";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import INPUT from "@/components/shared/INPUT";
import Submit from "@/components/shared/Submit";
import ClearButton from "@/components/shared/ClearButton";
import {
  Pencil,
  Trash,
  Car,
  CarFront,
  RiCalendar2Fill,
  GiKeyCard,
  User,
} from "@/lib/icons";
import { toast } from "sonner";

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
    <div className="flex items-center justify-evenly  w-full">
      <Button
        onClick={() => getCarData(id, "delete")}
        size="sm"
        className="flex items-center justify-center border  h-9 text-red-500 bg-transpernt "
      >
        <Trash size={24} className="text-red-500   cursor-pointer" />
      </Button>
      <Button
        onClick={() => getCarData(id, "update")}
        size="sm"
        className="flex items-center justify-center h-9 border  bg-transpernt"
      >
        <Pencil size={24} className="text-lime-500   cursor-pointer" />
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

const ShowBeforActon = ({ open, setOpen, type, CarData, setCarData }) => {
  return (
    <>
      <AlertDialog dir="RTL" open={open} onOpenChange={setOpen}>
        <AlertDialogContent className="bg-gray-300">
          <AlertDialogHeader>
            <AlertDialogTitle
              className={`w-full text-center font-tajwal font-bold text-xl py-1 rounded  ${
                type === "update" ? "bg-lime-500" : "bg-red-500"
              }`}
            >
              {type === "update" ? "تعديل ملف سيارة" : "حذف ملف سيارة"}
            </AlertDialogTitle>
          </AlertDialogHeader>
          <FormAction
            type={type}
            CarData={CarData}
            setCarData={setCarData}
            setOpen={setOpen}
          />
          <AlertDialogFooter>
            <AlertDialogCancel>الغاء</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

const FormAction = ({ type, CarData, setCarData, setOpen }) => {
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
        className="flex flex-col   flex-wrap gap-4 p-4 w-full  text-white max-w-md border rounded"
        id="Newcar"
      >
        <INPUT
          type="text"
          name="CarNo"
          value={CarData.clientName}
        
          placeholder=" اسم العميل"
          icon={<User />}
          iconBgColor="bg-systemColor-required"
          disabled 
        />

        <INPUT
          type="text"
          name="CarNo"
          value={CarData.CarNo}
          placeholder=" رقم اللوحة الاجنبي"
          icon={<Car />}
          iconBgColor="bg-systemColor-required"
          disabled 
        />

        <INPUT
          type="text"
          name="carName"
          placeholder="نوع السيارة"
          icon={<CarFront />}
          value={CarData.carName}
          id="carNameId"
          iconBgColor="bg-gray-500"
          disabled={type === "delete"}
          onChange={(event) =>setCarData({ ...CarData, carName: event.target.value })}
        />
        <INPUT
          type="text"
          name="Model"
          placeholder="الموديل"
          icon={<RiCalendar2Fill />}
          iconBgColor="bg-gray-500"
          value={CarData.Model}
          disabled={type === "delete"}
          onChange={(event) =>setCarData({ ...CarData, Model: event.target.value })}
        />

        <INPUT
          type="text"
          name="BodyNo"
          placeholder="رقم الهيكل"
          icon={<GiKeyCard />}
          iconBgColor="bg-gray-500"
          value={CarData.BodyNo}
          disabled={type === "delete"}
          onChange={(event) =>setCarData({ ...CarData, BodyNo: event.target.value })}
          
        />

        <div className="flex items-center gap-4 justify-end  w-full">
        <Submit
            title={type === "update" ? "حفظ التعديلات" : "حذف الملف"}
            color={type === "update" ? "bg-lime-500" : "bg-red-500"}
            textColor={type === "update" ? "text-black" : "text-white"}
            icon={type === "update" ? <Pencil /> : <Trash />}
          />
          <ClearButton formId={"Newcar"} FoucFiled={"carNameId"} />
        </div>
      </form>
    </>
  );
};
