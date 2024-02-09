"use server";
import db from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { AddRecietCounter } from "./reciet";
import { ShowCars } from "@/app/dashboard/finince/_component/ShowCars";
import { newNote } from "./fixNote";

export async function newFixingOrder(fixingData,serviceNote) {
  let addReciptVoucher;
  try {
    // check if the maintenance exisit>>>>>>>>
    const checkOpenOrder = await CheckOpenFixingOrder(fixingData.selectedCar);

    if (checkOpenOrder) {
      return {
        msg: "لا يمكن فتح كرت صيانة لسيارة مفتوح لها كرت مسبقا يجب اغلاق الكرت السابق..",
        exisit: true,
      };
    }
    // // end of check >>>>>>>>>>>>>>>>>

    const fixCounter = await AddFixingCounter();
    const data = { ...fixingData, fixingId: fixCounter };
    const Note={...serviceNote,CardId:fixCounter}
    
    const order = await db.fixingOrder.create({ data });
   
    if (Note.note) {
      const note = newNote(Note);
    
    }

    const addToCarsInClient = await addFixCardValue(
      order.clientId,
      order.selectedCar
    );
    const addToOpenOrder = await createOpenFixingOrder(data);

    if (fixingData.receive === 0) {
      addReciptVoucher = "لم يتم استلام دفعة من العميل";
    } else {
      addReciptVoucher = await createReciptVocher(data);
    }
    revalidatePath("/dashboard/fixing/displayorders");
    return {
      msg:
        fixingData.receive > 0
          ? `تم انشاء الكرت بنجاح وتم انشاء سند قبض  رقم  ${addReciptVoucher.voucher}  بقيمة  ${fixingData.receive} ريال سعودي`
          : `تم انشاء الكرت بنجاح لم يتم استلام دفعة من العميل`,

      cardNo: fixCounter,
      client: fixingData.clientName,
      total: fixingData.total,
      voucher:
        fixingData.receive !== 0
          ? addReciptVoucher.voucher
          : "لم يتم استلام دفعه من العميل ",
    };
  } catch (error) {
    console.error("Error creating fixing order:", error);
    throw new Error("Failed to create fixing order: " + error.message);
    return { err: error.message };
  }
}
async function CheckOpenFixingOrder(selectedCar) {
  // Check if the openFixingOrder already exists
  const existingOrder = await db.openFixingOrder.findUnique({
    where: { selectedCar },
  });

  // If the order already exists, return true
  if (existingOrder) {
    return true;
  }
}

export const AddFixingCounter = async () => {
  let fixCounter;
  // Check if a record exists in the counters table
  const existingRecord = await db.counters.findFirst();
  if (existingRecord) {
    // If a record exists, update the payment field by incrementing its value by 1
    await db.counters.update({
      where: { id: existingRecord.id },
      data: { fixing: existingRecord.fixing + 1 },
    });

    fixCounter = existingRecord.fixing + 1;
  } else {
    // If a record doesn't exist, create a new record with the payment field set to 1
    const newRecord = await db.counters.create({ data: { fixing: 1 } });

    fixCounter = newRecord.fixing;
  }

  // Use the fixCounter variable to access the updated payment value
  return fixCounter;
};

async function addFixCardValue(clientIdNo, newFixCardValue) {
  // Retrieve the client by ID
  const clientId = parseInt(clientIdNo);
  const client = await db.client.findUnique({
    where: { clientIDs: clientId },
  });

  // Check if the client exists
  if (client) {
    // Access the fixCard array
    const fixCardArray = client.fixCard || [];

    // Check if the newFixCardValue already exists in the fixCard array
    if (fixCardArray.includes(newFixCardValue)) {
      // Return a message to the UI indicating that the value already exists
      return "The value already exists in the fixCard array.";
    } else {
      // Push the new value to the fixCard array
      fixCardArray.push(newFixCardValue);

      // Update the client with the updated fixCard array
      await db.client.update({
        where: { clientIDs: clientId },
        data: { fixCard: { set: fixCardArray } },
      });

      // Return the updated fixCard array
      return "The value Added succsufly to cliet array..";
    }
  } else {
    // Return an empty array if the client doesn't exist
    return "I can Not Rach the Client Data..";
  }
}

