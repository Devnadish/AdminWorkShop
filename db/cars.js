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
      return { msg: "رقم اللوحة غير صحيح .. لا توجد بيانات برقم اللوحة  ", Carexisit: "not Exisit" };
    }
    // console.log(existingCar)
    console.log({existingCar});

    return existingCar;
  } catch (error) {
    console.error(error);
    return "An error occurred while adding the car";
  }
}


// -------------------

export async function getClientsCar() {
 const clientsWithCars = await db.car.findMany({ });

const clientCarsArray = {};

clientsWithCars.forEach(car => {
  if (!clientCarsArray[car.clientId]) {
    clientCarsArray[car.clientId] = [];
  }
  clientCarsArray[car.clientId].push({ CarNo: car.CarNo, carName: car.carName });
});

}


export async function getClientsWithCars() {
 const data = await db.car.findMany({
   orderBy: {
     clientId: "asc",
   },
 });
  return data

}

export async function getCarsData() {
  const cars = await db.car.findMany();
  const groupedCarsByClient = cars.reduce((result, car) => {
    (result[car.clientName] = result[car.clientName] || []).push(car);
    return result;
  }, {});

  // console.log(groupedCarsByClient);
  return groupedCarsByClient;
}
// ---- Voucher Control

export async function getCarInfoForVoucher(Carid) {
  try {
    // Check if the Car already exists in OpenCards
    const isThereCard = await db.openFixingOrder.findMany({
      where: {
        selectedCar: Carid,
      },
    });

    if (isThereCard.length === 0) {
      return {
        msg: "رقم اللوحة غير صحيح .. لا توجد بيانات برقم اللوحة  ",
        Carexisit: "not Exisit",
      };
    }

    const existingCar = await db.openFixingOrder.findMany({
      where: {
        selectedCar: Carid,
      },
    });

    // Get Balnce

const totalReicept = await db.recietVoucher.aggregate({
  _sum: {
    amount: true,
  },
  where: {
    fixingCode: existingCar[0].fixOrederId, // Add condition to match the record in openFixingOrder with RecietVoucher
  },
});

const totalPayment = await db.PaymentVoucher.aggregate({
  _sum: {
    amount: true,
  },
  where: {
    fixingCode: existingCar[0].fixOrederId, // Add condition to match the record in openFixingOrder with RecietVoucher
  },
});
console.log(totalPayment);
    return {
      carInfo: existingCar[0],
      recipt: totalReicept._sum.amount || 0,
      payment: totalPayment._sum.amount || 0,
    };
  } catch (error) {
    console.error(error);
    return "An error occurred while adding the car";
  }
}
