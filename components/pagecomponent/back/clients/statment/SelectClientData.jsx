"use client";
import React, { useState, useEffect, useCallback } from "react";
import { Users } from "lucide-react";
import { getClientTransactions } from "@/db/clients";
import { getTimeElapsed } from "@/lib/timeanddate";
import ExpandItem from "@/components/shared/ExpandItem";



function SelectClientData({ data }) {
  const [ClientId, setClientId] = useState();
  const [payment, setPayment] = useState([]);
  const [recipt, setRecipt] = useState([]);


  return (
    <div className="flex items-center justify-center flex-col gap-4 w-full">
      <SelectClient
        clientData={data}
        ClientId={ClientId}
        setClientId={setClientId}
        setPayment={setPayment}
        setRecipt={setRecipt}
      />
      {ClientId && <Totals pay={payment} rec={recipt} />}
      <div className="flex items-start justify-evenly flex-col md:flex-row ">
        {ClientId && <Transactions data={recipt} type={"recipt"} color="bg-green-600" />}
        {ClientId && <Transactions data={payment} type={"payment"} color="bg-orange-700" />}
      </div>
    </div>
  );
}

export default SelectClientData;

function SelectClient({
  clientData,
  ClientId,
  setClientId,
  setPayment,
  setRecipt,
}) {
  const handleSelectChange = useCallback(
    async (e) => {
      setClientId(e.target.value);
      if (ClientId) {
        const transaction = await getClientTransactions(parseInt(ClientId));
        setPayment(transaction.paymentTransactions);
        setRecipt(transaction.receiptTransactions);
      }
    },
    [ClientId, setPayment, setRecipt, setClientId]
  );



  useEffect(() => {
    // Invoke handleSelectChange when the page opens
    if (ClientId) {
      handleSelectChange({ target: { value: ClientId } });
    }
  }, [ClientId, handleSelectChange]);

  return (
    <div className="flex items-center justify-center border ">
      <div className="w-[50px] flex items-center justify-center bg-green-600 h-8">
        <Users />
      </div>
      <select
        className="block w-full px-4 h-8 py-1 border shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-300 bg-white text-gray-900"
        value={ClientId}
        onChange={handleSelectChange}
      >
        <option value="">اختار العميل</option>
        {clientData.map((option, index) => (
          <option key={index} value={option.fromID}>
            {`${option.fromID} - ${option.fromName} `}
          </option>
        ))}
      </select>
    </div>
  );
}


const Totals = ({ pay, rec }) => {
  const totalpaymentTransactions = pay.reduce(
    (total, transaction) => total + transaction.amount,
    0
  );

  const totalreceiptTransactions = rec.reduce(
    (total, transaction) => total + transaction.amount,
    0
  );
  const balance = totalpaymentTransactions - totalreceiptTransactions;

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4 items-center justify-evenly  w-full max-w-4xl">
        <div className=" flex items-center gap-4 bg-green-600 text-white rounded-lg text-xl justify-between">
          <span className="px-3">المقبوضات</span>
          <span className="bg-green-900 rounded-l-md px-4 py-1">
            {totalreceiptTransactions}
          </span>
        </div>
        <div className=" flex items-center gap-4 bg-orange-700 text-white rounded-lg text-xl justify-between">
          <span className="px-3">المصروفات</span>
          <span className="bg-green-900 rounded-l-md px-4 py-1">
            {totalpaymentTransactions}
          </span>
        </div>
        <div className=" flex items-center gap-4 bg-green-500 text-white rounded-lg text-xl justify-between">
          <span className="px-3">الرصيد</span>
          <span className="bg-orange-700 rounded-l-md px-4 py-1">
            {balance}
          </span>
        </div>
      </div>
    </>
  );
};

function Transactions({ data, total, type, color }) {
  const [isOpen, setIsOpen] = useState(Array(data.length).fill(false));

  const ExpandHead = ({ data, type, index }) => {
    const handleExpand = () => {
      const newIsOpen = [...isOpen];
      newIsOpen[index] = !newIsOpen[index];
      setIsOpen(newIsOpen);
    };

    return (
      <div className="text-sm flex item-center justify-between w-full " onClick={handleExpand}>
        <div className="w-full">
          <span>{type === "payment" ? "صرف  رقم" : "قبض  رقم"} :</span>
          <span>{type === "payment" ? data.paymentId : data.recietId}</span>
        </div>
        <div className="bg-white/30 px-3 rounded">
          <span className=" px-2 rounded">
            المبلغ
          </span>
          <span>
            {data.amount}
          </span>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="  flex flex-wrap items-start justify-center w-full gap-2" >
        {data.map((re, index) => (
          <div
            key={re.id}
            className="max-w-sm rounded overflow-hidden shadow-lg  border border-white/30 w-full"
            style={{ minWidth: "300px" }}
          >
            <ExpandItem
              isOpen={isOpen[index]}
              setIsOpen={(value) => {
                const newIsOpen = [...isOpen];
                newIsOpen[index] = value;
                setIsOpen(newIsOpen);
              }}
              menuTitle={<ExpandHead data={re} type={type} index={index} />}
              color={color}
            >
              <div className="p-4">
                <p className="text-gray-400 text-base mb-2">
                  <span className="bg-gray-600 px-2 rounded">الوصف</span>{" "}
                  {re.detail}
                </p>
                <p className="text-gray-400 text-base mb-2">
                  <span className="bg-gray-600 px-2 rounded">امر الاصلاح</span>{" "}
                  {re.fixingCode}
                </p>

                <p className="text-gray-400 text-base">
                  <span className="bg-gray-600 px-2 rounded">التاريخ</span>{" "}
                  {getTimeElapsed(re.updatedAt)}
                </p>
              </div>
            </ExpandItem>
          </div>
        ))}
      </div>
    </>
  );
}
