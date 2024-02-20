"use server"
import { Notify } from "@/lib/notify";
import db from "@/lib/prisma";
import { revalidatePath } from "next/cache";




export async function newExpensis(data) {

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



export async function displayAllExpensis() {
  const Getexp = await db.expensis.findMany({});
  return Getexp;
}
export async function getAllTag() {
  const getTag = await db.tag.findMany({});
  return getTag;
}

export async function getAllExpencies() {
 try {
   const Getexp = await db.expensis.findMany({select:{expName:true,tag:true}});
   return Getexp;
 } catch (error) {
  Notify(error,"error")
 }
}

