import NewFixOrder from "@/app/dashboard/fixing/neworder/_component/NewFixOrder";
import React, { Suspense } from "react";
import { CarListForFixCard, getAllClientsFixCard } from "@/db/clients";
import { displayAllLabor } from "@/db/expensis";

export const dynamic = "force-dynamic";

async function NewFix() {
  const carDatadb = CarListForFixCard();
  const EngineersDatadb = displayAllExpensis();
  const [carData, Engineers] = await Promise.all([carDatadb, EngineersDatadb]);
  console.log(carData)

  return (
    <Suspense fallback={<p>جاري التحميل ...</p>}>
      <NewFixOrder carData={carData} Engineers={Engineers} />
    </Suspense>
  );
}
export default NewFix;
