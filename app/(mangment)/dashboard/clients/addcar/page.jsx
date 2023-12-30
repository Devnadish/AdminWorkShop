
import { Car } from "lucide-react";
import { fetchClientNames } from "@/db/clients";

import PageTitle from "@/components/shared/PageTitle";
import CarForm from "@/components/pagecomponent/back/clients/cars/CarForm";

async function AddCar() {


const CLIENTS=await fetchClientNames()

  return (
    <div className="flex items-center justify-center flex-col max-w-md mx-auto ">
      <PageTitle title={"اضافة سيارة"} icon={<Car />} />
      <CarForm clientData={CLIENTS}/>
      {/* <ShowCars cars={ClientCars} /> */}
    </div>
  );
}

export default AddCar;

const ShowCars = ({ cars }) => {
  return (
    <table className="table-auto border-collapse w-full mb-4 ">
      <thead className="bg-green-500 text-white ">
        <tr>
          <th className="bg-green-600 px-1 py-1 w-[40%]">رقم اللوحة</th>
          <th className="bg-green-600 px-1 py-1">النوع</th>
        </tr>
      </thead>
      <tbody>
        {cars.map((car, index) => {
          const oddRow =
            index % 2 === 0
              ? "bg-gray-50 text-black"
              : "bg-gray-400 text-white";
          return (
            <tr key={car.id} className={oddRow}>
              <td className="border px-1 py-1 text-black">{car.CarNo}</td>
              <td className="border px-1 py-1 text-black">{car.carName}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
