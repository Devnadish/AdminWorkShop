"use server";
import db from "@/lib/prisma";
import { revalidatePath } from "next/cache";
export async function newNote(data) {
    try {
        const saveNote = await db.cardNote.create({ data });
    } catch (error) {
        
        console.log(error)
    }
    revalidatePath("/dashboard");
  }
  