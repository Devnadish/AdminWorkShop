import NewFixOrder from "@/components/pagecomponent/back/fixing/NewFixOrder";
import React from "react";

import { getAllClients } from "@/db/clients";

async function NewFix() {
  try {
    const client = await getAllClients();
    let clientsWithCars = [];

    clientsWithCars = client.filter((client) => client.carsData.length > 0);

    return (
      // <div>
      <NewFixOrder clientsWithCars={clientsWithCars} />
      // </div>
    );
  } catch (error) {
    // Handle error
  }
}

export default NewFix;
