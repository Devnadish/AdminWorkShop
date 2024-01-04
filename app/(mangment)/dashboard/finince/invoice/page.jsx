import CloseCardActions from "@/components/pagecomponent/back/fixing/CloseCardActions";
import CreateInvoice from "@/components/pagecomponent/back/invoice/CreateInvoice";
import ShareInvoice from "@/components/pagecomponent/back/invoice/ShareInvoice";
import { getAllOpenFixOrder } from "@/db/fixing";
import { getTimeElapsed } from "@/lib/timeanddate";
import React from "react";
export const dynamic = "force-dynamic";



async function page() {
  const OpenCard = await getAllOpenFixOrder();
  console.log(OpenCard)

  return (
    <div className="overflow-x-auto flex flex-wrap items-start justify-center w-full">
      <p className="bg-orange-500 mt-4 rounded px-6">
        عدد الكروت : <span>{OpenCard.length}</span>
      </p>
      <div className="overflow-x-auto flex flex-wrap items-start justify-center w-full">
        {OpenCard.map((fix) => {
          const balance = fix.recietSum - fix.paymentSum;
          return (
            <div
              key={fix.id}
              className={`max-w-sm rounded overflow-hidden shadow-lg m-4 border min-w-[300px]   ${
                !fix.isClosed ? "border-blue-500 border-2" : "border-white/30"
              } `}
            >
              <div className="flex flex-col gap-2 px-6 py-4">
                <div className="font-bold text-xl ">
                  <span>الكرت رقم :</span> {fix.fixOrederId}
                  {/* <span>الكرت رقم :</span> {fix.id} */}
                </div>
                <p className="text-gray-400 text-base ">
                  <span className="bg-gray-600 px-4 rounded ml-2">
                    اسم العميل
                  </span>
                  {fix.clientName}
                </p>
                <p className="text-gray-400 text-base ">
                  <span className="bg-gray-600 px-4 rounded ml-2">
                    رقم الجوال
                  </span>
                  {fix.clientPhone}
                </p>
                <p className="text-gray-400 text-base ">
                  <span className="bg-gray-600 px-2 rounded ml-2">
                    رقم السيارة
                  </span>
                  {fix.selectedCar}
                </p>

                <p className="text-gray-400 text-base">
                  <span className="bg-gray-600 px-2 rounded ml-2">التاريخ</span>
                  {getTimeElapsed(fix.updatedDate)}
                </p>
                <div className="flex items-center gap-3 border rounded  text-black flex-col p-1">
                  <p className="text-gray-800 text-base">
                    <span className="bg-gray-200 px-2  ">الرصيد</span>
                    <span className="text-gray-800 text-base bg-orange-500 px-3  font-bold">
                      {balance}
                    </span>
                  </p>
                </div>
                <div className="flex items-center">
                <CreateInvoice
                  id={fix.id}
                  balance={balance}
                  fixOrederId={fix.fixOrederId}
                />
                <ShareInvoice id={fix.id}
                  balance={balance}
                  fixOrederId={fix.fixOrederId}
                    clientName={fix.clientName}
                    clientPhone={fix.clientPhone}
                    />
              </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default page;
