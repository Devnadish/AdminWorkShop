"use server";
import db from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addTextComplain(data) {
  try {
    // Check if the CarNo already exists for another client

    const comment = await db.complain.create({ data });
    revalidatePath("/");
    revalidatePath("/dashboard/clients/comment");
    return {
      msg: "نشكر اهتمامك ... تم ارسال الشكوى للادارة لمراجعتها وسيتم التواصل معك قريبا  ",
    };
  } catch (error) {
    console.error(error);
    return "An error occurred while adding the car";
  }
}

export async function getAllcomplainForAdmin() {
  try {
    const comments = await db.complain.findMany({
      orderBy: {
        updatedAt: "desc", // Sort in descending order by updatedAt
      },
    });
    return comments;
  } catch (error) {
    console.error(error);
    return "An error occurred while retrieving the comments";
  }
}
