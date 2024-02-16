"use client";
import { useState } from "react";
import { newFixingOrder } from "@/db/fixing";
import { updateClientReceiptBalance } from "@/db/reciet";
import { toast } from "sonner";
import { validateForm } from "@/lib/validation/fixing";
import { getCar, getCarInfo } from "@/db/cars";

import  CarsList  from "./CarsList";
import { CardBody } from "./CardBody";
import { CardFinice } from "./CardFinice";
import { CardAction } from "./CardAction";
import { CardNote } from "./CardNote";

function NewFixOrder({  carData, labor }) {
  const [totalCost, setTotalCost] = useState();
  const [receivedAmount, setReceivedAmount] = useState();
  const [dueAmount, setDueAmount] = useState(0);
  const [ClientID, setClientID] = useState("");
  const [ClientName, setClientName] = useState("");
  const [Carid, setCarid] = useState("اختار السيارة");
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [alertchecked, setalertChecked] = useState(true);

  // -----------------------------------------------------------------
  const FixOrder_DBaction = async (orderData, ClientID, total,serviceNote) => {
  
   
    try {
      const [AddFixing, UpdateClientBalance] = await Promise.all([
        newFixingOrder(orderData, serviceNote),
        updateClientReceiptBalance(parseInt(ClientID), parseInt(total)),
        // newNote(serviceNote)
      ]);

      if (AddFixing.exisit) {
        toast.error(AddFixing.msg);
        return "haveCard";
      } else {
        toast.success(AddFixing.msg);
        if(UpdateClientBalance.code===200){toast.success(UpdateClientBalance.msg)}else{toast.error(UpdateClientBalance.msg)}
        
        setClientName("");
        setClientID("");
        setCarid("اختار السيارة");
        setDueAmount(0);
        setReceivedAmount(0);
        setTotalCost(0);
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
    const serviceNote = data.get("serviceNote");


    const notedata={
      note:serviceNote,
      intialnote:true
      //  userID: session.user.phone,
      // userName: session.user.name,
      // userAvatar: session.user.avatar
    }
      

    // recheck car info befor save
    if (!Carid) {
      return toast.error("تاكد من رقم السيارة ");
    }
    if (!ClientName) {
      return toast.error("تاكد من اسم العميل ");
    }

    const carData = await getCarInfo(Carid);
    if (carData) {
      setClientName(carData[0]?.clientName);
      setClientID(carData[0]?.clientId);
    }
    if (carData.exisit || carData.Carexisit === "not Exisit") {
      toast.error(carData.msg);
      setCarid("اختار السيارة");
      return;
    }
    //
    const orderData = {
      detail,
      delivery,
      reminder: alertchecked,
      deliveryTime: selectedDate,

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

    const DONE = await FixOrder_DBaction(orderData, ClientID, totalCost,notedata);
  };
  const handleCheck = async (selectCar, carId) => {
    try {
      // Set loading to true to show the spinner
      setLoading(true);
  
      const radio = document.getElementById(selectCar);
      if (radio) {
        radio.click();
      }
      setCarid(selectCar);
  
      const getCarInfo = await getCar(carId);
      setClientName(getCarInfo.clientName);
      setClientID(getCarInfo.clientId);
  
    } catch (error) {
      // Handle error
    } finally {
      // Set loading back to false when the operation is complete
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col w-full items-start justify-start max-w-5xl mt-5  h-[90vh]  p-2 rounded">
      <div className="flex items-start justify-center  text-foreground w-full h-full   gap-2 ">
        <CarsList
          setCarid={setCarid}
          setClientID={setClientID}
          setClientName={setClientName}
          carData={carData}
          handleCheck={handleCheck}
        />
        <form
          action={handlesubmit}
          id="fixingForm"
          className="flex items-center justify-between flex-col gap-2 w-full bg-accent p-2  flex-wrap h-full border-t-4 border-primary "
        >
          <CardBody
            carid={Carid}
            ClientName={ClientName}
            ClientID={ClientID}
            loading={loading}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
            alertchecked={alertchecked}
            setalertChecked={setalertChecked}
          />
          <CardFinice
            setTotalCost={setTotalCost}
            setReceivedAmount={setReceivedAmount}
            setDueAmount={setDueAmount}
            totalCost={totalCost}
            receivedAmount={receivedAmount}
            dueAmount={dueAmount}
          />
          <CardNote />
          <CardAction />
        </form>
      </div>
    </div>
  );
}
export default NewFixOrder;


