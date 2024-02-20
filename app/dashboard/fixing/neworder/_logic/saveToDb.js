import { newFixingOrder } from "@/db/fixing";
import { Notify } from "@/lib/notify";


export const FixOrder_DBaction = async (
  orderData,
  ClientID,
  total,
  serviceNote
) => {
  try {
    const AddFixing = await   newFixingOrder(orderData, serviceNote)
    if (AddFixing.exisit) {
      Notify(AddFixing.msg,"info")
      return "haveCard";
    } else {
      Notify(AddFixing.msg,"info")
      return "done";
    }
  } catch (error) {
    Notify(`An error occurred: ${error}`,"error")

  }
};
