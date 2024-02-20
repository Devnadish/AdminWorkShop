"use server";
import db from "@/lib/prisma";
import { revalidatePath } from "next/cache";



export async function getAllComments() {
  try {
    const comments = await db.comment.findMany({
      where: { isVisible: true },
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

export async function getAllCommentsForAdmin() {
  try {
    const comments = await db.comment.findMany({
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

export async function toggleVisible(id, isVisible) {
  try {
    const comment = await db.comment.findUnique({
      where: {
        id,
      },
    });

    if (!comment) {
      throw new Error("Comment not found");
    }

    await db.comment.update({
      where: {
        id,
      },
      data: {
        isVisible,
      },
    });
    revalidatePath("/");
    revalidatePath("/dashboard/clients/comment");
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}
