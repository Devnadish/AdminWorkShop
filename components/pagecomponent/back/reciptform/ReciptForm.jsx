"use client";
import React, { useState } from "react";
import Submit from "@/components/shared/Submit";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {  Car, Check, CircleDollarSign, Search } from "lucide-react";
import INPUT from "@/components/shared/INPUT";
import ClearButton from "@/components/shared/ClearButton";
import { Button } from "@/components/ui/button";
import {  getCarInfoForVoucher } from "@/db/cars";
import toast from "react-hot-toast";
import { validateForm } from "@/lib/validation/recipt";
import { saveRecietVoucher } from "@/db/reciet";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Wrench } from "lucide-react";






function ReciptForm() {
  const [carId,setCarId]=useState("")
  const [info,setInfo]=useState({})
    const [result, setResult] = useState({});
    const [open, setOpen] = useState(false);


const handleSubmit = async (data) => {
  const detail = data.get("detail");
  const amount = parseFloat(data.get("amount"));
  const docDate = new Date(data.get("docDate")).toISOString().slice(0, 10);
  const RecietData = {
    detail,
    fromID: parseFloat(info.clientId),
    fromName: info.clientName,
    amount,
    fixingCode: parseFloat(info.fixOrderId),
    docDate,
  };

  const validation = validateForm(RecietData,info.balance);
  if (!validation.isValid) {
    toast.error(validation.errorMessage);
    return;
  }

  const Reciet = await saveRecietVoucher(RecietData);

  setResult({
    recietNo: Reciet.recietNo,
    client: Reciet.client,
    amt: Reciet.amt,
    fixNo: Reciet.fixNo,
    msg: Reciet.msg,
  });
  setInfo({})
  setCarId("")
  document.getElementById("RecietForm").reset()

   setOpen(true);




};
const findClientByCarId = async () => {
  try {
    const car = await getCarInfoForVoucher(carId);
    if (car.Carexisit=== 'not Exisit' ) {
      toast.error(car.msg);
      setInfo({});
      return
    }

    setInfo({
      clientId: car.carInfo.clientId,
      clientName: car.carInfo.clientName,
      fixOrderId: car.carInfo.fixOrederId,
      fixamt: car.carInfo.fixOrederAmt,
      recipt: car.recipt,
      balance: car.carInfo.fixOrederAmt - car.recipt
    });
  } catch (error) {
   console.log(error) // Handle any unexpected errors here
  }
};




  return (
    <div className="flex flex-col items-center justify-center w-full  border p-4 rounded-md border-white/30  max-w-md mx-auto gap-4">
      <div className="flex items-center self-start gap-3 flex-col w-full">
        <div className="flex items-center justify-around gap-4">
          <INPUT
            placeholder={" رقم السيارة"}
            name={"CarId"}
            type={"text"}
            icon={<Car />}
            cN="flex-1"
            h="h-9"
            w="w-[200px]"
            textsize="text-[1.5rem]"
            //   bgColor="bg-red-300"
            id="CarId"
            value={carId}
            onChange={(e) => {
              setCarId(e.target.value);
            }}
          />
          <Button
            onClick={() => {
              findClientByCarId();
            }}
            className="h-9 bg-orange-700"
            type="button"
          >
            <Check />
          </Button>

        </div>
        {info.clientName && carId && (
          <div className="flex items-start self-start gap-3 flex-col bg-sky-700 w-full p-3 shadow-xl w-full rounded-md">
            <div className="flex items-center justify-between w-full">
            <p className="flex gap-4">
              <span>اسم العميل</span>
              {info.clientName}
            </p>
            <div className="flex items-center gap-4 bg-white/30 px-2 rounded">
              <Wrench size={20}/>
              <span>{info.fixOrderId}</span>
            </div>
            </div>
            <div className="flex items-center justify-between w-full">
            <p className="flex items-center gap-4">
              <span>اجمالي الكرت</span>
                <span>{info.fixamt}</span>

            </p>
            <p className="flex gap-4">
              <span>اجمالي المستلم</span>

                <span>{info.recipt}</span>
            </p>
            </div>
            <div className="flex items-center justify-center py-1 w-full bg-sky-500 ">
              <p className="flex items-center gap-4">
                <span>الرصيد المتاح </span>
                <span>{info.balance}</span>
              </p>
            </div>
          </div>
        )}
      </div>
      <form
        action={handleSubmit}
        id="RecietForm"
        className="max-w-md mx-auto w-full flex flex-col items-center gap-2 "
      >
        <div className=" flex items-start justify-start flex-col   gap-4 w-full ">
          {/* <FindCar/> */}

          <INPUT
            placeholder={"المبلغ"}
            name={"amount"}
            type={"number"}
            icon={<CircleDollarSign />}
            cN="flex-1"
            h="h-[50px]"
            w="w-[200px]"
            textsize="text-[1.5rem]"
            bgColor="bg-red-300"
            id="amount"
          />
        </div>
        {/* header */}

        <div className="relative   w-full  ">
          <Label
            htmlFor="description"
            className="absolute -top-5 left-2  bg-yellow-300 text-black text-md px-3 rounded-md font-normal py-1"
          >
            الوصف
          </Label>
          <Textarea
            type="text"
            name="detail"
            placeholder="مرجعية المبلغ"
            className="border border-gray-300 rounded px-4 py-2 w-full resize-none"
            rows={3}
          />
        </div>

        <div className="flex items-center justify-around w-full">
          <Submit />
          <ClearButton formId={"RecietForm"} FoucFiled={"amount"} />
        </div>
      </form>
      <ShowAlert open={open} setIsopen={setOpen} data={result} />
    </div>
  );
}

export default ReciptForm;

const ShowAlert=({open,setIsopen,data})=>{
  return (

  <AlertDialog open={open}>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>تم انشاء سند فبض</AlertDialogTitle>
      </AlertDialogHeader>

      <div className="flex flex-col">
        <div className="flex items-center justify-between border-b-2  py-1 mb-5">
          <p className="flex gap-4 ">
            <span>رقم السند</span>
            <span className="">{data.recietNo}</span>
          </p>
          <p className="flex gap-4">
            <span>رقم امر الاصلاح</span>
            {data.fixNo}
          </p>
        </div>

        <p className="flex gap-4">
          <span>اسم العميل</span>
          {data.client}
        </p>
        <p className="flex gap-4 bg-green-950 text-white self-end px-4 py-2 rounded text-xl font-semibold">
          <span>المبلغ</span>
          <span className="bg-red-500 px-3 rounded">
              {data.amt}
            </span>
        </p>
      </div>

      <AlertDialogFooter className="flex items-center gap-4">
        <AlertDialogAction onClick={() => setIsopen(false)}>
          اغلاق
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);
}
