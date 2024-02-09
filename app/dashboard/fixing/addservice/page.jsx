"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";

function NewOrder() {
  const [customerNumber, setCustomerNumber] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerHomeNumber, setCustomerHomeNumber] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");
  const [totalCost, setTotalCost] = useState("");
  const [receivedAmount, setReceivedAmount] = useState("");
  const [dueAmount, setDueAmount] = useState(totalCost - receivedAmount);

  useEffect(() => {
    setDueAmount(totalCost - receivedAmount);
  }, [totalCost, receivedAmount]);

  return (
    <div className="container flex items-center">
      <div className="flex flex-col items-center justify-center  w-full gap-3">
        <p className="bg-white/50 rounded-sm  text-center w-full py-2">
          اضافة خدمة
        </p>
        <div className="flex flex-col gap-4 border  border-white/30  p-4 rounded-md w-full">
          <div className="flex items-center gap-4 w-full">
            <div className="flex items-center gap-4 w-1/2 ">
              <Input
                placeholder="رقم امر الاصلاح"
                value={customerNumber}
                onChange={(event) => setCustomerNumber(event.target.value)}
              />
              <Search className="bg-blue-500 rounded-md h-10 w-10 p-2" />
            </div>

            <div className="flex items-center gap-4 w-1/2 ">
              <Input
                placeholder="رقم العميل"
                value={customerNumber}
                onChange={(event) => setCustomerNumber(event.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-4 ">
            <Input
              placeholder="اسم العميل"
              value={customerName}
              onChange={(event) => setCustomerName(event.target.value)}
            />
          </div>
        </div>
        <Textarea
          placeholder="الخدمة المطلوبة"
          rows={7}
          value={serviceDescription}
          onChange={(event) => setServiceDescription(event.target.value)}
        />

        <div className="flex  gap-4 border  border-white/30  p-4 rounded-md w-12/12">
          {/* <p className="bg-white/50 rounded-sm py-1 text-center">
            معلومات العميل
          </p> */}
          <Input
            placeholder="السعر "
            type="number"
            value={totalCost}
            onChange={(event) => setTotalCost(event.target.value)}
          />
        <Button className="bg-red-500 w-7/12 mb-4">اضافة</Button>
        </div>
      </div>
    </div>
  );
}

export default NewOrder;
