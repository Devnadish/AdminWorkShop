import CloseCardActions from '@/app/dashboard/fixing/_component/CloseCardActions';
import Caption, { DateCaption } from '@/components/sharedcompnent/Caption';
import { getAllOpenFixOrder } from '@/db/fixing'
import React from 'react'
export const dynamic = "force-dynamic";

async function page() {
  const OpenCard=await getAllOpenFixOrder()


  return (
    <div className="overflow-x-auto flex flex-wrap items-start justify-center w-full">
      <p className="bg-orange-500 mt-4 rounded px-6">
        عدد الكروت : <span>{OpenCard.length}</span>
      </p>
      <div className="overflow-x-auto flex flex-wrap items-start justify-center w-full">
        {OpenCard.map((fix) =>{
          const balance = (fix.fixOrederAmt- fix.recietSum) + fix.paymentSum
          return (
            <div
              key={fix.id}
              className={`max-w-sm rounded overflow-hidden shadow-lg m-4 border min-w-[300px]   ${
                !fix.isClosed ? "border-red-500 border-2" : "border-white/30"
              } `}
            >
              <div className="flex flex-col gap-2 px-6 py-4">
                <Caption title={"الكرت رقم"} data={fix.fixOrederId} titleBgColor='bg-blue-500' />
                <Caption title={"اسم العميل"} data={fix.clientName} />
                <Caption title={"رقم السيارة"} data={fix.selectedCar} />
                <DateCaption data={fix.updatedDate} />
                  <div className="flex flex-col items-center gap-3 text-white">

                  <Caption title={"القيمة"} data={fix.fixOrederAmt || 0} />
                    <Caption title={"المستلم"} data={fix.recietSum || 0} />
                    <Caption title={"المصروف"} data={fix.paymentSum || 0} />
                  </div>
                  <Caption title={"الرصيد"} data={balance} dataBgColor='bg-red-500' />
                  <pre className='text-[.7rem] text-left'>balance=(total-reicept)+expence</pre>
                <CloseCardActions   id={fix.id}   balance={balance}    fixOrederId={fix.fixOrederId}
                />
              </div>
            </div>
          );})}
      </div>
    </div>
  );
}

export default page