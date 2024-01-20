"use client";
import React, { useState, } from "react";
import { Users } from "lucide-react";
import { getClientTransactions } from "@/db/clients";
import { getTimeElapsed } from "@/lib/timeanddate";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import Caption, { DateCaption } from "@/components/shared/Caption";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableFooter
} from "@/components/ui/table"
import { ScrollArea } from "@/components/ui/scroll-area";


function SelectClientData({ data }) {
  const [ClientId, setClientId] = useState();
  const [payment, setPayment] = useState([]);
  const [recipt, setRecipt] = useState([]);
  const [fixorders, setFixOrders] = useState([]);

  return (
    <div className="flex items-center justify-center flex-col gap-4 w-full">
      <SelectClient
        clientData={data}
        ClientId={ClientId}
        setClientId={setClientId}
        setPayment={setPayment}
        setRecipt={setRecipt}
        setFixOrders={setFixOrders}
      />
      <ShowTotal data={fixorders} payment={payment} recipt={recipt} />
      <ShowCard data={fixorders} payment={payment} recipt={recipt} />
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
  setFixOrders,

}) {

  const getClientData = async () => {
    if (ClientId) {
      const transaction = await getClientTransactions(parseInt(ClientId));
      setPayment(transaction.paymentTranaction);
      setRecipt(transaction.reciptTranaction);
      setFixOrders(transaction.FixOrderTransactions)
    }
  }
  return (
    <div className="flex items-center justify-center border w-full  ">
      <div className="w-[50px] flex items-center justify-center bg-green-600 h-8">
        <Users />
      </div>
      <select
        className="block w-full px-4 h-8 py-1 border shadow-sm   bg-white text-gray-900 "
        value={ClientId}
        onChange={(e) => setClientId(e.target.value)}
      >
        <option value="">اختار العميل</option>
        {clientData.map((option, index) => (
          <option key={index} value={option.fromID}>
            {`${option.fromID} - ${option.fromName} `}
          </option>
        ))}
      </select>
      <div className="w-[150px] flex items-center justify-center  h-8">
        <Button onClick={() => { getClientData() }} className="h-8 w-full bg-blue-600 rounded-none"> <Search /></Button>
      </div>
    </div>
  );
}

const ShowCard = ({ data, recipt, payment }) => {
  return (
    <div className=" w-full rounded py-4 flex flex-col gap-3 ">

      {data.map((el) => {

        const CardTrRanaction = filterData(el.fixingId, recipt, payment)
        return (
          <div
            key={el.id}
            className=" w-full  flex flex-col gap-1 border rounded p-1 border-white/30 "
          >
            <div className="flex items-center justify-between w-full gap-4">
              <DateCaption data={el.createdDate} />
              <p className="border  rounded border-white/30 text-white/50 py-1">
                <span className="border-l border-white/30 px-3">حالة الكرت</span>{" "}
                <span className={`px-3 text-white rounded-sm  py-1 ${el.isClosed ? "bg-green-500" : "bg-red-500"} `}>{el.isClosed ? "مغلق" : "مفتوح"}</span>
              </p>
              <p>
                <span>رقم السيارة</span> <span>{el.selectedCar}</span>
              </p>
              <DateCaption data={el.updatedDate} type={"lastupdate"} />
            </div>
            <div
              key={el.id}
              className=" w-full  flex  items-center justify-between gap-1 bg-gray-700 h-6"
            >
              <Caption title={"رقم الكرت"} data={el.fixingId} align="center" titleBgColor="bg-transpernt" dataBgColor="bg-transpernt" />
              <Caption title={"القيمة"} data={el.total} align="center" titleBgColor="bg-transpernt" dataBgColor="bg-transpernt" />
              <Caption title={"المستلم"} data={el.receive} align="center" titleBgColor="bg-transpernt" dataBgColor="bg-transpernt" />

            </div>
            <DiplayTransaction data={CardTrRanaction} cardTotal={el.total}            />
          </div>
        );
      })}
    </div>
  );
};

