"use client";
import React from "react";
import { Car, Check } from "lucide-react";
import INPUT from "@/components/shared/INPUT";
import { Button } from "@/components/ui/button";
import { Wrench } from "lucide-react";
import { getCarInfoForVoucher } from "@/db/cars";

export function CheckCarInfoForVoucher(props) {

  const findClientByCarId = async () => {
    try {
      const car = await getCarInfoForVoucher(props.carId);
      if (car.Carexisit === 'not Exisit') {
        toast.error(car.msg);
        props.setInfo({});
        return
      }

      props.setInfo({
        clientId: car.carInfo.clientId,
        clientName: car.carInfo.clientName,
        fixOrderId: car.carInfo.fixOrederId,
        fixamt: car.carInfo.fixOrederAmt,
        recipt: car.recipt,
        payment: car.payment,
        balance: car.recipt - car.payment
      });
    } catch (error) {
      console.log(error) // Handle any unexpected errors here
    }
  };



  return (<div className="flex items-center self-start gap-3 flex-col w-full">
    <div className="flex items-center justify-around gap-4">
      <INPUT placeholder={" رقم السيارة"} name={"CarId"} type={"text"} icon={<Car />} cN="flex-1" h="h-9" w="w-[200px]" textsize="text-[1.5rem]" //   bgColor="bg-red-300"
        id="CarId" value={props.carId} onChange={e => {
          props.setCarId(e.target.value);
        }} />
      <Button onClick={() => {
        findClientByCarId();
      }} className="h-9 bg-orange-700" type="button">
        <Check />
      </Button>

    </div>
    {props.info.clientName && props.carId && <div className="flex items-start self-start gap-3 flex-col bg-sky-700 w-full p-3 shadow-xl w-full rounded-md">
      <div className="flex items-center justify-between w-full">
        <p className="flex gap-4">
          <span>اسم العميل</span>
          {props.info.clientName}
        </p>
        <div className="flex items-center gap-4 bg-white/30 px-2 rounded">
          <Wrench size={20} />
          <span>{props.info.fixOrderId}</span>
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <p className="flex items-center gap-4">
          <span>اجمالي الكرت</span>
          <span>{props.info.fixamt}</span>

        </p>
        <p className="flex gap-4">
          <span>اجمالي المستلم</span>

          <span>{props.info.recipt}</span>
        </p>
        <p className="flex gap-4">
          <span>اجمالي المصروف</span>

          <span>{props.info.payment}</span>
        </p>
      </div>
      <div className="flex items-center justify-center py-1 w-full bg-sky-500 ">
        <p className="flex items-center gap-4">
          <span>الرصيد المتاح </span>
          <span>{props.info.balance}</span>
        </p>
      </div>
    </div>}
  </div>);
}
