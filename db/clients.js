"use server";
import ShowTransaction from "@/app/dashboard/clients/statment/_component/ShowTransaction";
// import ShowClientCard from "@/app/_pagecomponent/clients/display/ShowClientCard";
import db from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { AddClientCounter } from "./counters";

export async function addClient(client) {
  try {
    const check = await checkClientExists(client.mobile);
    if (check) {
      return {
        msg: `العميل موجود مسبقا باسم   ${check.cName} ورقم ${check.cId}`,
        client: check.client,
        check,
        code: 401,
      };
    }

    const existingCar = await db.Car.findFirst({
      where: {
        CarNo: client.CarNo,
      },
    });

    if (existingCar) {
      return { msg: "رقم اللوحة  يخص   لعميل اخر", code: 403 };
    }

    const ClientCounter = await AddClientCounter();
    const data = {
      name: client.name,
      mobile: client.mobile,
      email: client.email,
      clientIDs: ClientCounter,
    };
    const Cardata = {
      CarNo: client.CarNo,
      carName: client.CarName,
      clientName: client.name,
      clientId: ClientCounter,
      MasterCar: true,
    };

    const result = await db.client.create({ data });
    const carDb = await db.Car.create({ data: Cardata });

    revalidatePath("/dashboard/clients/addcar");
    revalidatePath("/dashboard/clients/statment");

    return {
      msg: "تم تأسيس كرت للعميل بنجاح ",
      clientId: ClientCounter,
      code: 200,
    };
  } catch (error) {
    if (
      error.code === "P2002" &&
      error.meta?.target?.includes("Car_CarNo_key")
    ) {
      return {
        msg: "رقم اللوحة  مسجلة باسم عميل اخر.",
      };
    }
    console.error(error);
    // Handle error appropriately
  }
}

export async function fetchClientNames() {
  const names = await db.client.findMany({
    select: { name: true, clientIDs: true },
  });
  return names;
}


export async function CarListForFixCard() {
  try {
    const clients = await db.client.findMany({
      select: { id: true, name: true, clientIDs: true },
    });
  


    const clientCarsArray = [];

    for (const client of clients) {

      const cars = await db.car.findMany({
        where: { clientId: client.clientIDs },
        select: {
          id: true, // Include the 'id' field
          clientId: true, // Include the 'make' field
          CarNo: true, // Include the 'model' field
          carName: true, // Include the 'year' field
          // Add more fields as needed
        },
      });


      clientCarsArray.push({
        id:client.id,
        clientName: client.name,
        CarCount: cars.length,
       cars:cars
        // indexInCarClients: index,
      });
    }

    
    // const fixcars = await db.openFixingOrder.findMany({});

    // // Compare two arrays and remove the cars where fixcars.selectedCar = cars.CarNo
    // const filteredCars = cars.filter(
    //   (car) => !fixcars.some((fixcar) => fixcar.selectedCar === car.CarNo)
    // );

    // Group the new array with cars.clientId and return each client with his cars
    // const groupedByClientId = filteredCars.reduce((acc, car) => {
    //   const { clientId, clientName } = car; // Assuming the client information is present in the car object
    //   if (!acc[clientId]) {
    //     acc[clientId] = { clientId, clientName, cars: [] };
    //   }
    //   acc[clientId].cars.push(car);
    //   return acc;
    // }, {});

    // return Object.values(groupedByClientId);
    return clientCarsArray
  } catch (error) {
    console.error(error);
    return "An error occurred while retrieving clients and their cars";
  }
}

export async function checkClientExists(phone) {
  const existingClient = await db.client.findUnique({
    where: {
      mobile: phone,
    },
  });

  if (existingClient) {
    return { cName: existingClient.name, cId: existingClient.clientIDs };
  }
}

export async function displayClients() {
  try {
    const clientsData = await db.client.findMany({});

    const clientCarsArray = [];

    for (const car of clientsData) {
      const carClients = await db.Car.findMany({
        where: { clientId: car.clientIDs },
      });

      carClients.forEach((clientCar) => {
        clientCarsArray.push({
          clientName: car.name,
          mobile: car.mobile,
          email: car.email,
          CarCount: carClients.length,
          CarNo: clientCar.CarNo,
          carName: clientCar.carName,
          id: car.clientIDs,
          // indexInCarClients: index,
        });
      });
    }

    const uniqueClientCarsArray = clientCarsArray.reduce((unique, o) => {
      if (!unique.some((obj) => obj.mobile === o.mobile)) {
        unique.push(o);
      }
      return unique;
    }, []);

    return uniqueClientCarsArray;
  } catch (error) {
    console.error(error);
    return "An error occurred while retrieving clients and their cars";
  }
}

export async function getClient(id) {
  const ClientData = await db.Client.findFirst({
    where: {
      clientIDs: id,
    },
  });
  revalidatePath("/dashboard/clients/new");
  return ClientData;
}

