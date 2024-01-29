import PageTitle from "@/components/shared/PageTitle";
import { User } from "lucide-react";
import { displayClients } from "@/db/clients";
import ShowClients from "@/app/(mangment)/dashboard/clients/_component/ShowClients";
import NewBtnClient from "@/app/(mangment)/dashboard/clients/_component/NewBtnClient";

export const dynamic = "force-dynamic";


async function RegisterPage() {
  const clients = await displayClients();
  return (
    <div className="flex flex-col">
      <PageTitle title={"تاسيس عميل جديد"} icon={<User />} />
      <div className="flex flex-col w-full items-center justify-center gap-4 p-4">
        {/* <div className="self-end"> */}
        <NewBtnClient/>
        {/* </div> */}
        <ShowClients clients={clients} />
      </div>
    </div>
  );
}
export default RegisterPage;
