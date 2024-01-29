import { ScrollArea } from "@/components/ui/scroll-area";

const FixingExpenses = ({ MaintenanceExpensesArray }) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex flex-col gap-3 w-full text-white  items-center justify-center ">
        <ScrollArea className=" h-[250px]    px-4   w-full">
      {MaintenanceExpensesArray.map((item, index) => {
        return (
          <div
            key={index}
            className="flex items-center justify-between w-full text-white  border border-white/30 flex-col p-2 "
          >
            <div className="flex items-center justify-between w-full text-white px-3">
            <p>{item.fromName}</p>
            <p>{item.amount}</p>
            </div>

            <div className="flex items-center justify-between w-full text-white px-3 bg-green-300/30 text-[.7rem]">
              <span>
               كرت اصلاح
              </span>
              <span>

                {item.fixCode}
              </span>
              </div>

          </div>
        );
      })}
       </ScrollArea>
    </div>
    </div>
  );
};

export default FixingExpenses;