async function createOpenFixingOrder(cardData) {
  // Check if the openFixingOrder already exists
  const selectedCar = cardData.selectedCar;
  const clientId = cardData.clientId;
  const clientName = cardData.clientName;
  const fixOrederId = cardData.fixingId;
  const fixOrederAmt = cardData.total;
  const data = { selectedCar, clientId, clientName, fixOrederId, fixOrederAmt };

  const existingOrder = await db.openFixingOrder.findUnique({
    where: { selectedCar },
  });

  // If the order already exists, return true
  if (existingOrder) {
    return true;
  }

  // Create a new openFixingOrder
  const newOrder = await db.openFixingOrder.create({ data });

  // If the new order is created successfully, return false
  if (newOrder) {
    return "Order Added To onProggress Data ..";
  }
}

export async function createReciptVocher(Voucherdata) {
  const detail = "   مقابل امر اصلاح رقم " + Voucherdata.fixingId;
  const fromID = Voucherdata.clientId;
  const fromName = Voucherdata.clientName;
  const amount = Voucherdata.receive;
  const fixingCode = Voucherdata.fixingId;
  try {
    const RecietCounter = await AddRecietCounter();
    // const data = { ...reciptData, recietId: RecietCounter };
    const data = {
      detail,
      fromID,
      fromName,
      amount,
      fixingCode,
      recietId: RecietCounter,
    };
    const order = await db.RecietVoucher.create({ data });
    return {
      msg: "Reciet Created Success WITH NO :" + RecietCounter,
      voucher: RecietCounter,
    };
  } catch (error) {
    console.error("Error creating fixing order:", error);
    throw new Error("Failed to create fixing order: " + error.message);
    return { err: error.message };
  }
}

export async function getAllFixOrder() {
  const existingOrder = await db.fixingOrder.findMany({});
  return existingOrder;
}
export async function FixOrderImage() {
  const existingOrder = await db.fixingOrder.findMany({});
  const openCards = [];
  for (const openCard of existingOrder) {
   

    const carImage = await db.cardImage.findMany({
      where: { CardId: openCard.selectedCar },
    });
    openCards.push({
      id:openCard.id,
      clientName: openCard.clientName,
      CarNo: openCard.selectedCar,
      coverImage:carImage[0]?.imageId || null,
      carImage: carImage,
    });
  }

// console.log(openCards)



  return openCards;
}


export async function getAllOpenCard() {
  const existingOrder = await db.openFixingOrder.findMany({});
  const openCards = [];
  for (const openCard of existingOrder) {
    const carClients = await db.fixingOrder.findFirst({
      where: { fixingId: openCard.fixOrederId },
    });

    const carNote = await db.cardNote.findMany({
      where: { CardId: openCard.fixOrederId },
    });
    openCards.push({
      cardId: openCard.fixOrederId,
      createData: openCard.createdDate,
      clientName: openCard.clientName,
      CarNo: openCard.selectedCar,
      service: carClients.detail,
      eng: carClients.engName,
      delevery: carClients.delivery,
      note: carNote,
    });
  }
  // console.log(openCards)

  return openCards;
}

export async function deleteFixOrder(id) {
  // check if close you can not delete
  //  check if there receipt update the recipet to zero  and save the previuse data in detail
  const deletedItem = await db.fixingOrder.delete({
    where: {
      id: id,
    },
  });
  revalidatePath("/dashboard/fixing/displayorders");
  return deletedItem;
}

