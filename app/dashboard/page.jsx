import CardActions from "@/app/(mangment)/dashboard/fixing/_component/CardActions";
import DisplayNOte from "@/app/(mangment)/dashboard/fixing/_component/DisplayNOte";
import Caption, { DateCaption, VCaption } from "@/components/shared/Caption";
import { getAllOpenCard } from "@/db/fixing"


export const dynamic = "force-dynamic";

async function page() {
  const fixOrder = await getAllOpenCard();
  return (
    <div className="overflow-x-auto flex flex-wrap items-start justify-center w-full">
      <div className="w-full max-w-md mt-1">
        <Caption title={"كروت الصيانة المفتوحة "} data={fixOrder.length} fonSize="text-xl" titleBgColor="bg-green-600" align={"center"} dataBgColor="bg-green-700" />
      </div>

      <div className="overflow-x-auto flex flex-wrap items-start justify-center w-full">
        {fixOrder.map((fix) => (
          <div
            key={fix.cardId}
            className="max-w-3xl  rounded overflow-hidden shadow-lg m-4 border min-w-[300px] w-full   border-red-600 border-2"
          >
            <div className="flex flex-col gap-2 px-6 py-4">
              <DateCaption data={fix.createData} />
              <Caption title={"رقم الكرت"} data={fix.cardId} fonSize="text-xl" titleBgColor="bg-blue-500" align={"center"} dataBgColor="bg-sky-700" />
              <div className="flex items-center justify-between gap-4 ">
                <Caption title={"اسم العميل"} data={fix.clientName} align={"start"} />
                <Caption title={" رقم السيارة"} data={fix.CarNo} align={"start"} />
              </div>
              <VCaption title={"الخدمة المطلوبة"} data={fix.service} align={"start"} titleBgColor="bg-orange-600" />
              <Caption title={" موعد التسليم"} data={fix.delevery} align={"start"} />
              <Caption title={"المهندس"} data={fix.eng} align={"start"} />


<DisplayNOte note={fix.note}/>

              <CardActions id={fix.id} cardid={fix.cardId}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page
