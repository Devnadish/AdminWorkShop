"use client";
import React, { useState, useEffect } from "react";
import { Users } from "lucide-react";
import { getClientTransactions } from "@/db/clients";
import { getTimeElapsed } from "@/lib/timeanddate";

function SelectClientData({ data }) {
  const [ClientId, setClientId] = useState();
  const [payment, setPayment] = useState([]);
  const [recipt, setRecipt] = useState([]);


  return (
    <div className="flex items-center justify-center flex-col gap-4">
      <SelectClient
        clientData={data}
        ClientId={ClientId}
        setClientId={setClientId}
        setPayment={setPayment}
        setRecipt={setRecipt}
      />
      {ClientId &&       <Totals pay={payment} rec={recipt} />}
       {ClientId &&  <PaymentTransactions data={payment} />}
       {ClientId &&  <ReceiptTransactions data={recipt} />}
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
  const handleSelectChange = async (e) => {
    setClientId(e.target.value);
    if (ClientId) {
      const transaction = await getClientTransactions(parseInt(ClientId));
      setPayment(transaction.paymentTransactions);
      setRecipt(transaction.receiptTransactions);
    }
  };


  useEffect(() => {
    // Invoke handleSelectChange when the page opens
    if (ClientId) {
      handleSelectChange({ target: { value: ClientId } });
    }
  }, [ClientId]);

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

function PaymentTransactions({ data, total }) {
  return (
    <>
      <div className="overflow-x-auto flex flex-wrap items-start justify-center w-full">
        {data.map((re) => (
          <div
            key={re.id}
            className="max-w-sm rounded overflow-hidden shadow-lg m-4 border border-white/30 "
            style={{ minWidth: "300px" }}
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                <span>قبض رقم :</span> {re.paymentId}
              </div>

              <p className="text-gray-400 text-base mb-2">
                <span className="bg-gray-600 px-2 rounded">الوصف</span>{" "}
                {re.detail}
              </p>
              <p className="text-gray-400 text-base mb-2">
                <span className="bg-gray-600 px-2 rounded">امر الاصلاح</span>{" "}
                {re.fixingCode}
              </p>
              <p className="text-gray-400 text-base mb-2">
                <span className="bg-yellow-600 text-black px-2 rounded">
                  القيمة
                </span>{" "}
                {re.amount}
              </p>
              <p className="text-gray-400 text-base">
                <span className="bg-gray-600 px-2 rounded">التاريخ</span>{" "}
                {getTimeElapsed(re.updatedAt)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function ReceiptTransactions({ data, total }) {
  return (
    <>
      <div className="overflow-x-auto flex flex-wrap items-center justify-center w-full ">
        {data.map((re) => (
          <div
            key={re.id}
            className="max-w-sm rounded bg-zinc-600 overflow-hidden shadow-lg m-4 border border-white/30"
            style={{ minWidth: "300px" }}
          >
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                <span>صرف رقم:</span> {re.paymentId}
              </div>
              <p className="text-gray-400 text-base">
                <span className="bg-gray-600 px-2 rounded">الوصف</span>{" "}
                {re.detail}
              </p>
              <p className="text-gray-400 text-base">
                <span className="bg-gray-600 px-2 rounded">امر الاصلاح</span>{" "}
                {re.fixingCode}
              </p>
              <p className="text-gray-400 text-base">
                <span className="bg-yellow-600 text-black  px-2 rounded">
                  القيمة
                </span>{" "}
                {re.amount}
              </p>
              <p className="text-gray-400 text-base">
                <span className="bg-gray-600 px-2 rounded">التاريخ</span>{" "}
                {getTimeElapsed(re.updatedAt)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
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
      <div className="flex flex-col md:flex-row gap-4">
        <div className=" flex items-center gap-4 bg-green-500 text-white rounded-lg text-xl justify-between">
          <span className="px-3">المقبوضات</span>
          <span className="bg-green-900 rounded-l-md px-4 py-1">
            {totalreceiptTransactions}
          </span>
        </div>
        <div className=" flex items-center gap-4 bg-green-500 text-white rounded-lg text-xl justify-between">
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
