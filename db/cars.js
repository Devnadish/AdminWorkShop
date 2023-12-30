"use server";
import db from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function AddNewCar(Car) {
  try {
    // Check if the CarNo already exists for another client
    const existingCar = await db.Car.findFirst({
      where: {
        CarNo: Car.CarNo,
      },
    });

    if (existingCar) {
      return "رقم اللوحة  يخص   لعميل اخر";
    }

    const clientName = await db.Client.findFirst({
      where: { clientIDs: Car.clientId },
    });
    const carDb = await db.Car.create({
      data: { ...Car, clientName: clientName.name },
    });
    return "تمت اضافة السيارة  للعميل بنجاح";
  } catch (error) {
    console.error(error);
    return "An error occurred while adding the car";
  }
}


export async function getCarInfo(Carid) {
  try {
    // Check if the Car already exists in OpenCards
    const isThereCard = await db.openFixingOrder.findMany({
      where: {
        selectedCar: Carid,
      },
    });
    if (isThereCard.length > 0) {
      return {
        msg: "السيارة موجود لها كرت مفتوح ",
        exisit: true,
        data: isThereCard,
      };
    }
    // Check if the CarNo already exists for another client
    const existingCar = await db.Car.findMany({
      where: {
        CarNo: Carid,
      },
    });
    if (existingCar.length === 0) {
      return { msg: "السيارة ليس لها كرت صيانة ", Carexisit: "not Exisit" };
    }

    return existingCar;
  } catch (error) {
    console.error(error);
    return "An error occurred while adding the car";
  }
}
