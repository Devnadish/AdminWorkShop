"use server";
import db from "@/lib/prisma";

export const summury = async () => {
  const getAggregateSum = async (model, where, field) => {
    const { _sum } = await db[model].aggregate({
      where,
      _sum: { [field]: true },
    });
    return _sum[field] || 0;
  };
  const incomeTotal = await getAggregateSum("fixingOrder", {}, "total");
  const reciptTotal = await getAggregateSum("RecietVoucher", {}, "amount");
  const fixPaymentTotal = await getAggregateSum(
    "PaymentVoucher",
    { paymentType: "fixing" },
    "amount"
  );
  const mangmentPaymentTotal = await getAggregateSum(
    "PaymentVoucher",
    { paymentType: "mangment" },
    "amount"
  );
  const clientBalance = incomeTotal - reciptTotal + fixPaymentTotal;

  const clientsData = await db.Client.findMany({
    select: { clientIDs: true, name: true },
  });
  const expensisData = await db.expensis.findMany({
    select: { expName: true, id: true },
  });

  const reciptTranaction = await reciptClientTransaction(clientsData);
  const PaymentTranaction = await paymentClientTransaction(clientsData);
  const mangmentPaymentTranaction = await mangmentPaymentransaction(
    expensisData
  );
  const fixCardInfo = await FixCard();
  const reciptSum=calculateSum(reciptTranaction,"amt")
  const fixPaymentSum=calculateSum(PaymentTranaction,"amt")
  const mangmentPaymentSum=calculateSum(mangmentPaymentTranaction,"amt")


const count_client=await db.client.count()
const count_comment=await db.comment.count()
const count_complain=await db.complain.count()
const count_suggestion=await db.suggestion.count()
const count_Car=await db.Car.count()
const count_fixingOrder=await db.fixingOrder.count()
const count_PaymentVoucher=await db.PaymentVoucher.count()
const count_RecietVoucher=await db.RecietVoucher.count()
 




  return {
    incomeTotal,
    reciptTotal,
    fixPaymentTotal,
    mangmentPaymentTotal,
    clientBalance,
    reciptTranaction,
    PaymentTranaction,
    mangmentPaymentTranaction,
    fixCardInfo,
    reciptSum,
    fixPaymentSum,
    mangmentPaymentSum,
    count_client,
    count_comment,
    count_complain,
    count_suggestion,
    count_Car,
    count_fixingOrder,
    count_PaymentVoucher,
    count_RecietVoucher,
  };
};

export async function reciptClientTransaction(clients) {
  const reciptArray = [];
  for (const client of clients) {
    const totalAmount = await db.recietVoucher.aggregate({
      where: { fromID: client.clientIDs },
      _sum: {
        amount: true,
      },
    });
    reciptArray.push({
      id: client.clientIDs,
      clientName: client.name,
      amt: totalAmount._sum.amount,
    });
  }
  return reciptArray;
}

export async function paymentClientTransaction(clients) {
  const fixPaymentArray = [];
  for (const client of clients) {
    const totalAmount = await db.PaymentVoucher.aggregate({
      where: { fromID: client.clientIDs, paymentType: "fixing" },
      _sum: {
        amount: true,
      },
    });

    fixPaymentArray.push({
      id: client.clientIDs,
      clientName: client.name,
      amt: totalAmount._sum.amount || 0,
    });
  }
  return fixPaymentArray;
}

export async function mangmentPaymentransaction(expData) {
  const fixPaymentArray = [];
  for (const exp of expData) {
    const totalAmount = await db.PaymentVoucher.aggregate({
      where: { collector: exp.expName, paymentType: "mangment" },
      _sum: {
        amount: true,
      },
    });

    if (totalAmount._sum.amount) {
      fixPaymentArray.push({
        id: exp.id,
        expName: exp.expName,
        amt: totalAmount._sum.amount || 0,
      });
    }
  }
  return fixPaymentArray;
}


export async function FixCard() {
  const closeCard = await getAggregatedData(true);
  const openCard = await getAggregatedData(false);

  return {
    closeTotal: closeCard._sum.total || 0,
    closeReceived: closeCard._sum.receive || 0,
    openTotal: openCard._sum.total || 0 ,
    openReceived: openCard._sum.receive || 0,
    openLen: openCard._count || 0,
    closeLen: closeCard._count || 0,
  };
}


async function getAggregatedData(isClosed) {
  return await db.fixingOrder.aggregate({
    where: { isClosed },
    _sum: {
      total: true,
      receive: true,
    },
    _count: true,
  });
}

// function calculateSum(array) {
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i].amt;
//   }
//   return sum;
// }

function calculateSum(array, propertyName) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i][propertyName];
  }
  return sum;
}