import CloseCardActions from '@/app/dashboard/fixing/_component/CloseCardActions';
import Caption, { DateCaption } from '@/components/sharedcompnent/Caption';
import { Title } from '@/components/sharedcompnent/Title';
import { getAllOpenFixOrder } from '@/db/fixing'
import React from 'react'
import { Amounts } from '../../../../components/sharedcompnent/Amounts';
export const dynamic = "force-dynamic";

async function page() {
  const OpenCard=await getAllOpenFixOrder()
  return (
    <div className="overflow-x-auto flex flex-wrap items-start justify-center w-full gap-3 max-5xl ">
      <p className="bg-destructive mt-4 rounded px-6">
        عدد الكروت : <span>{OpenCard.length}</span>
      </p>
      <div className="overflow-x-auto flex flex-wrap items-start gap-3 justify-center w-full">
        {OpenCard.map((fix) =>{
          const balance = (fix.fixOrederAmt- fix.recietSum) + fix.paymentSum
          return (
            <div
              key={fix.id}
              className="max-w-[320px] rounded overflow-hidden shadow-lg  border min-w-[320px]  border-border bg-accent "
            >
              <div className="flex flex-col gap-2 px-6 py-4">
                <Caption
                  title={"الكرت رقم"}
                  data={fix.fixOrederId}
                  titleBgColor="bg-blue-500"
                />
                <Caption title={"اسم العميل"} data={fix.clientName} />
                <Caption title={"رقم السيارة"} data={fix.selectedCar} />
                <DateCaption data={fix.updatedDate} />
                <div className="flex  items-center gap-3 text-white">
                  

                  <Amounts title={"القيمة"} amount={fix.fixOrederAmt} />
                  <Amounts title={"المستلم"} amount={fix.recietSum} />
                  <Amounts title={"المصروف"} amount={fix.paymentSum} />
                
                </div>
                <Caption
                  title={"الرصيد"}
                  data={balance}
                  dataBgColor="bg-red-500"
                  align="center"
                  fonSize="lg"
                />
                <pre className="text-[.7rem] text-left">
                  balance=(total-reicept)+expence
                </pre>
                <CloseCardActions
                  id={fix.id}
                  balance={balance}
                  fixOrederId={fix.fixOrederId}
                />
              </div>
            </div>
          );})}
      </div>
    </div>
  );
}

export default page



