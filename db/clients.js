"use server";
import db from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function addClient(client) {
  try {
    const check = await checkClientExists(client.mobile);

    if (check) {
      return {
        msg: `العميل موجود مسبقا باسم   ${check.cName} ورقم ${check.cId}`,
        client: check.client,
        check,
      };
    }

    const ClientCounter = await AddClientCounter();
    const data = { ...client, clientIDs: ClientCounter };
    const result = await db.client.create({ data });
    revalidatePath("/dashboard/clients/display");
    revalidatePath("/dashboard/clients/addcar");

    return {
      msg: "تم تأسيس كرت للعميل بنجاح ",
      clientId: ClientCounter,
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
  const names = await db.client.findMany({ select: { name: true, clientIDs :true} });
  return names;
}

export async function getAllClients() {
  try {
    const clients = await db.client.findMany({
      select: { id: true, name: true, clientIDs: true, payment: true, recipts:true },
    });
    const clientsWithCars = await Promise.all(
      clients.map(async (client) => {
        const carsData = await db.Car.findMany({
          where: {
            clientId: client.clientIDs,
          },
          select: { id: true, CarNo: true, carName: true },
        });
        // revalidatePath("/dashboard/clients/display");

        return { ...client, carsData };
      })
    );
    return clientsWithCars;
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

export async function gerClientByIdForFixing(Cid) {
  try {
    // const clientId = 4
    const existingClient = await db.client.findUnique({
      where: {
        clientIDs: parseInt(Cid),
      },
    });
    if (!existingClient) {
      return { msg: "العميل غير موجود", stuts: "NotExisit" };
    }
    const existingCars = await db.Car.findMany({
      where: {
        clientId: parseInt(Cid),
      },
    });

    return { client: existingClient, cars: existingCars };
  } catch (error) {
    console.error(error);
    return { msg: "حدث خطأ أثناء استرجاع المعلومات" };
  }
}

export async function checkClientByIDExists(Cid) {
  const clientId = parseInt(Cid); // Convert string to integer
  const existingClient = await db.client.findMany({
    where: {
      clientIDs: clientId,
    },
  });

const getCars = await db.car.findMany({
  where: {
    clientId: clientId,
  },
});

  if (existingClient[0]) {
    return {
      name: existingClient[0].name,
      id: existingClient[0].id,
      cars: getCars,
    };
  }
}
// Show all clients in the database where the user balance =0
export async function getZeroBalance() {
  const result = await db.client.findMany({ where: { balance: 0 } });
  return result;
}

export async function getClientsWithPositiveBalance() {
  const result = await db.client.findMany({
    where: {
      balance: {
        gt: 0,
      },
    },
  });
  return result;
}

export async function getClientsWithgetNegativeBalance() {
  const result = await db.client.findMany({
    where: {
      balance: {
        lt: 0,
      },
    },
  });
  return result;
}

export const AddClientCounter = async () => {
  let clientCounter;
  // Check if a record exists in the counters table
  const existingRecord = await db.counters.findFirst();
  if (existingRecord) {
    // If a record exists, update the payment field by incrementing its value by 1
    await db.counters.update({
      where: { id: existingRecord.id },
      data: { Clients: existingRecord.Clients + 1 },
    });

    clientCounter = existingRecord.Clients + 1;
  } else {
    // If a record doesn't exist, create a new record with the payment field set to 1
    const newRecord = await db.counters.create({ data: { Clients: 1 } });

    clientCounter = newRecord.Clients;
  }

  // Use the clientCounter variable to access the updated payment value
  return clientCounter;
};



export async function groupByClientId() {
  try {
    const groupedClients = await db.openFixingOrder.groupBy({
      by: ["clientId"],
      _count: {
        clientId: true,
      },
    });

    const clientFixOrders = await Promise.all(
      groupedClients.map(async (client) => {
        const { clientId } = client;

        const fixOrders = await db.openFixingOrder.findMany({
          where: {
            clientId,
          },
          select: {
            fixOrederId: true,
            clientName: true,
          },
        });

        return {
          clientId,
          clientName: fixOrders[0].clientName,
          fixOrderIds: fixOrders.map((order) => order.fixOrederId),
        };
      })
    );

    return clientFixOrders;
  } catch (error) {
    console.error(error);
    throw error;
  } finally {
    await db.$disconnect();
  }
}



export async function displayClients() {
  try {
    const clients = await db.client.findMany({ });
    // revalidatePath("/dashboard/clients/new");
    return clients;
  } catch (error) {
    console.error(error);
    return "An error occurred while retrieving clients and their cars";
  }
}


export async function deleteClient(id) {

// check if clent has fix card

  // const clientFixOrders = await db.openFixingOrder.findMany({
  //   where: {
  //     clientId: id,
  //   },
  // });


  const deletedItem = await db.Client.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/dashboard/clients/new");
  return deletedItem;

}


export async function getClientTransactions(clientId) {
  const paymentTransactions = await db.PaymentVoucher.findMany({
    where: { fromID: clientId },
  });
  const receiptTransactions = await db.RecietVoucher.findMany({
    where: { fromID: clientId },
  });
  return { paymentTransactions, receiptTransactions };
}


export async function getGroupClientWithTransactions() {


     const groupedClients = await db.RecietVoucher.groupBy({
       by: ["fromID", "fromName"],
     });

console.log(groupedClients);
  return  groupedClients ;
}
