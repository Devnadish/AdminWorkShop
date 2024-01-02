import { ScrollArea } from "@/components/ui/scroll-area";
const MangmentExpense = ({ MaintenanceExpensesArray }) => {
  return (
    <div className="flex flex-col gap-3 w-full justify-around h-full ">
      <ScrollArea className=" h-[250px]    px-4   w-full">
      {MaintenanceExpensesArray.map((item, index) => {
        return (
          <div
            key={index}
            className="flex items-center justify-between w-full text-white px-3"
          >
            <p>{item.collector}</p>
            <p>{item.amount}</p>
          </div>
        );
      })}
      </ScrollArea>
    </div>
  );
};

export default MangmentExpense;
