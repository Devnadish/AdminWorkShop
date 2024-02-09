import React from "react";
import ListCard from "./_component/ListCard";
export const dynamic = "force-dynamic";

function page() {
  return (
    <section className="max-w-5xl  w-full mt-3 rounded p-4 flex items-start justify-center gap-4">
      <ListCard />
      {/* <Dropzone className="border   border-neutral-200 p-2 rounded-lg bg-slate-400 " /> */}
    </section>
  );
}

export default page;
