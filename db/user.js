"use server";
import db from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function Adduser(userData) {
  // check if user phone exisit
  //  save user
}

export async function login(phoneData, password) {
  const phone = phoneData;
  const user = await db.user.findUnique({
    where: {
      phone,
    },
  });
  if (user.password !== password) {
    return null;
  }
  return user;
}

export async function registerUser(data) {

  const IsExisit = await db.user.findUnique({ where: { phone: data.phone } });
  if (IsExisit) {

    return { code: 400, msg: "رقم الجوال مستخدم مسبقا.." };
  }

  const user = await db.user.create({ data });

  return { code: 200, msg: "تم تاسيس المستخدم بنجاج" };
}

export async function logout() {
  // check if user in local stroge - remove
}

export async function isLogout() {
  // check if user in login if not redirect him to login Page
}

export async function isLogin() {
  // check if user in login if not redirect him to login Page
}
