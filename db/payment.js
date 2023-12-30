"use server";
import db from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const savePaymentVoucher = async (formData) => {
  try {
    const newDocId = await AddPaymentCounter();
    const docDate = new Date(formData.docDate).toISOString();
    const data = { ...formData, paymentId: newDocId, docDate };
    const newVoucher = await db.PaymentVoucher.create({ data });
    revalidatePath("/dashboard");
        revalidatePath("/dashboard/fixing/closeorder");
    return newVoucher;

  } catch (error) {
    console.error("Error saving payment voucher:", error);
    throw error;
  }
};


export const AddPaymentCounter = async () => {
  let updatedPayment;

  // Check if a record exists in the counters table
  const existingRecord = await db.counters.findFirst();

  if (existingRecord) {
    // If a record exists, update the payment field by incrementing its value by 1
    await db.counters.update({
      where: { id: existingRecord.id },
      data: { payment: existingRecord.payment + 1 },
    });

    updatedPayment = existingRecord.payment + 1;
  } else {
    // If a record doesn't exist, create a new record with the payment field set to 1
    const newRecord = await db.counters.create({ data: { payment: 1 } });

    updatedPayment = newRecord.payment;
  }

  // Use the updatedPayment variable to access the updated payment value
  return updatedPayment;
};

export const AddFixingOrderCounter = async () => {
  let updatedPayment;

  // Check if a record exists in the counters table
  const existingRecord = await db.counters.findFirst();

  if (existingRecord) {
    // If a record exists, update the payment field by incrementing its value by 1
    await db.counters.update({
      where: { id: existingRecord.id },
      data: { fixing: existingRecord.fixing + 1 },
    });

    updatedPayment = existingRecord.fixing + 1;
  } else {
    // If a record doesn't exist, create a new record with the payment field set to 1
    const newRecord = await db.counters.create({ data: { fixing: 1 } });

    updatedPayment = newRecord.fixing;
  }

  // Use the updatedPayment variable to access the updated payment value
  return updatedPayment;
};

export async function getAllExpencies() {
  const Getexp = await db.Expence.findMany({});

  // Extract the expName property from each expense object
  const expNames = Getexp.map((exp) => exp.expName);

  return expNames;
}

export async function addCategory(categoryName) {
  // Check if the category already exists
  const existingCategory = await db.Expence.findMany({
    where: {
      expName: categoryName,
    },
  });

  // If the category exists, return a message
  if (existingCategory.length !== 0) {
    return "Category already exists";
  }

  // If the category doesn't exist, create a new category
  const newCategory = await db.Expence.create({
    data: {
      expName: categoryName,
    },
  });
  return "Category added successfully";
}



export async function updateClientPaymentBalance(Cid, amount) {
  const existingRecord = await db.client.findUnique({
    where: { clientIDs: Cid },
  });

  if (existingRecord === null) {
    // Handle the case where the record does not exist
    console.error("Record not found for clientIDs: ", Cid);
  } else {
    if (
      existingRecord.payment === null ||
      existingRecord.payment === undefined
    ) {
      // If payment field does not exist, set the payment to the provided amount
      await db.client.update({
        where: { clientIDs: Cid },
        data: { payment: amount },
      });
    } else {
      // If payment exists, add the provided amount to the existing payment
      const updatedAmount = existingRecord.payment + amount;
      await db.client.update({
        where: { clientIDs: Cid },
        data: { payment: updatedAmount },
      });
    }
  }
}



export async function getOpenCards() {
  const Getdata = await db.openFixingOrder.findMany({});
  return Getdata;
}

export async function getFixingOrder(id) {
  // get the fixing order data form open card table
  const Getdata = await db.openFixingOrder.findMany({
    where: { id: id },
  });
  // get the finince summry amout from fixcard table
  const GetFixOrderdata = await db.fixingOrder.findMany({
    where: { fixingId: Getdata[0].fixOrederId },
  });
  // get the finince total spend on this car  amout from payment table
  const totalSpent = await db.paymentVoucher.groupBy({
    by: ["fixingCode"],
    where: {
      fixingCode: { equals: Getdata[0].fixOrederId },
    },
    _sum: {
      amount: true,
    },
    select: {
      _sum: true,
    },
  });


  const totalRecipt = await db.RecietVoucher.groupBy({
    by: ["fixingCode"],
    where: {
      fixingCode: { equals: Getdata[0].fixOrederId },
    },
    _sum: {
      amount: true,
    },
    select: {
      _sum: true,
    },
  });


  return {
    clientId: Getdata[0]?.clientId,
    clientName: Getdata[0].clientName,
    fixingCode: Getdata[0]?.fixOrederId,
    fixOrdertotal: GetFixOrderdata[0]?.total,
    totalRecipt: totalRecipt[0]?._sum.amount,
    totalSpent: totalSpent[0]?._sum.amount,
  };
}
