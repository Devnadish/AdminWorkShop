import React, { useState, useEffect } from "react";

import { Car,User,   } from "lucide-react";
import { Input } from "@/components/ui/input";


function ClientWithCar({
  custmer,
  ClientID,
  setClientID,
  ClientName,
  setClientName,
  Carid,
  setCarid,
}) {
  const handleClientChange = (event) => {
    const clientId = event.target.value;
    setClientID(clientId);

    const selectedClient = custmer.find(
      (client) => client.clientIDs === parseInt(clientId)
    );

    if (selectedClient) {
      setClientName(selectedClient.name);
      setCarid(""); // Reset the selected fixing order
    } else {
      setClientName("");
      setCarid("");
    }
  };




  const handleFixOrderChange = (event) => {
    const fixOrderId = event.target.value;
    setCarid(fixOrderId);
  };


  const selectedClient = custmer.find(
    (client) => client.clientIDs === parseInt(ClientID)
  );

  let carOptions = [];
  if (selectedClient) {
    carOptions = selectedClient.carsData.map((car) => (
      <option key={car.id} value={car.CarNo}>
        {car.CarNo}
      </option>
    ));
  }


  return (
    <div className="border border-white/40 p-3 rounded-md bg-black/20 flex flex-col gap-4 items-center justify-center w-full">
      <div className="flex gap-2 w-full flex-col items-center justify-center ">
        {/* client */}
        <div className="flex items-center justify-end w-full  gap-1 border rounded-sm ">
          <User strokeWidth={1.5} />
          <select
            name="fromID"
            value={ClientID}
            onChange={handleClientChange}
            className="border w-full  border-gray-300 rounded h-8 text-sm w-[100px] px-4 text-black focus:outline-none focus:border-blue-500"
          >
            <option value="">اختار العميل</option>
            {custmer.map((client) => (
              <option key={client.id} value={client.clientIDs}>
                {client.name}
              </option>
            ))}
          </select>
        </div>
        {/* Clients Car */}
        <div className="flex items-center justify-end w-full  gap-1 border rounded-sm ">
          <Car strokeWidth={1.5} />
          <select
            name="fixingID"
            value={Carid}
            onChange={handleFixOrderChange}
            className="border w-full  border-gray-300 rounded h-8 text-sm w-[100px] px-4 text-black focus:outline-none focus:border-blue-500"
            disabled={!ClientID}
          >
            <option value=""></option>
            {carOptions}
          </select>
        </div>
      </div>

      <div className="flex gap-4 w-full items-center justify-center">
        <div className="flex flex-col items-start justify-start flex-1">
          <Input
            type="text"
            name="fromName"
            value={ClientName}
            disabled
            placeholder="اسم العميل"
            className="border border-gray-300 rounded px-4 py-2 text-white focus:outline-none focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
}

export default ClientWithCar;
