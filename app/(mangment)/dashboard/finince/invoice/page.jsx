import CloseCardActions from "@/app/(mangment)/dashboard/fixing/_component/CloseCardActions";
import CreateInvoice from "@/app/(mangment)/dashboard/finince/invoice/_component/CreateInvoice";
import ShareInvoice from "@/app/(mangment)/dashboard/finince/invoice/_component/ShareInvoice";
import Caption, { DateCaption } from "@/components/shared/Caption";
import { getAllOpenFixOrder } from "@/db/fixing";
import React from "react";
export const dynamic = "force-dynamic";



async function page() {
  const OpenCard = await getAllOpenFixOrder();

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
              className={`max-w-sm rounded-md overflow-hidden shadow-lg m-4 border min-w-[300px]   ${
                !fix.isClosed ? "border-blue-800 border-2" : "border-white/30"
              } `}
            >
              <div className="flex flex-col gap-2 px-6 py-4">

                <Caption title={"الكرت رقم"} data={ fix.fixOrederId } textcolor="text-white" />
                <Caption title={"اسم العميل"} data={fix.clientName } textcolor="text-white" />
                <Caption title={" رقم الجوال"} data={fix.clientPhone } textcolor="text-white" />
                <Caption title={"رقم السيارة"} data={fix.selectedCar } textcolor="text-white" />
                <Caption title={"الرصيد"} data={balance} textcolor="text-black" dataColor="bg-red-500" />
                <DateCaption title={"التاريخ"} data={fix.updatedDate} textcolor="text-black"  />
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
