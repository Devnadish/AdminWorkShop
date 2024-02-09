import { getClient, getClientTransactions } from "@/db/clients";
import { Phone, User,AlertTriangle } from "@/lib/icons";
import React from "react";
import IconWithdata from "@/components/sharedcompnent/IconWithdata";

async function page({ params }) {
  const transaction = await getClientTransactions(parseInt(params.id));
  const client = await getClient(parseInt(params.id));
  if (!client) {
    return (
      <div className="flex  flex-col items-center justify-around text-black bg-yellow-300 w-80 h-60 text-2xl mt-11 rounded-xl shadow-lg">
        <AlertTriangle size={60} className="text-red-500"/>
        <p className="font-tajwal text-center font-extrabold">العميل غير موجود في ملف العملاء</p>
        <p className="font-tajwal text-center font-extrabold text-[1rem] text-red-500 w-full flex items-center justify-end px-4">راجع الادارة ..</p>
      </div>
    );
  }


  return (
    <>
      <div className="w-full  flex items-center  flex-wrap  flex-col max-w-4xl mt-4 overflow-auto px-6">
        <div className="w-full flex items-center  justify-between px-2 gap-4 rounded  flex-wrap bg-accent max-w-4xl self-start py-2 ">
          <IconWithdata>
            <User size={25} strokeWidth={1} />
            <p>{client.name}</p>
          </IconWithdata>
          <IconWithdata>
          <Phone size={25} strokeWidth={1} />
            <p>{client.mobile}</p>
          </IconWithdata>
        </div>
        {transaction}
      </div>
    </>
  );
}

export default page;
