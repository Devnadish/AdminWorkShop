export const CardTranscation = ({
  tranaction,
  ReciptSum,
  PaymentSum,
  CardSum,
}) => {
  return (
    <div className="w-full overflow-auto py-3">
      <table className="w-full border-collapse border border-border overflow-auto px-3">
        <thead>
          <tr className="bg-secondary text-secondary-foreground">
            <th className="border border-border py-2 px-4">النوع</th>
            <th className="border border-border py-2 px-4">التاريخ</th>
            <th className="border border-border py-2 px-4">الرقم</th>
            <th className="border border-border py-2 px-4">المبلغ</th>
            <th className="border border-border py-2 px-4">التفاصيل</th>
          </tr>
        </thead>
        <tbody>
          {tranaction.map((el, index) => (
            <tr
              key={index}
              className={
                index % 2 === 0
                  ? "bg-gray-200 text-black"
                  : "bg-gray-400 text-gray-700"
              }
            >
              <td
                className={`border border-border py-2 px-4 ${
                  el.type === "قبض" ? "text-primary" : "text-destructive"
                }`}
              >
                {el.type}
              </td>
              <td className="border border-border py-2 px-4">{el.date}</td>
              <td className="border border-border py-2 px-4 text-center">
                {el.id}
              </td>
              <td
                className={`border border-border py-2 px-4 font-bold text-left ${
                  el.type === "قبض" ? "text-primary" : "text-destructive"
                }`}
              >
                {el.amount}
              </td>
              <td className="border border-border py-2 px-4">{el.detail}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="bg-gray-900">
            <td
              colSpan="4"
              className="border border-border py-2 px-4 text-right"
            >
              الرصيد{" "}
            </td>
            <td
              colSpan="1"
              className="border flex items-center justify-between border-border py-2 px-4 font-bold text-center"
            >
              <p>
                قبض :<span className="text-primary px-3">{ReciptSum}</span>{" "}
              </p>

              <p>
                صرف :
                <span className="text-destructive  px-3">{PaymentSum}</span>{" "}
              </p>
              <p>
                الصافي :<span className="bg-background/50 px-3">{CardSum}</span>{" "}
              </p>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