export async function deleteClient(id) {
  // check if clent has fix card

  const clientFixOrders = await db.openFixingOrder.findFirst({
    where: {
      clientId: id,
    },
  });
  if (clientFixOrders) {
    return {
      code: 400,
      msg: "يوجد حركة سابقة للعميل لايمكن الحذف  ..  راجع  الادارة",
    };
  }

  const deletedItem = await db.Client.delete({
    where: {
      clientIDs: id,
    },
  });
  revalidatePath("/dashboard/clients/new");
  return { code: 200, msg: "تم مسح ملف العميل بنجاح .." };
}

export async function updateClient(id, formData) {
  const data = {
    name: formData.get("name"),
    mobile: formData.get("mobile"),
    email: formData.get("email"),
  };

  const getClient = await db.Client.findFirst({
    where: {
      clientIDs: id,
    },
  });

  // Check Phone
  if (getClient.mobile !== data.mobile) {
    const checkMobile = await db.Client.findFirst({
      where: {
        mobile: data.mobile,
      },
    });
    if (checkMobile) {
      return {
        code: 400,
        msg: "لايمكن التعديل .. الرقم مسجل باسم : " + checkMobile.name,
      };
    }
  }
  // Check email
  if (getClient.email !== data.email) {
    const checkMobile = await db.Client.findFirst({
      where: {
        email: data.email,
      },
    });
    if (checkMobile) {
      return {
        code: 400,
        msg: "لايمكن التعديل .. الايميل  مسجل باسم : " + checkMobile.name,
      };
    }
  }

  try {
    const updatedClient = await db.Client.update({
      where: {
        clientIDs: id,
      },
      data: data,
    });
    revalidatePath("/dashboard/clients/new");
    revalidatePath("/dashboard/fixing/neworder");
    return updatedClient;
  } catch (error) {
    console.error("Error updating client:", error);
    throw error; // Re-throw the error to be handled by the caller
  }
}

export async function getClientTransactions(clientId) {
  const checkClient = await db.Client.findMany({
    where: { clientIDs: clientId },
  });
  if (checkClient.length === 0) {
    return { msg: "العميل  غير موجود في  ملف العملا ء", code: 400 };
  }

  const FixOrderTransactions = await db.fixingOrder.findMany({
    where: { clientId: clientId },
  });

  const reciptTranaction = [];
  const paymentTranaction = [];

  for (const trans of FixOrderTransactions) {
    const ReciptData = await db.RecietVoucher.findMany({
      where: { fixingCode: trans.fixingId },
    });

    ReciptData.forEach((obj) => {
      obj.type = "قبض";
    });

    const PaymentData = await db.PaymentVoucher.findMany({
      where: { fixingCode: trans.fixingId },
    });

    PaymentData.forEach((obj) => {
      obj.type = "صرف";
    });

    reciptTranaction.push({
      fixCode: trans.fixingId,
      fixAmt: trans.total,
      reciptData: ReciptData,
    });
    paymentTranaction.push({
      fixCode: trans.fixingId,
      fixAmt: trans.total,
      paymentData: PaymentData,
    });
  }
  const voucehrData = [
    ...reciptTranaction[0].reciptData,
    ...paymentTranaction[0].paymentData,
  ];

  return FixOrderTransactions.map((fix) => {
    return (
      <ShowTransaction
        key={fix.fixingId}
        fixData={fix}
        Client={fix.clientName}
        fixingId={fix.fixingId}
        selectedCar={fix.selectedCar}
        total={fix.total}
        receive={fix.receive}
        detail={fix.detail}
        isClosed={fix.isClosed}
        voucehrData={voucehrData}
      />
    );
  });
}

export async function getGroupClientWithTransactions() {
  const groupedClients = await db.RecietVoucher.groupBy({
    by: ["fromID", "fromName"],
  });

  const newData = [];
  await Promise.all(
    groupedClients.map(async (client, idx) => {
      const FixAmt = await db.fixingOrder.findMany({
        where: { clientId: client.fromID },
      });
      const sumFix = FixAmt.reduce((total, item) => total + item.total, 0);

      const ReciptAmt = await db.RecietVoucher.findMany({
        where: { fromID: client.fromID },
      });
      const sumRecipt = ReciptAmt.reduce(
        (total, item) => total + item.amount,
        0
      );

      const PaymentAmt = await db.PaymentVoucher.findMany({
        where: { fromID: client.fromID },
      });
      const sumPayment = PaymentAmt.reduce(
        (total, item) => total + item.amount,
        0
      );
      newData.push({
        fromId: client.fromID,
        fromName: client.fromName,
        sumFix: sumFix,
        sumRecipt: sumRecipt,
        sumPayment: sumPayment,
      });
    })
  );

  return newData;
}

export async function getClientById(id) {
  const client=await db.client.findFirst({where:{clientIDs:id}})
  return client;
}
