import Link from "next/link";
import { getGroupClientWithTransactions } from "@/db/clients";
import Avatar from "@/components/sharedcompnent/Avatar";
import { Balance } from "@/app/dashboard/clients/statment/_component/Balance";
import { Scale } from "@/lib/icons";
import PageTitle from "@/components/sharedcompnent/PageTitle";
export const dynamic = "force-dynamic";

async function Statement() {
  const data = await getGroupClientWithTransactions();

  return (
    <div className="overflow-x-auto flex flex-wrap items-center justify-center w-full max-w-7xl">
      <div className="text-base font-tajwal flex items-center justify-center gap-3 flex-col w-full flex-wrap">
        <PageTitle title={<p>كشف حساب العملاء الذي لهم حركة مالية : <span>{data.length}</span> </p>} />
        <div className="flex w-full items-center justify-center flex-wrap gap-8">
          {data.map((el) => (
            <div
              key={el.fromId}
              className="border flex items-center justify-between min-w-[350px] rounded-md border-white/30 flex-col gap-4 overflow-hidden"
            >
              {/* header  */}
              <div className="flex w-full items-center justify-between bg-secondary px-3">
                <div className="flex items-center h-11">
                  <Avatar src={""} />
                  <p>{el.fromName}</p>
                </div>
                <div className="flex items-center gap-4 bg-card px-10 py-1 rounded-md text-lg">
                  <Scale />
                  <p>{el.sumFix - el.sumRecipt + el.sumPayment}</p>
                </div>
                {/* <CallClient phone={el.mobile} /> */}
              </div>
              {/* balance  */}
              <Balance
                sumFix={el.sumFix}
                sumRecipt={el.sumRecipt}
                sumPayment={el.sumPayment}
              />
              
                
                <Link
                  className="px-3 py-1 bg-accent text-accent-foreground rounded shadow-xl font-semibold  w-10/12 flex items-center justify-center mb-2 "
                  href={`/dashboard/clients/statment/statment/${el.fromId}`}
                >
                  كشف حساب
                </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Statement;
