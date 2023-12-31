import NewFixOrder from "@/components/pagecomponent/back/fixing/NewFixOrder";
import React from "react";
import { getAllClients } from "@/db/clients";
import { getCarsData } from "@/db/cars";
import { displayAllLabor } from "@/db/labor";

export const dynamic = "force-dynamic";



async function NewFix() {
  try {
    const clientdb = getAllClients();
    const carDatadb = getCarsData()
    const laborDatadb = displayAllLabor()

    const [
      client,
      carData,
      labor
    ] = await Promise.all([
      clientdb,
      carDatadb,
      laborDatadb
    ]);






    let clientsWithCars = [];
    clientsWithCars = client.filter((client) => client.carsData.length > 0);

    return (
      <div>
        {/* <p>كرت صيانة</p> */}
        <NewFixOrder clientsWithCars={clientsWithCars} carData={carData} labor={labor} />
      </div>
    );
  } catch (error) {
    // Handle error
    console.log(error)
  }
}

export default NewFix;