export async function getAllOpenFixOrder() {
  const existingOrder = await db.openFixingOrder.findMany({});
  const ordersWithSums = [];

  for (const order of existingOrder) {
    const paymentSum = await db.paymentVoucher.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        fixingCode: order.fixOrederId,
      },
    });

    const recietSum = await db.recietVoucher.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        fixingCode: order.fixOrederId,
      },
    });
    const client = await db.Client.findMany({
      where: { clientIDs: order.clientId },
    });

    ordersWithSums.push({
      ...order,
      clientName: client[0]?.name,
      clientPhone: client[0]?.mobile,
      paymentSum: paymentSum._sum.amount,
      recietSum: recietSum._sum.amount,
    });
  }

  return ordersWithSums;
}
export async function deleteAndCloseFixOrder(id, fixOrederId, balance) {
   const deletedItem = await db.openFixingOrder.delete({
     where: {
       id: id,
     },
   });

  const fixingOrderId = await db.fixingOrder.findMany({
    where: { fixingId: fixOrederId },
  });
  const receiptCounter = await AddRecietCounter();

  const createRecipt = await db.RecietVoucher.create({
    data: {
      recietId: receiptCounter,
      detail: "اقفال  كرت الصيانة رقم : " + fixOrederId,
      fromID: fixingOrderId[0].clientId,
      fromName: fixingOrderId[0].clientName,
      amount: parseFloat(balance),
      fixingCode: fixOrederId,
    },
  });

  await db.fixingOrder.update({
    where: { fixingId: fixOrederId },
    data: { isClosed: true },
  });

  revalidatePath("/dashboard/fixing/closeorder");
  return deletedItem;
}

export async function getCarsFromOpenFixOrder() {
  const existingOrder = await db.openFixingOrder.findMany({});
  return existingOrder;
}

export async function getCardByCardID(cardId) {
  const existingOrder = await db.fixingOrder.findMany({
    where: { fixingId: cardId },
  });
  const recipt = await db.RecietVoucher.findMany({
    where: { fixingCode: cardId },
  });
  const payment = await db.PaymentVoucher.findMany({
    where: { fixingCode: cardId },
  });

  return {
    cardData: existingOrder[0],
    reciptData: recipt,
    paymentData: payment,
  };
}

export async function calculateTotalAmountForOrders(type) {
  const orders = await db.openFixingOrder.findMany({});

  // Fetch totalAmount and payment in separate queries
  const totalAmounts = await Promise.all(
    orders.map((order) =>
      db.recietVoucher.aggregate({
        _sum: {
          amount: true,
        },
        where: {
          fixingCode: order.fixOrederId,
        },
      })
    )
  );

  const payments = await Promise.all(
    orders.map((order) =>
      db.PaymentVoucher.aggregate({
        _sum: {
          amount: true,
        },
        where: {
          fixingCode: order.fixOrederId,
        },
      })
    )
  );

  const results = orders.map((order, index) => ({
    id:order.id,
    crdate:order.createdDate,
    clientId: order.clientId,
    clientName: order.clientName,
    FixNo: order.fixOrederId,
    selectedCar: order.selectedCar,
    fixOrederAmt: order.fixOrederAmt,
    totalRecipt: totalAmounts[index]._sum.amount || 0,
    payment: payments[index]._sum.amount || 0,
    balance:  (order.fixOrederAmt + totalAmounts[index]._sum.amount )-  payments[index]._sum.amount,
  }));

  // return results;
  return results.map((card)=>{return(<ShowCars key={card.id} card={card}  type={type}/>)});
}

export async function getClientInfo(id) {
  const order = await db.openFixingOrder.findMany({ where: { id: id } });
  const clients = await db.Client.findMany({
    where: { clientIDs: order[0].clientId },
  });

  return clients;
}

export async function ShowFixOrderImage(cardId) {
  
   

    const carImage = await db.cardImage.findMany({
      where: { CardId: cardId },
    });
   
    return carImage;
  }

