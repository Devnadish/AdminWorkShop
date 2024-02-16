
'use server'

import { v2 as cloudinary } from 'cloudinary'
import { revalidatePath } from "next/cache";
import db from "@/lib/prisma";

const cloudinaryConfig = cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUDNAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
})

export async function getSignature() {
  const timestamp = Math.round(new Date().getTime() / 1000)

  const signature = cloudinary.utils.api_sign_request(
    { timestamp, folder: 'next' },
    cloudinaryConfig.api_secret
  )

  return { timestamp, signature }
}

export async function saveToDatabase({ public_id, version, signature,carId,cardId,description }) {
  // verify the data
  const expectedSignature = cloudinary.utils.api_sign_request(
    { public_id, version },
    cloudinaryConfig.api_secret
  )

  if (expectedSignature === signature) {
    try {
      const saveNote = await db.cardImage.create({
        data: { imageId: public_id, CardId:cardId, CarId: carId ,description },
      });
  } catch (error) {
      
      console.log(error)
  }
  revalidatePath("/dashboard/fixing/addimage");
  }
}
