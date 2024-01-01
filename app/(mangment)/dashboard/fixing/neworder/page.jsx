import NewFixOrder from "@/components/pagecomponent/back/fixing/NewFixOrder";
import React from "react";
import { getAllClients } from "@/db/clients";
import { getCarsData } from "@/db/cars";

export const dynamic = "force-dynamic";



async function NewFix() {
  try {
    const client = await getAllClients();
    const carData = await getCarsData()
    let clientsWithCars = [];
    clientsWithCars = client.filter((client) => client.carsData.length > 0);

    return (
      <NewFixOrder clientsWithCars={clientsWithCars} carData={carData }/>
    );
  } catch (error) {
    // Handle error
  }
}

export default NewFix;
