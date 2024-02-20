"use server";
import db from "@/lib/prisma";
import { revalidatePath } from "next/cache";
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

  export const AddRecietCounter = async () => {
    let updatedReciet;
  
    // Check if a record exists in the counters table
    const existingRecord = await db.counters.findFirst();
  
  
    if (existingRecord) {
      // If a record exists, update the Reciet field by incrementing its value by 1
      await db.counters.update({
        where: { id: existingRecord.id },
        data: { recipt: existingRecord.recipt + 1 },
      });
  
      updatedReciet = existingRecord.recipt + 1;
    } else {
      // If a record doesn't exist, create a new record with the Reciet field set to 1
      const newRecord = await db.counters.create({ data: { recipt: 1 } });
  
      updatedReciet = newRecord.recipt;
    }
  
    // Use the updatedReciet variable to access the updated Reciet value
    return updatedReciet;
  };