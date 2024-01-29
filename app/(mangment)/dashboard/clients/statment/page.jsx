import Link from "next/link";
import { getGroupClientWithTransactions } from "@/db/clients";
import Avatar from "@/components/shared/Avatar";
import CallClient from "@/components/shared/CallClient";
import { PageHeader } from "./_component/PageHeader";
import { Balance } from "./_component/Balance";
import { Scale } from "@/lib/icons";
export const dynamic = "force-dynamic";

async function Statement() {
  const data = await getGroupClientWithTransactions();

  return (
    <div className="overflow-x-auto flex flex-wrap items-center justify-center w-full max-w-7xl">
    <div className="text-base font-tajwal flex items-center justify-center gap-3 flex-col w-full flex-wrap">
      <PageHeader rows={data.length} />
      <div className="flex w-full items-center justify-center flex-wrap gap-8">
        {data.map((el) => {
          return (
            <div
              key={el.fromId}
              className="border flex items-center justify-between min-w-[350px] rounded-md border-white/30 flex-col gap-4 overflow-hidden"
            >
              <div className="flex w-full items-center justify-between bg-sky-700 px-3">
                <div className="flex items-center">
                  <Avatar src={""} />
                  <p>{el.fromName}</p>
                </div>
                <CallClient phone={el.mobile} />
              </div>
              <Balance
                sumFix={el.sumFix}
                sumRecipt={el.sumRecipt}
                sumPayment={el.sumPayment}
              />
              <div className="flex w-full items-center justify-between px-3">
                <div className="flex items-center gap-4 bg-black px-10 py-.5 rounded-md text-lg">
                  <Scale />
                  <p>{el.sumFix - el.sumRecipt + el.sumPayment}</p>
                </div>
                <Link
                  className="px-3 py-1 bg-systemColor-balnceToClient text-black rounded shadow-xl font-semibold mb-2"
                  href={`/dashboard/clients/statment/statment/${el.fromId}`}
                >
                  كشف حساب
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>
  );
}

export default Statement;
