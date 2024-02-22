"use server";
import db from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { ShowCars } from "@/app/dashboard/finince/_component/ShowCars";
import { newNote } from "./fixNote";
import { AddFixingCounter, AddRecietCounter } from "./counters";
import { createReciptVocherForFixOrder, updateClientReceiptBalance } from "./reciet";
import { CheckOpenFixingOrder, createOpenFixingOrder } from "./openFixOrders";


export async function newFixingOrder(fixingData, serviceNote) {
  try {
    const checkOpenOrder = await CheckOpenFixingOrder(fixingData.selectedCar);
    
    if (checkOpenOrder) {
      return { msg: "Cannot open a maintenance card for a car that already has an open card. Please close the previous card." };
    }

    const fixCounter = await AddFixingCounter();
    const data = { ...fixingData, fixingId: fixCounter };
    const Note = { ...serviceNote, CardId: fixCounter };
    
    const order = await db.fixingOrder.create({ data });
    const note = Note.note && newNote(Note);
    const addToOpenOrder = await createOpenFixingOrder(data);
    
    if (fixingData.receive === 0) {
      return { msg: "No payment received from the client" };
    }
    await createReciptVocherForFixOrder(data);
    await updateClientReceiptBalance(parseInt(fixingData.clientId), parseInt(fixingData.receive));
    
    revalidatePath("/dashboard/fixing/displayorders");
    
    return { msg: "Receipt voucher created successfully" };
  } catch (error) {
    console.error("Error creating fixing order:", error);
    throw new Error("Failed to create fixing order: " + error.message);
  }
}


export async function getFixCardById(id) {
  const fixCard=await db.fixingOrder.findFirst({where:{fixingId:id}})
  return fixCard;
}































// export async function newFixingOrder(fixingData, serviceNote) {
//   try {
//     // check if the maintenance exisit>>>>>>>>
//     const checkOpenOrder = await CheckOpenFixingOrder(fixingData.selectedCar);
//     if (checkOpenOrder) {
//       return {
//         msg: "لا يمكن فتح كرت صيانة لسيارة مفتوح لها كرت مسبقا يجب اغلاق الكرت السابق..",
//         exisit: true,
//       };
//     }
//     // // end of check >>>>>>>>>>>>>>>>>

//     const fixCounter = await AddFixingCounter();
//     const data = { ...fixingData, fixingId: fixCounter };
//     const Note = { ...serviceNote, CardId: fixCounter };
//     const order = await db.fixingOrder.create({ data });
//     const note = Note.note && newNote(Note);
//     const addToOpenOrder = await createOpenFixingOrder(data);
// let msg;
//     if (fixingData.receive === 0) {
//       msg = "لم يتم استلام دفعة من العميل";
//       return { msg: msg };
//     }
//     const addReciptVoucher = await createReciptVocherForFixOrder(data);
//     const UpdateBalance = await updateClientReceiptBalance(
//       parseInt(fixingData.clientId),
//       parseInt(fixingData.receive)
//     );
//     msg = "تم انشاء سند القبض";

//     revalidatePath("/dashboard/fixing/displayorders");
//     return { msg: msg };
//   } catch (error) {
//     console.error("Error creating fixing order:", error);
//     throw new Error("Failed to create fixing order: " + error.message);
   
//   }
// }

// -------------------------------------




export async function getAllFixOrder() {
  const existingOrder = await db.fixingOrder.findMany({});
  return existingOrder;
}
export async function FixOrderImage() {
  const existingOrder = await db.fixingOrder.findMany({});
  const openCards = [];
  for (const openCard of existingOrder) {
    const carImage = await db.cardImage.findMany({
      where: { CarId: openCard.selectedCar },
    });
    openCards.push({
      id: openCard.id,
      clientName: openCard.clientName,
      CarNo: openCard.selectedCar,
      coverImage: carImage[0]?.imageId || null,
      carImage: carImage,
    });
  }

  return openCards;
}

// export async function getAllOpenCard() {
//   const existingOrder = await db.openFixingOrder.findMany({});
//   const openCards = [];
//   for (const openCard of existingOrder) {
//     const carClients = await db.fixingOrder.findFirst({
//       where: { fixingId: openCard.fixOrederId },
//     });

