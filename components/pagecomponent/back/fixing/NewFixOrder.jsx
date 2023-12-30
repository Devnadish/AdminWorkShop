"use client";
import { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import Submit from "@/components/shared/Submit";
import { newFixingOrder } from "@/db/fixing";
import { saveRecietVoucher, updateClientReceiptBalance } from "@/db/reciet";
import PageTitle from "@/components/shared/PageTitle";
import { PiEngineDuotone } from "react-icons/pi";
import toast from "react-hot-toast";
import ClientWithCar from "@/components/shared/ClientWithCar";
import { validateForm } from "@/lib/validation/fixing";
import INPUT from "@/components/shared/INPUT";
import { BiHardHat } from "react-icons/bi";
import { FaCalendarCheck } from "react-icons/fa";
import { BsCashStack } from "react-icons/bs";
import { FaCashRegister } from "react-icons/fa6";
import { FaBalanceScale } from "react-icons/fa";
import ClearButton from "@/components/shared/ClearButton";
import { CarIcon, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCarInfo } from "@/db/cars";

function NewFixOrder({ clientsWithCars }) {
  const [totalCost, setTotalCost] = useState(0);
  const [receivedAmount, setReceivedAmount] = useState(0);
  const [dueAmount, setDueAmount] = useState(totalCost - receivedAmount);
  const [FixCardNO, setFixCardNO] = useState(0);
  const [ClientID, setClientID] = useState("");
  const [ClientName, setClientName] = useState("");
  const [Carid, setCarid] = useState("");

  // -----------------------------------------------------------------
  const FixOrder_DBaction = async (orderData, ClientID, total) => {
    try {
      const [AddFixing, UpdateClientBalance] = await Promise.all([
        newFixingOrder(orderData),
        updateClientReceiptBalance(parseInt(ClientID), parseInt(total)),
      ]);

      if (AddFixing.exisit) {
        toast.error(AddFixing.msg);
        return "haveCard";
      } else {
        toast.success(AddFixing.msg);
        toast.success(UpdateClientBalance.msg);
        return "done";
      }
    } catch (error) {
      toast.error(`An error occurred: ${error}`);
    }
  };

  // ---------------------------------------------------------------
  const NewDoc = () => {
      setDueAmount(0);
  };

  const handlesubmit = async (data) => {
    const detail = data.get("serviceDescription");
    const delivery = data.get("deliveryDate");
    const engName = data.get("engName");
    const orderData = {
      detail,
      delivery,
      total: parseInt(totalCost),
      receive: parseInt(receivedAmount),
      clientId: parseInt(ClientID),
      clientName: ClientName,
      selectedCar: Carid,
      engName,
    };

    const validation = validateForm(orderData);
    if (!validation.isValid) {
      toast.error(validation.errorMessage);
      return;
    }

    const DONE = await FixOrder_DBaction(orderData, ClientID, totalCost);


  };

const handleGetCar = async () => {
  const carData = await getCarInfo(Carid);
  if (carData.exisit) {
    toast.error(carData.msg);
    return;
  }
    if (carData.Carexisit === "not Exisit") {
      toast.error(carData.msg);
      return;
    }

    setClientName(carData[0].clientName);
    setClientID(carData[0].clientId);

};




  useEffect(() => {
    setDueAmount(totalCost - receivedAmount);
  }, [totalCost, receivedAmount]);

  return (
    <div className="flex flex-col ">
      <div className="flex flex-col items-center justify-center  w-full gap-3  mt-4 p-2 ">
        <PageTitle
          title=" كرت اصلاح جديد"
          icon={
            <PiEngineDuotone
              size={40}
              className="text-orange-600 animate-pulse "
            />
          }
          bgColor="bg-white/30"
        />
        <div className="flex  items-center flex-col justify-start    self-start  ">
          <div className="flex  items-center justify-center gap-3">
            <INPUT
              placeholder="رقم لوحة  السيارة"
              name="car"
              icon={<CarIcon />}
              h="h-12"
              value={Carid}
              onChange={(e) => setCarid(e.target.value)}
            />

            <Button
              onClick={() => handleGetCar()}
              className="text-white bg-orange-600 h-12 w-12  rounded"
            >
              <Search />
            </Button>
          </div>
          <p className="self-start">{ClientName}</p>
        </div>
      </div>

      <div className="flex items-center justify-center flex-col gap-4  border rounded-md border-white/30 p-4">
        <form
          action={handlesubmit}
          id="fixingForm"
          className="flex flex-col items-center justify-center  w-full gap-3 bg-gray-800 p-2 mb-4 "
        >
          <Textarea
            placeholder="الخدمة المطلوبة"
            rows={5}
            name="serviceDescription"
            id="serviceDetail"
            className="border border-gray-300 rounded px-4 py-2 w-full resize-none"
          />
          <div className="flex items-center flex-col md:flex-row gap-2 w-full">
            <INPUT
              placeholder="المهندس"
              name="engName"
              icon={<BiHardHat />}
              h="h-10"
            />
            <INPUT
              placeholder="موعد التسليم"
              name="deliveryDate"
              icon={<FaCalendarCheck />}
              h="h-10"
            />
          </div>

          <div className="flex  gap-4 border flex-col md:flex-row  border-white/30  p-4 rounded-md w-full">
            <INPUT
              placeholder="التكلفة الاجمالية"
              type="number"
              name="totalCost"
              onChange={(event) => setTotalCost(event.target.value)}
              bgColor="bg-red-300"
              icon={<FaCashRegister />}
              h="h-12"
            />
            <INPUT
              placeholder="المبلغ المستلم"
              type="number"
              name="receivedAmount"
              value={receivedAmount}
              onChange={(event) => setReceivedAmount(event.target.value)}
              bgColor="bg-blue-300"
              icon={<BsCashStack />}
              h="h-12"
            />

            <INPUT
              placeholder="المتبفيى"
              value={dueAmount}
              disabled
              onChange={(event) => setDueAmount(event.target.value)}
              icon={<FaBalanceScale />}
              h="h-12"
            />
          </div>

          <div className="flex items-center gap-4 justify-end  w-full ">
            <Submit />
            <ClearButton formId={"fixingForm"} FoucFiled={"serviceDetail"} />
          </div>
        </form>
      </div>
    </div>
  );
}
export default NewFixOrder;
