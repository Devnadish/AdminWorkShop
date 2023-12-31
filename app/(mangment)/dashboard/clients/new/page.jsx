import PageTitle from "@/components/shared/PageTitle";
import { User } from "lucide-react";
import Newform from "@/components/pagecomponent/back/clients/client/Newform";
import { displayClients  } from "@/db/clients";
import { ScrollArea } from "@/components/ui/scroll-area";
import DeleteClient from "@/components/pagecomponent/back/clients/client/DeleteClient";

export const dynamic = "force-dynamic";


async function RegisterPage() {
  const clients = await displayClients();
  return (
    <div className="flex flex-col w-full items-center justify-center gap-4">
      <PageTitle title={"تاسيس عميل جديد"} icon={<User />} />
      <Newform/>
      <ShowClients clients={clients} />
    </div>
  );
}
export default RegisterPage;


const ShowClients = ({ clients }) => {
  return (
    <div className="w-full flex flex-col md:max-w-md">
      <p className="w-full flex items-center justify-start  bg-black py-1">
        عدد العملاء : <span>{clients.length}</span>
      </p>
      <ScrollArea className="h-[50vh]    rounded-b-md w-full     ">
        {/* <div className="flex w-1/2 flex-col w-full items-center justify-center "> */}

        <table
          className="rounded  divide-y divide-gray-200 rounded-lg shadow-md text-black w-full  md:max-w-md  "
          dir="rtl"
        >
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className=" py-3 text-right  text-base  font-medium text-gray-500 uppercase tracking-wider px-2"
              >
                الاسم
              </th>
              <th
                scope="col"
                className=" py-3 text-right  text-base font-medium text-gray-500 uppercase tracking-wider"
              >
                الجوال
              </th>
              <th
                scope="col"
                className=" py-3 text-right text-base font-medium text-gray-500 uppercase tracking-wider"
              >
                حذف
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {clients.map((client) => (
              <tr key={client.id} className="hover:bg-gray-100">
                <td className=" py-1 whitespace-nowrap text-right px-2">
                  <span className="text-sm font-medium">{client.name}</span>
                </td>
                <td className=" py-1 whitespace-nowrap  text-right px-2">
                  <span className="text-sm text-gray-500 ">
                    {client.mobile}
                  </span>
                </td>
                <td className=" py-1 whitespace-nowrap text-center  text-right px-2">
                  {/* <span className="text-sm text-gray-500">{client.email}</span> */}
                  <DeleteClient
                    className="text-red-500 text-2xl h-6 w-6 cursor-pointer"
                    id={client.id}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* </div> */}
      </ScrollArea>
    </div>
  );
}
