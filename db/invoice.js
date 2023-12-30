"use server";
import db from "@/lib/prisma";
import { revalidatePath } from "next/cache";


export async function collectInvoice(id) {
  const existingOrder = await db.openFixingOrder.findMany({
    where:{id:id}
  });

  const Reciet = await db.RecietVoucher.findMany({
    where: { fixingCode: existingOrder[0].fixOrederId },
  });

const Payment = await db.PaymentVoucher.findMany({
  where: { fixingCode: existingOrder[0].fixOrederId },
});






  return {orderData:existingOrder[0],Recipt: Reciet, Payment:Payment}
}