//     const carNote = await db.cardNote.findMany({
//       where: { CardId: openCard.fixOrederId },
//     });
//     openCards.push({
//       cardId: openCard.fixOrederId,
//       clientName: openCard.clientName,
//       deleverTime: openCard.deliveryTime,
//       reminder: openCard.reminder,
//       CarNo: openCard.selectedCar,
//       createData: openCard.createdDate,
//       service: carClients.detail,
//       eng: carClients.engName,
//       delevery: carClients.delivery,

//       note: carNote,
//     });
//   }

//   return openCards;
// }



export async function getAllOpenCard() {
  const existingOrders = await db.openFixingOrder.findMany({
    select: {
      fixOrederId: true,
      clientName: true,
      clientId:true,
      deliveryTime: true,
      reminder: true,
      selectedCar: true,
      createdDate: true,
    },
  });

  const openCards = [];

  const fixingIds = existingOrders.map(order => order.fixOrederId);

  const [carClients, carNotes] = await Promise.all([
    db.fixingOrder.findMany({
      where: { fixingId: { in: fixingIds } },
      select: {
        fixingId: true,
        detail: true,
        engName: true,
        delivery: true,
      },
    }),
    db.cardNote.findMany({
      where: { CardId: { in: fixingIds } },
    }),
  ]);

  const carClientsMap = carClients.reduce((acc, client) => {
    acc[client.fixingId] = client;
    return acc;
  }, {});

  const carNotesMap = carNotes.reduce((acc, note) => {
    if (!acc[note.CardId]) {
      acc[note.CardId] = [];
    }
    acc[note.CardId].push(note);
    return acc;
  }, {});

  for (const openCard of existingOrders) {
    const carClient = carClientsMap[openCard.fixOrederId];
    const cardNotes = carNotesMap[openCard.fixOrederId] || [];

    openCards.push({
      cardId: openCard.fixOrederId,
      clientId:openCard.clientId,
      clientName: openCard.clientName,
      deleverTime: openCard.deliveryTime,
      reminder: openCard.reminder,
      CarNo: openCard.selectedCar,
      createData: openCard.createdDate,
      service: carClient ? carClient.detail : null,
      eng: carClient ? carClient.engName : null,
      delevery: carClient ? carClient.delivery : null,
      note: cardNotes,
    });
  }

  return openCards;
}


export async function getAllOpenFixOrderForInvoice(fliter) {
  const existingOrder = await db.fixingOrder.findMany({ where: fliter });
  const ordersWithSums = [];

  for (const order of existingOrder) {
    const paymentSum = await db.paymentVoucher.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        fixingCode: order.fixingId,
      },
    });

    const recietSum = await db.recietVoucher.aggregate({
      _sum: {
        amount: true,
      },
      where: {
        fixingCode: order.fixingId,
      },
    });
    const client = await db.Client.findMany({
      where: { clientIDs: order.clientId },
    });

    ordersWithSums.push({
      ...order,
      // clientName: order.clientName,
      clientName: client[0]?.name,
      clientPhone: client[0]?.mobile,
      paymentSum: paymentSum._sum.amount,
      recietSum: recietSum._sum.amount,
    });
  }
  revalidatePath("/dashboard/finince/invoice");
  return ordersWithSums;
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
    id: order.id,
    crdate: order.createdDate,
    clientId: order.clientId,
    clientName: order.clientName,
    FixNo: order.fixOrederId,
    selectedCar: order.selectedCar,
    fixOrederAmt: order.fixOrederAmt,
    totalRecipt: totalAmounts[index]._sum.amount || 0,
    payment: payments[index]._sum.amount || 0,
    balance:
      order.fixOrederAmt -
      totalAmounts[index]._sum.amount +
      payments[index]._sum.amount,
  }));

  // return results;
  return results.map((card) => {
    return <ShowCars key={card.id} card={card} type={type} />;
  });
}

export async function getClientInfo(id) {
  const order = await db.openFixingOrder.findMany({ where: { id: id } });
  const clients = await db.Client.findMany({
    where: { clientIDs: order[0].clientId },
  });

  return clients;
}

export async function ShowFixOrderImage(carId) {
  const carImage = await db.cardImage.findMany({
    where: { CarId: carId },
  });

  return carImage;
}
