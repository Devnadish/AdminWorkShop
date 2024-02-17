import React from 'react'
import CreateInvoice from "@/app/dashboard/finince/invoice/_component/CreateInvoice";
import ShareInvoice from "@/app/dashboard/finince/invoice/_component/ShareInvoice";
import Caption, { DateCaption } from "@/components/sharedcompnent/Caption";
import OnlyDate from "@/components/sharedcompnent/OnlyDate";

function ShowData({OpenCard}) {
  return (
    <div className="flex flex-wrap items-center justify-center w-full gap-4 max-w-5xl">
    {OpenCard.map((fix) => {
      const balance = fix.recietSum - fix.paymentSum;
      return (
        <div
          key={fix.id}
          className={`max-w-sm rounded-md overflow-hidden shadow-lg  border  min-w-[300px]  flex items-center flex-col gap-4  ${
            !fix.isClosed ? "border-border " : "border-destructive"
          } `}
        >
          <div className="flex flex-col gap-2 px-2 py-2 w-full">
            <OnlyDate onlyDate={fix.updatedDate} />
            <Caption
              title={"الكرت رقم"}
              data={fix.fixingId}
              titleBgColor="bg-accent"
              titleTextColor="text-accent-foreground/70"
              h="h-7"
            />
            <Caption
              title={"اسم العميل"}
              data={fix.clientName}
              titleBgColor="bg-accent"
              titleTextColor="text-accent-foreground/70"
              h="h-7"
            />
            <Caption
              title={" رقم الجوال"}
              data={fix.clientPhone}
              titleBgColor="bg-accent"
              titleTextColor="text-accent-foreground/70"
              h="h-7"
            />
            <Caption
              title={"رقم السيارة"}
              data={fix.selectedCar}
              titleBgColor="bg-accent"
              titleTextColor="text-accent-foreground/70"
              h="h-7"
            />
            <Caption
              title={"الرصيد"}
              data={balance}
              titleBgColor="bg-accent"
              titleTextColor="text-accent-foreground/70"
              h="h-7"
            />


         
          </div>
          <div className="flex items-center justify-end px-2 py-1 gap-4 w-full ">
              <CreateInvoice
                id={fix.id}
                balance={balance}
                fixOrederId={fix.fixingId}
              />
              <ShareInvoice
                id={fix.id}
                balance={balance}
                fixOrederId={fix.fixingId}
                clientName={fix.clientName}
                clientPhone={fix.clientPhone}
              />
            </div>
        </div>
      );
    })}
  </div>
  )
}

export default ShowData
