"use client"



import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getClientFixOrders, groupByClientId } from "@/db/clients";
import { LucidePersonStanding, PersonStanding, User, Wrench } from "lucide-react";

// Define an array of client objects with their IDs and names
const clients = [
  { id: 1, name: "Client 1" },
  { id: 2, name: "Client 2" },
  { id: 3, name: "Client 3" },
  // Add more clients as needed
];


function ClientsWithOpenFixingOrder({selectedClientId,
setSelectedClientId,
selectedClientName,
setSelectedClientName,
selectedFixOrderId,
setSelectedFixOrderId}) {
  // const [selectedClientId, setSelectedClientId] = useState("");
  // const [selectedClientName, setSelectedClientName] = useState("");
  // const [selectedFixOrderId, setSelectedFixOrderId] = useState("");
  const [fixOrdersData, setFixOrdersData] = useState([]);
  // Handle the change event of the select element for clients
  const handleClientChange = (event) => {
    const clientId = event.target.value;
    setSelectedClientId(clientId);

    // Find the corresponding client object based on the selected ID
    const selectedClient = fixOrdersData.find(
      (client) => client.clientId === parseInt(clientId)
    );
    if (selectedClient) {
      setSelectedClientName(selectedClient.clientName);
      setSelectedFixOrderId(""); // Reset the selected fixing order
    } else {
      setSelectedClientName("");
      setSelectedFixOrderId("");
    }
  };

  // Handle the change event of the select element for fixing orders
  const handleFixOrderChange = (event) => {
    const fixOrderId = event.target.value;
    setSelectedFixOrderId(fixOrderId);
  };

  const getData = async () => {
    try {
      const clientFixOrders = await groupByClientId();
      setFixOrdersData(clientFixOrders);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="border border-white/40 p-3 rounded-md bg-black/20 flex flex-col gap-4 items-center justify-center w-full">
      <div className="flex gap-4 w-full items-center justify-center flex-col ">
        <div className="flex  items-center justify-end  gap-1   border rounded-sm w-full">
          <User strokeWidth={1.5} />
          <select
            name="fromID"
            value={selectedClientId}
            onChange={handleClientChange}
            className="border border-gray-300 rounded h-8 text-sm w-full  px-4  text-black focus:outline-none focus:border-blue-500"
          >
            <option value=""> اختار العميل</option>
            {fixOrdersData.map((client) => (
              <option key={client.clientId} value={client.clientId}>
                {client.clientId}
              </option>
            ))}
          </select>
        </div>

        <div className="flex  items-center justify-end flex-1 gap-1   border rounded-sm w-full">
          <Wrench strokeWidth={1.5} />

          <select
            name="fixingID"
            value={selectedFixOrderId}
            onChange={handleFixOrderChange}
            className="border border-gray-300 h-8 w-full rounded px-4  text-black focus:outline-none focus:border-blue-500"
            disabled={!selectedClientId}
          >
            <option value="">كرت الاصلاح</option>
            {fixOrdersData
              .find((client) => client.clientId === parseInt(selectedClientId))
              ?.fixOrderIds.map((fixOrderId) => (
                <option key={fixOrderId} value={fixOrderId}>
                  {fixOrderId}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div className="flex gap-4 w-full items-center justify-center">
        <div className="flex flex-col items-start justify-start flex-1">
          {/* <label htmlFor="fromName" className="text-white text-lg">
            اسم العميل
          </label> */}
          <Input
            type="text"
            name="fromName"
            value={selectedClientName}
            disabled
            placeholder="اسم العميل"
            className="border border-gray-300 rounded px-4 py-2 text-white focus:outline-none focus:border-blue-500"
          />
        </div>
        {/* <div className="flex flex-col items-start justify-start flex-1">
          <label htmlFor="plateNumber" className="text-white text-lg">
            لوحة السيارة
          </label>
          <Input
            type="text"
            name="plateNumber"
            disabled
            placeholder="لوحة السيارة"
            className="border border-gray-300 rounded px-4 py-2 text-white focus:outline-none focus:border-blue-500"
          />
        </div> */}
      </div>
    </div>
  );
}

export default ClientsWithOpenFixingOrder;
