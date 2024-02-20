"use server";
import db from "@/lib/prisma";
import { revalidatePath } from "next/cache";


export async function CheckOpenFixingOrder(selectedCar) {
    // Check if the openFixingOrder already exists
    const existingOrder = await db.openFixingOrder.findUnique({
      where: { selectedCar },
    });
  
    // If the order already exists, return true
    if (existingOrder) {
      return true;
    }
  }
  
  export async function createOpenFixingOrder(cardData) {
    // Check if the openFixingOrder already exists
    const reminder = cardData.reminder;
    const deliveryTime = cardData.deliveryTime;
  
    const selectedCar = cardData.selectedCar;
    const clientId = cardData.clientId;
    const clientName = cardData.clientName;
    const fixOrederId = cardData.fixingId;
    const fixOrederAmt = cardData.total;
    const data = {
      selectedCar,
      clientId,
      clientName,
      fixOrederId,
      fixOrederAmt,
      deliveryTime,
      reminder,
    };
  
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