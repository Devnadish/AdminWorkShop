import NewFixOrder from "@/app/(mangment)/dashboard/fixing/_component/NewFixOrder";
import React from "react";
import { getAllClientsFixCard } from "@/db/clients";
import { getCarsData } from "@/db/cars";
import { displayAllLabor } from "@/db/labor";

export const dynamic = "force-dynamic";

async function NewFix() {
  try {
    const carDatadb =  getAllClientsFixCard();
    const laborDatadb = displayAllLabor();

    const [ carData, labor] = await Promise.all([
      carDatadb,
      laborDatadb,
    ]);
    return (
      <>
        <NewFixOrder
          carData={carData}
          labor={labor}
        />
      </>
    );
  } catch (error) {
    // Handle error
    console.log(error);
  }
}

export default NewFix;