const DiplayTransaction = ({ data, cardTotal }) => {
  // paymentSum, reciptSum
  const payment = data.payment[0].paymentData
  const recipt = data.recipt[0].reciptData

  const trStyle = "text-right text-white  h-4 p-1"
  return (<div>

    <ScrollArea className="h-[50vh] border  rounded-md w-full flex items-center justify-center p-4 ">
      <Table dir='RTL' >

        <TableHeader>
          <TableRow className="bg-gray-500 w-full ">
            <TableHead className={trStyle}>النوع</TableHead>
            <TableHead className={trStyle}>الرقم</TableHead>
            <TableHead className={trStyle}>المبلغ</TableHead>
            <TableHead className={trStyle} > التاريخ</TableHead>
            <TableHead className={trStyle}> البيان</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recipt.map((trans) => (
            <TableRow className="bg-gray-600" key={trans.id}>
              <TableCell className={trStyle}>قبض</TableCell>
              <TableCell className={trStyle}>{trans.recietId}</TableCell>
              <TableCell className={trStyle}>{trans.amount}</TableCell>
              <TableCell className={trStyle}>{getTimeElapsed(trans.updatedAt)}</TableCell>
              <TableCell className={trStyle}>{trans.detail}</TableCell>
            </TableRow>
          ))}



          {payment.map((trans) => (
            <TableRow className="bg-gray-500" key={trans.id}>
              <TableCell className={trStyle}>صرف</TableCell>
              <TableCell className={trStyle}>{trans.paymentId}</TableCell>
              <TableCell className={trStyle}>{trans.amount}</TableCell>
              <TableCell className={trStyle}>{getTimeElapsed(trans.updatedAt)}</TableCell>
              <TableCell className={trStyle}>{trans.detail}</TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell colSpan={5} >
              <div className="flex items-center gap-4 w-full justify-around" >
              <p className="border flex  rounded border-white/30 text-white/50 py-1">
                <span className="border-l   border-white/30 px-4">اجمالي القبض</span>
                <span className=" text-green-500  text-center rounded px-4  bg-black ">{data.reciptSum}</span>
              </p>
              <p className="border flex  rounded border-white/30 text-white/50 py-1 ">
                <span className="border-l   border-white/30 px-4">اجمالي الصرف</span>
                <span className=" text-red-500 px-4 text-center rounded  bg-black ">{data.paymentSum}</span>
              </p>
              <p className="border flex  rounded border-white/30 text-white/50 py-1 ">
                <span className="border-l   border-white/30 px-4">الصافي</span>
                  <span className=" text-red-500 px-4  text-center rounded  bg-black ">{(cardTotal-data.reciptSum)+data.paymentSum}</span>
              </p>
              </div>
            </TableCell>

          </TableRow>
        </TableFooter>

      </Table>
    </ScrollArea>


  </div>)
}


const ShowTotal = ({ data, recipt, payment }) => {
  let reciptSum = 0
  let paymentSum = 0
  const cardPaymentSum = data.length > 0 ? data.reduce((total, fix) => total + fix.total, 0) : 0;
  data.map((el) => {
    const CardTrRanaction = filterData(el.fixingId, recipt, payment)
    reciptSum = reciptSum + CardTrRanaction.reciptSum
    paymentSum = paymentSum + CardTrRanaction.paymentSum
  })

  return (
    <div className="flex w-full items-center justify-between gap-4">

      <p className="border-r-2 flex-1 flex items-center  border-purple-500   text-white/50 py-1">
        <span className="flex-2   px-1">الايراد</span>
        <span className=" text-green-500 flex-1 text-center rounded  bg-purple-500 text-white">{cardPaymentSum}</span>
      </p>

              <p className="border-r-2 flex-1 flex items-center  border-green-500   text-white/50 py-1">
                <span className="flex-2   px-1">اجمالي القبض</span>
                <span  className=" text-green-500 flex-1 text-center rounded  bg-black">{reciptSum}</span>
              </p>

      <p className="border-r-2 flex-1  flex items-center  border-red-500 text-white/50 py-1">
                  <span className=" px-1">اجمالي الصرف</span>
                <span className=" text-red-500 flex-1 text-center rounded  bg-black">{paymentSum}</span>
                </p>
      <p className="border-r-4 flex-1  flex items-center text-white py-1">
        <span className="flex-2 px-1">الصافي</span>
        <span className=" text-white flex-1 text-center rounded  bg-black">{(cardPaymentSum-reciptSum)+paymentSum}</span>
      </p>
    </div>

    )
}




const filterData = (fixid, recipt, payment) => {
  const paymentArray = payment.filter(payment => payment.fixCode === fixid);
  const reciptArray = recipt.filter(recipt => recipt.fixCode === fixid);
  const sumOfRecipts = reciptArray[0].reciptData
  const sumOfPayment = paymentArray[0].paymentData
  const reciptSum = sumOfRecipts.length > 0 ? sumOfRecipts.reduce((total, recipt) => total + recipt.amount, 0) : 0;
  const paymentSum = sumOfPayment.length > 0 ? sumOfPayment.reduce((total, payment) => total + payment.amount, 0) : 0;
  return { recipt: reciptArray, payment: paymentArray, paymentSum, reciptSum };
};
