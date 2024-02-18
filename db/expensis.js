"use server"
import db from "@/lib/prisma";
import { revalidatePath } from "next/cache";




export async function newLabor(data) {

const check = await db.expensis.findMany({
  where: { expName: data.expName },
});
if (check.length !== 0) {
  return {
    code: 400,
    msg:" المصروف موجود من قبل ...",
  };
}
  const Getexp = await db.expensis.create({data});
    revalidatePath("dashboard/setting/labor");
  return Getexp;
}



export async function displayAllLabor() {
  const Getexp = await db.expensis.findMany({});
  return Getexp;
}
export async function getAllTag() {
  const getTag = await db.tag.findMany({});
  return getTag;
}

// suspens till check shold be in fixorder and payment
export async function deleteLabor( expName1,id ) {
  const check = await db.PaymentVoucher.findMany({
    where: { collector: expName1 },
  });
  if (check.length!==0){
    return {code:400,msg:"لا يمكن حذف المصروف توجد علية حركة مالية راج الادارة"}
  }
  const Doit = await db.expensis.delete({ where: { id: id } });
  revalidatePath("dashboard/setting/expences");
  return check;
}
