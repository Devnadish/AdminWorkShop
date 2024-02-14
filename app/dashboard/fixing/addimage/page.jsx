import React, { Suspense } from "react";
import ListCard from "./_component/ListCard";
export const dynamic = "force-dynamic";

async function page() {
    // await new Promise((resolve)=>setTimeout(resolve,150000))
  return (
    <Suspense fallback={<p>loading....</p>}>
    <section className="max-w-5xl  w-full mt-3 rounded p-4 flex items-start justify-center gap-4">
      <ListCard />
      {/* <Dropzone className="border   border-neutral-200 p-2 rounded-lg bg-slate-400 " /> */}
    </section>
    </Suspense>
  );
}

export default page;
