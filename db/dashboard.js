"use server";
import db from "@/lib/prisma";

export async function SumsOfFixingCard(isClosed) {
  try {
    const filteredOrders = await db.fixingOrder.findMany({
      where: {
        isClosed: isClosed,
      },
    });

    const totalSum = filteredOrders.reduce(
      (sum, order) => sum + order.total,
      0
    );
    const receiveSum = filteredOrders.reduce(
      (sum, order) => sum + order.receive,
      0
    );
    const remaining = totalSum - receiveSum;
    const recordCount = filteredOrders.length;
    return { totalSum, receiveSum, remaining, recordCount };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function calculateClientSums() {
  try {
    const paymentVouchersByClientId = await db.paymentVoucher.groupBy({
      by: ["fromID", "fromName"],
      where: {
        fromID: { gt: 0 },
        paymentType: { equals: "fixing" },
      },
      _sum: {
        amount: true,
      },
      select: {
        fromID: true,
        fromName: true,
        _sum: true,
      },
    });

    // Extract "amount" from "_sum" and restructure results
    const formattedResults = paymentVouchersByClientId.map((result) => ({
      fromID: result.fromID,
      fromName: result.fromName,
      amount: result._sum.amount, // Extract "amount"
    }));

    return formattedResults;
  } catch (error) {
    console.error(error);
    throw error;
  }
}


export async function calculateClientRecipts() {
  try {
    const paymentVouchersByClientId = await db.RecietVoucher.groupBy({
      by: ["fromID", "fromName"],
      where: {
        fromID: { gt: 0 },
      },
      _sum: {
        amount: true,
      },
      select: {
        fromID: true,
        fromName: true,
        _sum: true,
      },
    });

    const formattedResults = paymentVouchersByClientId.map((result) => ({
      fromID: result.fromID,
      fromName: result.fromName,
      amount: result._sum.amount, // Extract "amount"
    }));

    return formattedResults;
  } catch (error) {
    console.error(error);
    throw error;
  }
}


export async function recietVoucher() {
  try {
    const totalAmount = await db.recietVoucher.aggregate({
      _sum: {
        amount: true,
      },
    });
    return totalAmount._sum.amount;
  } catch (error) {
    console.error(error);
    throw error;
  }
}


export async function mangmentExpenses() {
   try {
     const totalAmount = await db.PaymentVoucher.aggregate({
       where: { paymentType: "mangment" },
       _sum: {
         amount: true,
       },
     });
     return totalAmount._sum.amount;
   } catch (error) {
     console.error(error);
     throw error;
   }
}

export async function fixingExpenses() {
  const totalAmount = await db.PaymentVoucher.aggregate({
    where: { paymentType: "fixing" },
    _sum: {
      amount: true,
    },
  });
  return totalAmount._sum.amount;
}

export async function mangmentExpensesDetails() {

try {
    const paymentVouchersByClientId = await db.paymentVoucher.groupBy({
      by: ["collector"],
      where: {
        paymentType: { equals: "mangment" },
      },
      _sum: {
        amount: true,
      },
      select: {
        collector: true,
        _sum: true,
      },

    });

    // Extract "amount" from "_sum" and restructure results
    const formattedResults = paymentVouchersByClientId.map((result) => ({
      collector: result.collector,
      amount: result._sum.amount, // Extract "amount"
    }));

    return formattedResults;
} catch (error) {
   console.error(error);
   throw error;

}
}

export async function getRecordCounts() {
try {
    const visibleCommentsCount = await db.comment.count({
      where: { isVisible: true },
    });
    const pendingCommentsCount = await db.comment.count({
      where: { isVisible: false },
    });
    const visibleSuggestionsCount = await db.suggestion.count({
      where: { isVisible: true },
    });
    const pendingSuggestionsCount = await db.suggestion.count({
      where: { isVisible: false },
    });
    const visibleComplainsCount = await db.complain.count({
      where: { isVisible: true },
    });
    const pendingComplainsCount = await db.complain.count({
      where: { isVisible: false },
    });

    return {
      visibleComments: visibleCommentsCount,
      pendingComments: pendingCommentsCount,
      visibleSuggestions: visibleSuggestionsCount,
      pendingSuggestions: pendingSuggestionsCount,
      visibleComplains: visibleComplainsCount,
      pendingComplains: pendingComplainsCount,
    };
} catch (error) {
   console.error(error);
   throw error;

}
}

export async function generalInfo() {
 try {
   const ClientRecord = await db.Client.count({});
   const CartRecord = await db.Car.count({});
   const fixingOrdertRecord = await db.fixingOrder.count({});
   const openFixingOrdertRecord = await db.openFixingOrder.count({});
   const PaymentVouchertRecord = await db.PaymentVoucher.count({});
   const RecietVouchertRecord = await db.RecietVoucher.count({});

   return {
     ClientRecord,
     CartRecord,
     fixingOrdertRecord,
     openFixingOrdertRecord,
     PaymentVouchertRecord,
     RecietVouchertRecord,
   };
 } catch (error) {
   console.error(error);
   throw error;

 }
}
