"use server";
import db from "@/lib/prisma";
import { revalidatePath } from "next/cache";






export async function collectInvoice(id) {
 

const FixData = await db.fixingOrder.findMany({
  where: { id:id },
});
const Reciet = await db.RecietVoucher.findMany({
    where: { fixingCode: FixData[0].fixingId},
  });
  
  const Payment = await db.PaymentVoucher.findMany({
    where: { fixingCode: FixData[0].fixingId},
  });






  return {
    orderData: FixData[0].fixingId,
    Recipt: Reciet,
    Payment: Payment,
    FixData: FixData,
  }}
