"use client";
import React, { useState } from "react";
import { Car, Check } from "lucide-react";
import INPUT from "@/components/shared/INPUT";
import { Button } from "@/components/ui/button";
import { Wrench } from "lucide-react";
import { getCarInfoForVoucher } from "@/db/cars";
import Spinner from "./Spinner";

export function CheckCarInfoForVoucher(props) {
  const [isloading,setIsloading]=useState(false)

  const findClientByCarId = async () => {
    try {
      setIsloading(true)
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
        balance: (car.carInfo.fixOrederAmt- car.recipt) + car.payment

      });
    } catch (error) {
      console.log(error) // Handle any unexpected errors here
    }finally{
      setIsloading(false)
    }

  };



  return (

  <div className="flex items-center self-start gap-3 flex-col w-full">
    {isloading && <Spinner/>}
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

      <div className="flex items-center justify-between w-full ">

        <p className="flex items-center gap-4">
          <span>اجمالي الكرت</span>
          <span>{props.info.fixamt}</span>

        </p>
        <p className="flex gap-4">
          <span>المستلم</span>

          <span>{props.info.recipt}</span>
        </p>
        <p className="flex gap-4">
          <span>المصروف</span>

          <span>{props.info.payment}</span>
        </p>
      </div>
      <div className="flex items-center justify-center flex-col py-1 w-full bg-sky-500 ">
        <p className="flex items-center gap-4 text-left">
          <span>المتبقي </span>
          <span>{props.info.balance}</span>
        </p>
          <p className="bg-red-500 px-4 rounded-md  self-end text-sm ">{props.info.balance <0 && "تجاوزت  القبض قيمة كرت الاصلاح" }</p>
          <p className="bg-red-500 px-4 rounded-md  self-end text-sm ">{props.info.balance === 0 && "الرجاء اقفال الكرت"}</p>
      </div>
    </div>}
  </div>);
}
