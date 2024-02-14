import Link from "next/link";
import { getGroupClientWithTransactions } from "@/db/clients";
import Avatar from "@/components/sharedcompnent/Avatar";
import { Balance } from "@/app/dashboard/clients/statment/_component/Balance";
import { Receipt, Scale } from "@/lib/icons";
import PageTitle from "@/components/sharedcompnent/PageTitle";
import CardCpm from "@/components/sharedcompnent/CardCpm";
import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";
export const dynamic = "force-dynamic";

async function Statement() {
  const data = await getGroupClientWithTransactions();


  return (
    <div className="overflow-x-auto flex flex-wrap items-center justify-center w-full max-w-5xl">
      <div className="text-base font-tajwal flex items-center justify-center gap-16 flex-col w-full">
        <PageTitle title={<p>كشف حساب العملاء الذي لهم حركة مالية : <span>{data.length}</span> </p>} icon={<Receipt/>}/>
        <Suspense fallback={<p>loading...</p>}>
        <div className="flex w-full items-center justify-center flex-wrap gap-4">
          {data.map((el) => (
             <CardCpm  key={el.fromId} h="min-h-52"> 
              {/* header  */}
         
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center h-11">
                  <Avatar src={""} />
                  <p>{el.fromName}</p>
                </div>
                <div className="flex items-center gap-4 px-1 py-1 rounded-md text-md bg-secondary/50">
                  <Scale size={18} />
                  <p>{el.sumFix - el.sumRecipt + el.sumPayment}</p>
                </div>
                
                {/* <CallClient phone={el.mobile} /> */}
              </div>
              <Separator/>
              {/* balance  */}
              <Balance
                sumFix={el.sumFix}
                sumRecipt={el.sumRecipt}
                sumPayment={el.sumPayment}
              />
              
                
                <Link
                  className="bg-primary text-priamry-foreground rounded shadow-xl font-semibold   flex items-center justify-center py-2 "
                  href={`/dashboard/clients/statment/statment/${el.fromId}`}
                >
                  كشف حساب
                </Link>
         
            </CardCpm>
          ))}
        </div>
        </Suspense>
      </div>
    </div>
  );
}
export default Statement;
