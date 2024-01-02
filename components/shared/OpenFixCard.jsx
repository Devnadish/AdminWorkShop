import { TESTcalculateTotalAmountForOrders, calculateTotalAmountForOrders, getCarsFromOpenFixOrder } from '@/db/fixing'
import { ScrollArea } from "@/components/ui/scroll-area";
import CopyBtn from './CopyBtn';
import { Wrench } from 'lucide-react';
export const dynamic = "force-dynamic";

async function OpenFixCard() {
  const Cardata = await calculateTotalAmountForOrders()
  // const Cardata1 = await TESTcalculateTotalAmountForOrders()

  return <ShowCars cars={Cardata} />;
}

export default OpenFixCard


const ShowCars = ({ cars }) => {


  return (
    <div className="w-full flex flex-col ">
      <p className="w-full flex items-center justify-start   py-1">
        عدد السيارات تحت الصيانة : <span>{cars.length}</span>
      </p>
      <ScrollArea className="h-[50vh]    rounded w-full  border p-2   ">
        <div className="flex  w-full flex-col  items-center justify-center gap-4 ">


          {cars.map((client, index) => (
            <div key={index + client.selectedCar} className="border w-full border-white/30 rounded flex flex-col   ">
              <div className='flex items-center justify-between px-2 bg-white/40'>
                <div className='flex items-center py-1'>
                  <CopyBtn text={client.selectedCar} />
                  <p className=" py-1  text-right px-2 flex items-center gap-2">
                    <span className="text-sm bg-white/40 py-1 px-3 text-black rounded ">
                      {client.selectedCar}
                    </span>
                    <span>  رقم اللوحة</span>
                  </p>
                </div>
                <p className=" py-1  text-right px-2 flex items-center gap-2">
                  <span className="text-sm bg-white/40 py-1 px-3 text-black rounded ">
                    {client.clientName}
                  </span>
                  <span > اسم العميل</span>
                </p>

              </div>
              <div className='flex items-center justify-between p-2 bg-white/10'>
                <div className='flex items-center gap-2 rounded bg-yellow-300  px-3 text-black py-1'>
                  <p >
                    <span className="rounded ">
                      {client.FixNo}
                    </span>

                  </p>

                  <Wrench />
                </div>
                <div className='flex items-center justify-around gap-1'>
                  <p className=" py-1   text-right px-2 bg-blue-800 order-4">
                    <span className="text-sm  py-1 px-3  rounded ">
                      {client.fixOrederAmt}
                    </span>
                    <span >اجمالي الكرت</span>

                  </p>

                  <p className=" py-1   text-right px-2  bg-blue-600 order-3">
                    <span className="text-sm  py-1 px-3  rounded "> {client.totalRecipt} </span>
                    <span > المستلم</span>
                  </p>

                  <p className=" py-1   text-right px-2  bg-blue-700 order-2">
                    <span className="text-sm  py-1 px-3  rounded "> {client.payment} </span>
                    <span > المصروف</span>
                  </p>

                  <p className=" py-1   text-right px-2 bg-orange-800 order-1 ">
                    <span className="text-sm bg-white/40 py-1 px-3 text-black rounded ">
                      {client.balance}
                    </span>
                    <span > المتبقي</span>
                  </p>

                </div>
              </div>

            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};
