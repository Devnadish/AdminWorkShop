import CardActions from "@/components/pagecomponent/back/fixing/CardActions";
import Caption, { DateCaption, VCaption } from "@/components/shared/Caption";
import { getAllFixOrder } from "@/db/fixing"

export const dynamic = "force-dynamic";

async function page() {
  const fixOrder =await  getAllFixOrder();
  return (
    <div className="flex flex-wrap items-start justify-center w-full max-w-6xl bg-black">
      <p className="bg-orange-500 mt-4 rounded px-6">
        عدد الكروت : <span>{fixOrder.length}</span>
      </p>
      <div className=" flex flex-wrap items-start justify-center w-full">
        {fixOrder.map((fix) => (
          <div
            key={fix.id}
            className={`max-w-sm rounded overflow-hidden shadow-lg m-4 border min-w-[300px] w-full   ${
              !fix.isClosed ? "border-red-500 border-2" : "border-white/30"
            } `}
          >
            <div className="flex flex-col gap-2 px-6 py-4">
              <Caption title={"رقم الكرت "} data={fix.fixingId} align="center" fonSize="text-xl" titleBgColor="bg-blue-500" dataBgColor="bg-blue-700"/>
              <Caption title={"اسم العميل"} data={fix.clientName}/>
              <Caption title={"رقم السيارة"} data={fix.selectedCar}/>
              <VCaption title={"الخدمة المطلوبة"} data={fix.detail}/>
              <Caption title={"موعد التسليم"} data={fix.delivery}/>
              <Caption title={"المهندس"} data={fix.engName}/>
              <Caption title={"القيمة"} data={fix.total}/>
              <Caption title={"المستلم"} data={fix.receive}/>
              <Caption title={"المتبقي"} data={fix.total-fix.receive}/>
              <Caption title={"حالة الكرت"} data={fix.isClosed ? "مقفل" : "مفتوح"} />
              <div className="flex items-center justify-between">
              <DateCaption title={fix.createdDate}/>
              <DateCaption title={fix.updatedDate}/>
              </div>
              {/* <CardActions id={fix.id} /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default page
