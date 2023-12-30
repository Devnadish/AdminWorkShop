import { getCarsFromOpenFixOrder } from '@/db/fixing'
import { ScrollArea } from "@/components/ui/scroll-area";


async function OpenFixCard() {
    const Cardata = await getCarsFromOpenFixOrder()

  return <ShowCars cars={Cardata}/>;
}

export default OpenFixCard



const ShowCars = ({ cars }) => {
  return (
    <div className="w-full flex flex-col md:max-w-md">
      <p className="w-full flex items-center justify-start   py-1">
        عدد السيارات تحت الصيانة : <span>{cars.length}</span>
      </p>
      <ScrollArea className="h-[50vh]    rounded-b-md w-full     ">
        {/* <div className="flex w-1/2 flex-col w-full items-center justify-center "> */}

        <table
          className="rounded-md  divide-y divide-gray-200 rounded-lg shadow-md text-black w-full  md:max-w-md  "
          dir="rtl"
        >
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className=" py-1 text-right  text-base  font-medium text-gray-500 uppercase tracking-wider px-2 bg-slate-300"
              >
                رقم اللوحة
              </th>
              <th
                scope="col"
                className=" py-1 text-right  text-base font-medium text-gray-500 uppercase tracking-wider"
              >
                اسم العميل
              </th>
              <th
                scope="col"
                className=" py-1 text-right text-base font-medium text-gray-500 uppercase tracking-wider"
              >
                كرت الاصلاح
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {cars.map((client) => (
              <tr key={client.id} className="hover:bg-gray-100">
                <td className=" py-1 whitespace-nowrap text-right px-2 bg-slate-300">
                  <span className="text-sm font-medium">
                    {client.selectedCar}
                  </span>
                </td>
                <td className=" py-1 whitespace-nowrap  text-right px-2">
                  <span className="text-sm text-gray-500 ">
                    {client.clientName}
                  </span>
                </td>
                <td className=" py-1 whitespace-nowrap  text-right px-2">
                  <span className="text-sm text-gray-500 ">
                    {client.fixOrederId}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* </div> */}
      </ScrollArea>
    </div>
  );
};
