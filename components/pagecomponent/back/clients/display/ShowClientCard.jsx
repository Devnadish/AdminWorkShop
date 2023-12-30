import React from 'react'
import { getTimeElapsed } from "@/lib/timeanddate";
import { ArrowDownSquare, ArrowUpSquare, Car, DollarSign, Phone, PhoneCallIcon, Scale } from "lucide-react";
import CardAction from "@/components/pagecomponent/back/clients/display/CardAction";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from '@/components/ui/button';
import CallClient from '@/components/shared/CallClient';
import Avatar from '@/components/shared/Avatar';
import { toast } from "react-hot-toast";
function ShowClientCard({ clients }) {


  return (
    // <ScrollArea className=" h-[65vh] w-full rounded-md   flex items-center justify-center p-2 gap-2   ">
    <div className="  flex flex-col md:flex-row  flex-wrap  items-center justify-center    gap-4" >
      {clients?.map((client) => (
        <div
          className="border min-w-[320px]  max-w-[320px] shadow-lg rounded-lg  flex gap-3  flex-col items-center justify-center  overflow-hidden bg-white/90 text-black   "
          key={client.id}
        >
          <CardHeader
            name={client.name}
            id={client.clientIDs}
            date={getTimeElapsed(client.updatedDate)}
            phone={client.mobile}
            cars={client.carsData}
          />
          <CardBalance
            balance={client.balance}
            recipt={client.recipts}
            payment={client.payment}
          />

          {/* <ShowCars cars={client.carsData} /> */}
          <CardAction />
        </div>
      ))}
    </div>

    // </ScrollArea>
  );
}
export default ShowClientCard

const CardHeader = ({
  name,
  id,
  date,
  phone,
cars

}) => {


  const ShowCars=({cars})=>{
   return (
     <div className="border border-black w-full  rounded p-2 flex flex-col flex-wrap items-center gap-2  justify-between bg-green-600  border-l-[15px] ">
       <div className="flex items-center justify-between w-full">
         <Button
           onClick={() => toast.remove()}
           size="sm"
           className="bg-red-600 self-start"
         >
           X
         </Button>
         <Car size={40} strokeWidth={1} />
       </div>
       <div className="flex items-center justify-center gap-4">
         {cars?.length === 0 ? (
           <p className=" text-white  underline underline-offset-4  px-6 rounded-md">
             لاتوجد سيارة معرفة للعميل
           </p>
         ) : null}
         {cars?.map((el) => {
           return (
             <div
               key={el.id}
               className="px-3 py-1 rounded-lg bg-white/20 text-[.75rem]"
             >
               <p className="underline underline-offset-4">
                 {el.CarNo}
                 {/* /{el.carName} */}
               </p>
             </div>
           );
         })}
       </div>
     </div>
   );
   }







  return (
    <>
      <div id="d1" className="flex flex-col w-full gap-1 ">
        <div
          id="d2"
          className="flex items-center justify-between bg-green-600 max-w-full h-10  px-2"
        >
          <CallClient phone={phone} />
          <div className="flex items-center">
            <p className="font-bold text-base ">{name}</p>
            <Avatar src={""} />
          </div>
        </div>
        <div id="d3" className="flex items-center justify-between  gap-2 px-3 ">
          <p className="text-xs bg-gray-300 rounded w-fit px-1 py-1 text-[.7rem]  ">
            {date}
          </p>

          <Button
            onClick={() =>
              toast.custom((t) => <ShowCars cars={cars} />, {
                duration: Infinity,

              })
            }
            className="flex    font-semibold justify-center items-center  text-white bg-black w-[100px] gap-3"
          >
            <Car
              size={30}
              strokeWidth={1.75}
              className=" bg-black text-white rounded-md px-1"
            />
            {cars.length}
          </Button>
        </div>
      </div>
    </>
  );
};





const CardBalance = ({ recipt = 0, payment = 0 }) => {
   const balance = recipt - payment;
  return (
    <>
      <div className="flex items-center gap-2">
        <div
          id="d4"
          className={`text-base font-bold  rounded flex items-center justify-center l gap-2 px-1  ${
            balance === 0
              ? "bg-green-300 text-black"
              : balance < 0
              ? "bg-red-400"
              : "bg-blue-400"
          } `}
        >
          {balance}
          <Scale size={17} strokeWidth={2} />
        </div>

        <div
          id="d4"
          className="text-base font-bold  rounded flex items-center justify-center l gap-2 border border-red-600 px-1 text-red-600"
        >
          <p>{payment}</p>
          <ArrowUpSquare size={17} strokeWidth={2} />
        </div>
        <div className="text-base font-bold  rounded flex items-center justify-center l gap-2 px-1 border border-green-600 px-1 text-green-600">
          {recipt}
          <ArrowDownSquare size={17} strokeWidth={2} />
        </div>
      </div>
    </>
  );
};

const ShowCars = ({ cars }) => {


};
