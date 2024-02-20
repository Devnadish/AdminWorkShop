"use server";
import db from "@/lib/prisma";
import { revalidatePath } from "next/cache";



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
