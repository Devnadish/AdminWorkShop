"use client";
import { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import Submit from "@/components/shared/Submit";
import { newFixingOrder } from "@/db/fixing";
import {  updateClientReceiptBalance } from "@/db/reciet";
import PageTitle from "@/components/shared/PageTitle";
import { PiEngineDuotone } from "react-icons/pi";
import toast from "react-hot-toast";
import { validateForm } from "@/lib/validation/fixing";
import INPUT from "@/components/shared/INPUT";
import { BiHardHat } from "react-icons/bi";
import { FaCalendarCheck } from "react-icons/fa";
import { BsCashStack } from "react-icons/bs";
import { FaCashRegister } from "react-icons/fa6";
import { FaBalanceScale } from "react-icons/fa";
import ClearButton from "@/components/shared/ClearButton";
import { CarIcon, Search, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCarInfo } from "@/db/cars";
import { CheckCircle } from "lucide-react";


import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"

function NewFixOrder({ clientsWithCars, carData, labor }) {
  const [totalCost, setTotalCost] = useState();
  const [receivedAmount, setReceivedAmount] = useState();
  const [dueAmount, setDueAmount] = useState(0);
  const [FixCardNO, setFixCardNO] = useState(0);
  const [ClientID, setClientID] = useState("");
  const [ClientName, setClientName] = useState("");
  const [Carid, setCarid] = useState("");
  const [isShow, setIsShow] = useState(false);

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
        setClientName("");
        setClientID("");
        setCarid("")
        setDueAmount(0)
        setReceivedAmount(0)
        setTotalCost(0)
        document.getElementById("fixingForm").reset();
        return "done";
      }
    } catch (error) {
      toast.error(`An error occurred: ${error}`);
    }
  };

  // ---------------------------------------------------------------


  const handlesubmit = async (data) => {
    const detail = data.get("serviceDescription");
    const delivery = data.get("deliveryDate");
    const engName = data.get("engName");

// recheck car info befor save
    if(!Carid){return toast.error("تاكد من رقم السيارة ")}
    if (!ClientName){return toast.error("تاكد من اسم العميل ")}


    const carData = await getCarInfo(Carid);
if(carData){
    setClientName(carData[0]?.clientName);
    setClientID(carData[0]?.clientId);
}
    if (carData.exisit || carData.Carexisit === "not Exisit" ) {
      toast.error(carData.msg);
      return;
    }
//
    const orderData = {
      detail,
      delivery,
      total: parseInt(totalCost) || 0,
      receive: parseInt(receivedAmount) || 0,
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
    const total = parseFloat(totalCost) || 0;
    const received = parseFloat(receivedAmount) || 0;
    setDueAmount(total - received);
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
          bgColor="bg-sky-600"
        />
        <div className="flex items-center justify-start w-full bg-black py-3 px-3 rounded gap-4">
          <div className="flex items-center justify-between gap-3 flex-1">
            <INPUT
              placeholder="Car Plate Number"
              name="car"
              icon={<CarIcon />}
              value={Carid}
              onChange={(e) => setCarid(e.target.value)}
              iconBgColor="bg-systemColor-required"
            />

            <Button
              onClick={() => handleGetCar()}
              className="text-white bg-green-600 rounded"
            >
              <CheckCircle size={24} />
            </Button>
            </div>
            <div className="flex items-center gap-3 border flex-grow p-1 rounded border-white/40 text-white/60 flex-1">
              <span>
               اسم العميل :
              </span>
              <span>
                {ClientName}
              </span>
            </div>

            <Button
              onClick={() => setIsShow(true)}
              className="text-white bg-orange-700 rounded"
            >
              <Search size={24} />
            </Button>
          
        </div>

      </div>

      {/* <div className="flex items-center justify-center flex-col gap-4  border rounded-md border-white/30 p-4"> */}
        <form
          action={handlesubmit}
          id="fixingForm"
          className="flex items-center justify-center flex-col gap-4 shadow-lg  border rounded-md border-white/30 p-4 bg-gray-700"
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
              iconBgColor="bg-systemColor-optional"
            />
            <INPUT
              placeholder="موعد التسليم"
              name="deliveryDate"
              icon={<FaCalendarCheck />}
              h="h-10"
              iconBgColor="bg-systemColor-optional"
            />
          </div>

          <div className="flex  gap-4 border flex-col md:flex-row  border-white/30  p-4 rounded-md w-full">
            <INPUT
              placeholder="التكلفة الاجمالية"
              type="number"
              name="totalCost"
              onChange={(event) => setTotalCost(event.target.value)}
              // bgColor="bg-red-300"
              icon={<FaCashRegister />}
              h="h-9"
              iconBgColor="bg-systemColor-required"
            />
            <INPUT
              placeholder="المبلغ المستلم"
              type="number"
              name="receivedAmount"
              onChange={(event) => setReceivedAmount(event.target.value)}
              // bgColor="bg-blue-300"
              icon={<BsCashStack />}
              iconBgColor="bg-systemColor-optional"
              h="h-9"
            />

            <INPUT
              placeholder="المتبفيى"
              value={dueAmount}
              disabled
              onChange={(event) => setDueAmount(event.target.value)}
              icon={<FaBalanceScale />}
              h="h-9"
            />
          </div>

          <div className="flex items-center gap-4 justify-end  w-full ">
            <Submit />
            <ClearButton formId={"fixingForm"} FoucFiled={"serviceDetail"} />
          </div>
        </form>
      {/* </div> */}
      {isShow && <ShowCars isShow={isShow} setIsShow={setIsShow} carData={carData} />}
    </div>
  );
}
export default NewFixOrder;

const ShowCars = ({ isShow, setIsShow, carData }) => {



  return (<>
    <div>
      <Drawer open={isShow} onOpenChange={setIsShow}>

        <DrawerContent>
          <div className="mx-auto w-full p-6 ">
            <DrawerHeader>
              <DrawerTitle><p className="w-full text-right ">عرض سيارات العملاء</p></DrawerTitle>
            </DrawerHeader>
            <div className="border border-black/30 p-2 max-h-48 overflow-y-auto">
              {Object.entries(carData).map(([clientName, cars]) => (
                <div key={clientName}>
                  <h2 className="bg-green-500">{clientName}</h2>
                  <ul className="flex flex-col gap-2 w-full">
                    {cars.map(car => (
                      <div key={car.id} className="flex items-center justify-between gap-2 w-full ">
                        <div  className="flex items-center gap-4 justify-end  py-1 ">
                          <li className="bg-green-200 px-4 rounded-full py-1">{car.CarNo}</li>
                          <li >{car.carName}</li>
                        </div>
                        <Button className="border-green-400 border" onClick={() => { navigator.clipboard.writeText(car.CarNo) }} variant="outline">نسخ</Button>

                      </div>
                    ))}
                  </ul>
                </div>
              ))}
            </div>


            <DrawerFooter>
              <DrawerClose asChild>
                <Button onClick={() => { setIsShow(false) }} variant="outline">اغلاق</Button>

              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>




  </>)
}
