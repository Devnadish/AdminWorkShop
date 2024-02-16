import DisplayNOte from "@/app/dashboard/fixing/_component/DisplayNOte";
import { DateCaption } from "@/components/sharedcompnent/Caption";
import { getAllOpenCard } from "@/db/fixing";
import { MdCarCrash } from "@/lib/icons";
import DashBoardCardActions from "./_component/DashBoardCardActions";
import IconWithdata from "@/components/sharedcompnent/IconWithdata";
import { ShowCards } from "./_component/ShowCards";
import { Suspense } from "react";

export const dynamic = "force-dynamic";
async function page() {
  const fixOrder = await getAllOpenCard();
  return (
    <div className="flex flex-wrap items-center justify-center w-full flex-col mt-3 max-w-6xl">
      <div className="flex  items-center justify-start w-full  max-w-6xl my-2">
        <IconWithdata tooltip={"كروت الصيانة  المفتوحة"}>
          <MdCarCrash className="text-primary" size={30} />
          {fixOrder.length}
        </IconWithdata>
      </div>
      <Suspense fallback={<p className="text-black"> loading..</p>}>
        <div className="grid grid-cols-1 place-items-start gap-4 md:grid-cols-2 ">
          {fixOrder.map((fix) => (
            <div
              key={fix.cardId}
              className="rounded overflow-hidden shadow-lg   min-w-[300px] w-full "
            >
              <ShowCards
                cardNo={fix.cardId}
                cardDate={<DateCaption data={fix.createData} />}
                carNo={fix.CarNo}
                clientName={fix.clientName}
                service={fix.service}
                delevery={fix.delevery}
                reminder={fix.reminder}
                deleverTime={fix.deleverTime}
                eng={fix.eng}
                note={<DisplayNOte note={fix.note} />}
                action={
                  <DashBoardCardActions
                    id={fix.id}
                    cardid={fix.cardId}
                    carId={fix.CarNo}
                  />
                }
              />
            </div>
          ))}
        </div>
      </Suspense>
    </div>
  );
}

export default page;
