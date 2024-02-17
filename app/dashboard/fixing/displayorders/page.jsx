import { getAllFixOrder } from "@/db/fixing";
import { BodyCard } from "./_components/BodyCard";
import { FiniceCard } from "./_components/FiniceCard";
import { HeaderCard } from "./_components/HeaderCard";
import IconWithdata from "@/components/sharedcompnent/IconWithdata";
import { MdCarCrash } from "@/lib/icons";
import Link from "next/link";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

async function page() {
  const fixOrder = await getAllFixOrder();
      // await new Promise((resolve)=>setTimeout(resolve,150000))
  return (
    <div className="flex flex-wrap items-start justify-center w-full max-w-6xl ">
        {/* <FilterData/> */}
      <div className="flex  items-center justify-start w-full  max-w-6xl my-2">
        <IconWithdata tooltip={"عدد الكروت"}>
          <MdCarCrash className="text-primary" size={30} />
          {fixOrder.length}
        </IconWithdata>
      </div>
      <Suspense fallback={<p>loading...</p>}>
      <div className=" flex flex-wrap items-start justify-center w-full gap-4">
        {fixOrder.map((fix) => {
          let brd;
          fix.isClosed
            ? (brd = "border-white/30")
            : (brd = "border-red-500 border-2");
          return (
            <div
              key={fix.id}
              className={`max-w-[300px] rounded flex items-center justify-between shadow-lg gap-3 p-2 flex-col border border-border min-w-[300px] w-full min-h-72  ${brd} `}
            >
              <HeaderCard
                fixingId={fix.fixingId}
                clientName={fix.clientName}
                selectedCar={fix.selectedCar}
                isClosed={fix.isClosed}
                create={fix.createdDate}
                update={fix.updatedDate}
              />
              <BodyCard
                detail={fix.detail}
                delivery={fix.delivery}
                engName={fix.engName}
              />
              <FiniceCard total={fix.total} receive={fix.receive} />
              <Link href={`/dashboard/fixing/cardstatment/${fix.fixingId}`} className="bg-blue-400/80 px-3 w-10/12 mb-2 py-0.5  text-center shadow rounded" >معلومات  تفصيليه</Link>
            </div>
          );
        })}
      </div>
      </Suspense>
    </div>
  );
}
export default page;

// rgb(138, 180, 248);
