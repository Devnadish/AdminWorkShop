import PageTitle from "@/components/shared/PageTitle";
import { User } from "lucide-react";
import Newform from "@/app/_pagecomponent/clients/client/Newform";
import { displayClients  } from "@/db/clients";
import ShowClients from "@/app/_pagecomponent/clients/client/ShowClients";

export const dynamic = "force-dynamic";


async function RegisterPage() {
  const clients = await displayClients();
  return (
    <div className="flex flex-col">
      <PageTitle title={"تاسيس عميل جديد"} icon={<User />} />
    <div className="flex flex-col w-full items-center justify-center gap-4 p-4">
      <Newform/>
      <ShowClients clients={clients} />
    </div>
    </div>
  );
}
export default RegisterPage;
