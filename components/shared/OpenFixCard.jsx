import { calculateTotalAmountForOrders, getCarsFromOpenFixOrder } from '@/db/fixing'
import { ScrollArea } from "@/components/ui/scroll-area";
import CopyBtn from './CopyBtn';
import { Wrench } from 'lucide-react';


async function OpenFixCard() {
    // const Cardata = await getCarsFromOpenFixOrder()
  const Cardata = await calculateTotalAmountForOrders()




  return <ShowCars cars={Cardata}/>;
}

export default OpenFixCard



// const ShowCars = ({ cars }) => {
//   return (
//     <div className="w-full flex flex-col ">
//       <p className="w-full flex items-center justify-start   py-1">
//         عدد السيارات تحت الصيانة : <span>{cars.length}</span>
//       </p>
//       <ScrollArea className="h-[50vh]    rounded-b-md w-full     ">
//         {/* <div className="flex w-1/2 flex-col w-full items-center justify-center "> */}

//         <table
//           className="rounded-md  divide-y divide-gray-200 rounded-lg shadow-md text-black w-full "
//           dir="rtl"
//         >
//           <thead className="bg-gray-200 w-full">
//             <tr>
//               <th
//                 scope="col"
//                 className=" py-1 text-right  text-base  font-medium text-gray-500 uppercase tracking-wider px-2 bg-slate-300"
//               >
//                 رقم اللوحة
//               </th>
//               <th
//                 scope="col"
//                 className=" py-1 text-right  text-base font-medium text-gray-500 uppercase tracking-wider"
//               >
//                 اسم العميل
//               </th>
//               <th
//                 scope="col"
//                 className=" py-1 text-right text-base font-medium text-gray-500 uppercase tracking-wider"
//               >
//                 كرت الاصلاح
//               </th>
//               <th
//                 scope="col"
//                 className=" py-1 text-right text-base font-medium text-gray-500 uppercase tracking-wider"
//               >
//                ا.الكرت
//               </th>
//             </tr>
//             <th
//               scope="col"
//               className=" py-1 text-right text-base font-medium text-gray-500 uppercase tracking-wider"
//             >
//               ا. المستلم
//             </th>
//             <th
//               scope="col"
//               className=" py-1 text-right text-base font-medium text-gray-500 uppercase tracking-wider"
//             >
//               المتبقي
//             </th>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200 w-full">
//             {cars.map((client) => (
//               <tr key={client.id} className="hover:bg-gray-100">
//                 <p className=" py-1 whitespace-nowrap text-right px-2 bg-slate-300">
//                   <span className="text-sm font-medium">
//                     {client.selectedCar}
//                   </span>
//                 </p>
//                 <td className=" py-1 whitespace-nowrap  text-right px-2">
//                   <span className="text-sm text-gray-500 ">
//                     {client.clientName}
//                   </span>
//                 </td>
//                 <td className=" py-1 whitespace-nowrap  text-right px-2">
//                   <span className="text-sm text-gray-500 ">
//                     {client.fixOrederId}
//                   </span>
//                 </td>
//                 <td className=" py-1 whitespace-nowrap  text-right px-2">
//                   <span className="text-sm text-gray-500 ">
//                     {client.fixOrederId}
//                   </span>
//                 </td>
//                 <td className=" py-1 whitespace-nowrap  text-right px-2">
//                   <span className="text-sm text-gray-500 ">
//                     {client.fixOrederId}
//                   </span>
//                 </td>
//                 <td className=" py-1 whitespace-nowrap  text-right px-2">
//                   <span className="text-sm text-gray-500 ">
//                     {client.fixOrederId}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         {/* </div> */}
//       </ScrollArea>
//     </div>
//   );
// };


const ShowCars = ({ cars }) => {


  return (
    <div className="w-full flex flex-col ">
      <p className="w-full flex items-center justify-start   py-1">
        عدد السيارات تحت الصيانة : <span>{cars.length}</span>
      </p>
      <ScrollArea className="h-[50vh]    rounded w-full  border p-2   ">
        <div className="flex  w-full flex-col  items-center justify-center gap-4 ">


            {cars.map((client,index) => (
              <div key={index + client.selectedCar} className="border w-full border-white/30 rounded flex flex-col   ">
                <div className='flex items-center justify-between px-2 bg-white/40'>
                  <div className='flex items-center py-1'>
                    <CopyBtn text={ client.selectedCar }/>
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
                <p className=" py-1   text-right px-2 bg-blue-800 order-3">
                    <span className="text-sm  py-1 px-3  rounded ">
                        {client.fixOrederAmt}
                  </span>
                    <span >اجمالي الكرت</span>

                </p>

                    <p className=" py-1   text-right px-2  bg-blue-800 order-2">
                      <span className="text-sm  py-1 px-3  rounded "> {client.totalRecipt} </span>
                      <span >اجمالي المستلم</span>
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
