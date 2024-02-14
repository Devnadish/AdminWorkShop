import NewFixOrder from "@/app/dashboard/fixing/neworder/_component/NewFixOrder";
import React, { Suspense } from "react";
import { getAllClientsFixCard } from "@/db/clients";
import { displayAllLabor } from "@/db/labor";

export const dynamic = "force-dynamic";

async function NewFix() {
  //  await new Promise((resolve)=>setTimeout(resolve,150000))
  try {
    const carDatadb = getAllClientsFixCard();
    const laborDatadb = displayAllLabor();
    const [carData, labor] = await Promise.all([carDatadb, laborDatadb]);

    return (
      <>
        <Suspense fallback={<p>جاري التحميل ...</p>}>
          <NewFixOrder carData={carData} labor={labor} />
        </Suspense>
      </>
    );

  } catch (error) {
    console.log(error);
  }
}
export default NewFix;
