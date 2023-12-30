import { collectInvoice } from "@/db/invoice";
import React from "react";

async function page({ params }) {
  const collectData = await collectInvoice(params.id);


  const reciptarray = collectData.Recipt;
  const paymentarray =collectData.Payment;

const recipt = reciptarray.reduce((total, item) => total + item.amount, 0);
const payment = paymentarray.reduce((total, item) => total + item.amount, 0);



  return (
    <div className="flex items-center justify-start w-full   h-screen flex-col">
      <section className="rounded border px-16 py-3 mt-1 text-xl font-bold">
        فاتورة
      </section>
      <section className="rounded border px-6 py-3 mt-4 text-xl  w-[70vw] flex items-center justify-between">
        <p>مطللوب من المكرم : {collectData.orderData.clientName}</p>
        <div className="flex items-center gap-3 ">
          <p className="bg-white/30 px-3 rounded-md py-1">
            رقم السيارة : {collectData.orderData.selectedCar}
          </p>
          <p className="bg-white/30 px-3 rounded-md py-1">
            رقم الاصلاح : {collectData.orderData.fixOrederId}
          </p>
        </div>
      </section>
      <section className="rounded border px-16 py-3 mt-1 text-xl h-[70vh] w-[70vw] overflow-auto">
        <Balance
          recipt={recipt}
          payment={payment}
          fixOrderValue={collectData.orderData.fixOrederAmt}
        />
        <div className="flex items-start w-full justify-center gap-3">
          <Recipt reciptarray={reciptarray} />
          <Payment paymentarray={paymentarray} />
        </div>
      </section>
    </div>
  );
}

const Balance = ({ recipt, payment, fixOrderValue }) => {
  const balance = recipt - payment;
  return (
    <div className="w-full  py-1 px-2 flex items-center justify-around flex-col">
      <div className="w-full bg-zinc-800 py-1 px-2 flex items-center justify-around">
        <p>
          القيمة الاجمالية : <span>{fixOrderValue}</span>
        </p>
        <p>
          القبض : <span>{recipt}</span>
        </p>
        <p>
          الصرف : <span>{payment}</span>
        </p>
      </div>

      <div
        className={`w-50 ${
          balance < 0 ? " bg-red-800" : " bg-green-800"
        } py-1 px-2 flex items-center justify-end self-end`}
      >
        الرصيد : <span>{balance}</span>
      </div>
    </div>
  );
};

const Recipt = ({ reciptarray }) => {
  return (
    <div className="flex items-center justify-between text-[.8rem]   flex-col flex-1">
      <p className="bg-red-500 text-white self-start px-4 text-lg">سندات القبض</p>
      <div className="flex items-center justify-between text-[.8rem] bg-green-300 text-black  gap-2 w-full px-3">
        <p>الرقم</p>
        <p>التاريخ</p>
        <p>المبلغ</p>
      </div>
      {reciptarray.map((el) => {
        return (
          <div
            key={el.id}
            className="flex items-center justify-between text-[.8rem] bg-slate-700 gap-2 w-full px-3"
          >
            <p>{el.recietId}</p>
            <p>{getDateOnly(el.updatedAt)}</p>
            <p>{el.amount}</p>
          </div>
        );
      })}
    </div>
  );

};
const Payment = ({ paymentarray }) => {
   return (
     <div className="flex items-center justify-between text-[.8rem]   flex-col flex-1">
       <p className="bg-red-500 text-white self-start px-4 text-lg">
         سندات الصرف
       </p>
       <div className="flex items-center justify-between text-[.8rem] bg-green-500 text-black  gap-2 w-full px-3">
         <p>الرقم</p>
         <p>التاريخ</p>
         <p>المبلغ</p>
       </div>
       {paymentarray.map((el) => {
         return (
           <div
             key={el.id}
             className="flex items-center justify-between text-[.8rem] bg-slate-900 gap-2 w-full px-3"
           >
             <p>{el.paymentId}</p>
             <p>{getDateOnly(el.updatedAt)}</p>
             <p>{el.amount}</p>
           </div>
         );
       })}
     </div>
   );
};



export default page;


function getDateOnly(dateTime) {
  const date = new Date(dateTime);
  return date.toISOString().split("T")[0];
}
