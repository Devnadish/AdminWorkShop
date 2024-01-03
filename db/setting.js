"use server";
import db from "@/lib/prisma";
import { revalidatePath } from "next/cache";




export async function deleteAllData() {
  const models = Object.keys(db);
  for (const model of models) {
    if (model !== "counters" && model !== "Client" && db[model].deleteMany) {
      console.log("Deleting data from model:", model);
      await db[model].deleteMany({});
    }
  }
}
