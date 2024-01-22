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
      return {msg:"رقم اللوحة  يخص   لعميل اخر",code:400};
    }

    const clientName = await db.Client.findFirst({
      where: { clientIDs: Car.clientId },
    });
    const carDb = await db.Car.create({
      data: { ...Car, clientName: clientName.name },
    });




    revalidatePath("/dashboard/clients/new");
    revalidatePath("/dashboard/clients/addcar") 

    return {msg:"تمت اضافة السيارة  للعميل بنجاح",code:200};
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
  return groupedCarsByClient;
}

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

export async function getCarData() {
  try {
    const data = await db.car.findMany({
      orderBy: {
        clientName: 'asc', // Replace 'asc' with 'desc' for descending order
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}


export async function getCar(id) {
  const CarData = await db.Car.findFirst({
    where: {
      id: id,
    },
  });
  return CarData;
}
export async function deleteCar(id) {
  
  const checkData = await db.Car.findFirst({
    where: {
      id: id,
    },
  });
  const CheckFixOrder=await db.fixingOrder.findFirst({
    where: {
      selectedCar: checkData.CarNo,
    },
  });

  console.log(CheckFixOrder)
  if(CheckFixOrder){return {code:400 ,msg:"يوجد حركة سابقة للسيارة لايمكن الحذف  ..  راجع  الادارة"}}


  
  
  const CarData = await db.Car.delete({
    where: {
      id: id,
    },
  });
  
  revalidatePath("dashboard/clients/addcar")
  return  {code:200 ,msg:"تم حذف الملف بنجاح .."}
}



export async function updateCar(id, formData) {
  const data = {
    carName: formData.carName,
    Model: formData.Model,
    BodyNo: formData.BodyNo,
  };
  
  try {
    const updatedCar = await db.car.update({
      where: {
        id: id,
      },
      data: data,
    });
    revalidatePath("dashboard/clients/addcar")
    return  {code:200 ,msg:"تم تعديل الملف بنجاح .."}
  } catch (error) {
    console.error("Error updating client:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
}
