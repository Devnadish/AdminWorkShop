"use server"
import db from "@/lib/prisma";
import { revalidatePath } from "next/cache";




export async function newExp(data) {

const check = await db.Expence.findMany({
  where: { expName: data.expName },
});
if (check.length !== 0) {
  return {
    code: 400,
    msg:" المصروف موجود من قبل ...",
  };
}
  const Getexp = await db.Expence.create({data});
    revalidatePath("dashboard/setting/expences");
  return Getexp;
}



export async function displayAllExpencies() {
  const Getexp = await db.Expence.findMany({});
  return Getexp;
}


export async function deleteExp( expName1,id ) {
  const check = await db.PaymentVoucher.findMany({
    where: { collector: expName1 },
  });
  if (check.length!==0){
    return {code:400,msg:"لا يمكن حذف المصروف توجد علية حركة مالية راج الادارة"}
  }
  const Doit = await db.Expence.delete({ where: { id: id } });
  revalidatePath("dashboard/setting/expences");
  return check;
}
