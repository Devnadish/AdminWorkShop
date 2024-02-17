"use server";
import db from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function saveRecietVoucher(reciptData) {
  try {
    const RecietCounter = await AddRecietCounter();
    const docDate = new Date(reciptData.docDate).toISOString(); // Convert to ISO-8601 format
    const data = { ...reciptData, recietId: RecietCounter, docDate };
    const order = await db.RecietVoucher.create({ data });
    revalidatePath("dashboard/fixing/closeorder")
     revalidatePath("/dashboard/dashboard");

    return {
      msg: "تم انشاء سند قبض ",
      recietNo: RecietCounter,
      client: data.fromName,
      fixNo: data.fixingCode,
      amt: data.amount,
    };
  } catch (error) {
    return { err: error.message };
  }
}


export async function updateClientReceiptBalance(Cid, amount) {
  const existingRecord = await db.client.findUnique({
    where: { clientIDs: Cid },
  });
if(!existingRecord){

  return {msg:"ملف العميل غير موجود -- خلل راجع الادارة للضروره ... ",code:400}
 
}

  if (existingRecord && existingRecord.recipts !== null) {
    const updatedAmount = existingRecord.recipts + amount;
    await db.client.update({
        where: { clientIDs: Cid },
        data: { recipts: updatedAmount },
    });
} else {
    await db.client.update({
        where: { clientIDs: Cid },
        data: { recipts: amount },
    });
}

  return {msg:"تم تعديل رصيد العميل بنجاح",code:200}
}



export const AddRecietCounter = async () => {
  let updatedReciet;

  // Check if a record exists in the counters table
  const existingRecord = await db.counters.findFirst();


  if (existingRecord) {
    // If a record exists, update the Reciet field by incrementing its value by 1
    await db.counters.update({
      where: { id: existingRecord.id },
      data: { recipt: existingRecord.recipt + 1 },
    });

    updatedReciet = existingRecord.recipt + 1;
  } else {
    // If a record doesn't exist, create a new record with the Reciet field set to 1
    const newRecord = await db.counters.create({ data: { recipt: 1 } });

    updatedReciet = newRecord.recipt;
  }

  // Use the updatedReciet variable to access the updated Reciet value
  return updatedReciet;
};
