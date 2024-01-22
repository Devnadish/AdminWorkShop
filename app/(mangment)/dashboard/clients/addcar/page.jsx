
import { Car } from "@/lib/icons";
import { fetchClientNames } from "@/db/clients";

import PageTitle from "@/components/shared/PageTitle";
import CarsCard from "@/app/_pagecomponent/clients/cars/CarsCard";
import { getCarData } from "@/db/cars";
import AddNewCar from "@/app/_pagecomponent/clients/cars/AddNewCar";

export const dynamic = "force-dynamic";
async function AddCar() {


const CLIENTS=await fetchClientNames()
const Cars=await getCarData()


  return (
    <div className="flex items-center justify-center flex-col gap-4 ">
      <PageTitle title={"اضافة سيارة"} icon={<Car />} />
      <AddNewCar clientData={CLIENTS}/>
      <CarsCard cars={Cars}  clientData={CLIENTS}/>
    </div>
  );
}

export default AddCar;


