import { JustDate } from "@/lib/timeanddate"

export const ArrangeTranaction=(recipt,payment)=>{

  let tranaction=[]    
  recipt.map((el)=>{
    tranaction.push({
        type:"قبض",
        id:el.recietId,
        detail:el.detail,
        amount:el.amount,
        date:JustDate(el.createdAt)
    })

  })

  payment.map((el)=>{
    tranaction.push({
        type:"صرف",
        id:el.paymentId,
        amount:el.amount,
        detail:el.detail,
        date:JustDate(el.createdAt)
    })

  })
  tranaction.sort((a, b) => a.date - b.date);
  
  return tranaction
}