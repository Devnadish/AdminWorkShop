import CardActions from "@/components/pagecomponent/back/fixing/CardActions";
import { getAllFixOrder } from "@/db/fixing"
import { getTimeElapsed } from "@/lib/timeanddate";




async function page() {
  const fixOrder =await  getAllFixOrder();

  return (
    <div className="overflow-x-auto flex flex-wrap items-start justify-center w-full">
      <p className="bg-orange-500 mt-4 rounded px-6">
        عدد الكروت : <span>{fixOrder.length}</span>
      </p>
      <div className="overflow-x-auto flex flex-wrap items-start justify-center w-full">
        {fixOrder.map((fix) => (
          <div
            key={fix.id}
            className={`max-w-sm rounded overflow-hidden shadow-lg m-4 border min-w-[300px]   ${
              !fix.isClosed ? "border-red-500 border-2" : "border-white/30"
            } `}
          >
            <div className="flex flex-col gap-2 px-6 py-4">
              <div className="font-bold text-xl ">
                <span>الكرت رقم :</span> {fix.fixingId} {fix.paymentSum }
              </div>
              <p className="text-gray-400 text-base ">
                <span className="bg-gray-600 px-4 rounded ml-2">
                  اسم العميل
                </span>
                {fix.clientName}
              </p>
              <p className="text-gray-400 text-base ">
                <span className="bg-gray-600 px-2 rounded ml-2">
                  رقم السيارة
                </span>
                {fix.selectedCar}
              </p>
              <p className="text-gray-400 text-base ">
                <span className="bg-gray-600 px-2 rounded ml-2">
                  الخدمة المطلوبة
                </span>
                {fix.detail}
              </p>
              <p className="text-gray-400 text-base ">
                <span className="bg-gray-600 px-2 rounded ml-2">
                  موعد التسليم
                </span>
                {fix.delivery}
              </p>
              <p className="text-gray-400 text-base ">
                <span className="bg-gray-600 px-2 rounded ml-2">المهندس</span>
                {fix.engName}
              </p>
              <p className="text-gray-400 text-base ">
                <span className="bg-yellow-600 text-black px-2 rounded">
                  القيمة
                </span>
                {fix.total}
              </p>
              <p className="text-gray-400 text-base ">
                <span className="bg-yellow-600 text-black px-2 rounded ml-2">
                  المستلم
                </span>
                {fix.receive}
              </p>
              <p className="text-gray-400 text-base ">
                <span className="bg-yellow-600 text-black px-2 rounded ml-2">
                  حالة الكرت
                </span>
                <span
                  className={`${
                    !fix.isClosed ? "bg-red-500" : "bg-blue-500"
                  } text-white px-3 rounded-lg `}
                >
                  {fix.isClosed ? "مقفل" : "مفتوح"}
                </span>
              </p>
              <p className="text-gray-400 text-base">
                <span className="bg-gray-600 px-2 rounded ml-2">التاريخ</span>
                {getTimeElapsed(fix.updatedDate)}
              </p>
              <CardActions id={fix.id} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default page
