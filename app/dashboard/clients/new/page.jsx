import PageTitle from "@/components/sharedcompnent/PageTitle";
import { User } from "lucide-react";
import { displayClients } from "@/db/clients";
import ShowClients from "@/app/dashboard/clients/_component/ShowClients";
import NewBtnClient from "@/app/dashboard/clients/_component/NewBtnClient";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

async function RegisterPage() {
  const clients = await displayClients();

 
  return (
    <div className="flex flex-col">
      <PageTitle title={"تاسيس عميل جديد"} icon={<User />} />
      <div className="flex flex-col w-full items-center justify-center gap-4 p-4">
        <NewBtnClient />
        <Suspense fallback={<p>loading</p>}>
          <ShowClients clients={clients} />
        </Suspense>
      </div>
    </div>
  );
}
export default RegisterPage;
