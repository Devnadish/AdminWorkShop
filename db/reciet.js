"use server";
import db from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { AddRecietCounter } from "./counters";

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


export async function createReciptVocherForFixOrder(Voucherdata) {
  const detail = "   مقابل امر اصلاح رقم " + Voucherdata.fixingId;
  const fromID = Voucherdata.clientId;
  const fromName = Voucherdata.clientName;
  const amount = Voucherdata.receive;
  const fixingCode = Voucherdata.fixingId;
  try {
    const RecietCounter = await AddRecietCounter();
    // const data = { ...reciptData, recietId: RecietCounter };
    const data = {
      detail,
      fromID,
      fromName,
      amount,
      fixingCode,
      recietId: RecietCounter,
    };
    const order = await db.RecietVoucher.create({ data });
    return {
      msg: "Reciet Created Success WITH NO :" + RecietCounter,
      voucher: RecietCounter,
    };
  } catch (error) {
    console.error("Error creating fixing order:", error);
    throw new Error("Failed to create fixing order: " + error.message);
    return { err: error.message };
  }
}



