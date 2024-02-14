import { Car } from "@/lib/icons";
import { fetchClientNames } from "@/db/clients";

import PageTitle from "@/components/sharedcompnent/PageTitle";
import { getCarData } from "@/db/cars";
import AddNewCar from "@/app/dashboard/car/_component/AddNewCar";
import { SingleCard } from "./_component/SingleCard";
import { Suspense } from "react";

export const dynamic = "force-dynamic";
async function AddCar() {
  const CLIENTS = await fetchClientNames();
  const Cars = await getCarData();
    // await new Promise((resolve)=>setTimeout(resolve,15000))

  return (
    <div className="flex items-center justify-center flex-col gap-4 ">
      <PageTitle title={"اضافة سيارة"} icon={<Car />} />
      <AddNewCar clientData={CLIENTS} />
      <Suspense fallback={<p>loading...</p>}>
        <div className="grid grid-cols-1 place-items-start gap-6 md:grid-cols-3 ">
          {Cars.map((car) => {
            return <SingleCard key={car.id} car={car} clientData={CLIENTS} />;
          })}
        </div>
      </Suspense>
    </div>
  );
}

export default AddCar;
