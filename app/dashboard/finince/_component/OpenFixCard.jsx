import { calculateTotalAmountForOrders } from "@/db/fixing";

export const dynamic = "force-dynamic";

async function OpenFixCard({ type }) {
  const Cardata = await calculateTotalAmountForOrders(type);
  return (
    <>
      <p
        className={`w-fit flex items-center justify-end text-white bg-accent   py-1 ${
          type === "payment" ? "bg-destructive" : "bg-primary/80"
        }  px-3 mb-2 rounded font-bold`}
      >
        عدد السيارات تحت الصيانة :{" "}
        <span className="px-4 font-extrabold">{Cardata.length}</span>
      </p>
      <div className="flex  items-center gap-4  max-w-6xl w-full flex-wrap">
        {Cardata}
      </div>
    </>
  );
}
export default OpenFixCard;
