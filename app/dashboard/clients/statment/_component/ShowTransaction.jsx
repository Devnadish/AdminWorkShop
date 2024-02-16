import React from "react";
import { getTimeElapsed } from "@/lib/timeanddate";
import { CardInfo } from "./CardInfo";
import { Finince } from "./Finince";

function ShowTransaction({
  fixingId,
  selectedCar,
  total,
  receive,
  detail,
  isClosed,
  voucehrData,
  fixData,
  Client,
}) {
  let sumOfReceipts = 0;
  let sumOfExpenses = 0;
  const CardData = { fixingId, selectedCar, total, receive, detail, isClosed };

  voucehrData.forEach((obj) => {
    if (obj.type === "قبض") {
      sumOfReceipts += obj.amount;
    } else if (obj.type === "صرف") {
      sumOfExpenses += obj.amount;
    }
  });

  return (
    <div className="relative  flex flex-col items-center   py-1 rounded w-full   min-w-[350px] overflow-auto  ">
      <div className="flex flex-col items-center justify-between md:flex-row w-full gap-4">
      <CardInfo fixingId={fixingId}  selectedCar={selectedCar}  isClosed={selectedCar}/>
      <Finince total={total}  sumOfReceipts={sumOfReceipts}  sumOfExpenses={sumOfExpenses}  fixData={fixData} />
      </div>

      {/* show transactopn */}
      <div className="w-full overflow-auto">
        <table className="w-full border-collapse border border-gray-200 overflow-auto px-3">
          <thead>
            <tr className="bg-gray-600">
              <th className="border border-gray-200 py-2 px-4">النوع</th>
              <th className="border border-gray-200 py-2 px-4">التاريخ</th>
              <th className="border border-gray-200 py-2 px-4">الرقم</th>
              <th className="border border-gray-200 py-2 px-4">المبلغ</th>
              <th className="border border-gray-200 py-2 px-4">التفاصيل</th>
            </tr>
          </thead>
          <tbody>
            {voucehrData.map((el, index) => (
              <tr
                key={index}
                className={
                  index % 2 === 0
                    ? "bg-gray-200 text-black"
                    : "bg-gray-400 text-gray-700"
                }
              >
                <td className="border border-gray-200 py-2 px-4">{el.type}</td>
                <td className="border border-gray-200 py-2 px-4">
                  {getTimeElapsed(el.updatedAt)}
                </td>
                <td className="border border-gray-200 py-2 px-4">
                  {el.recietId}
                </td>
                <td className="border border-gray-200 py-2 px-4">
                  {el.amount}
                </td>
                <td className="border border-gray-200 py-2 px-4">
                  {el.detail}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-gray-900 text-foreground">
              <td
                colSpan="4"
                className="border border-gray-200 py-2 px-4 text-right text-white"
              >
                الرصيد
              </td>
              <td
                colSpan="1"
                className="border border-gray-200 py-2 px-4 font-bold text-center text-white"
              >
                {total - sumOfReceipts + sumOfExpenses}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
}

export default ShowTransaction;



