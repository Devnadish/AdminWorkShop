import Caption from "@/components/sharedcompnent/Caption";
import { ScrollArea } from "@/components/ui/scroll-area";
const MangmentExpense = ({ MaintenanceExpensesArray }) => {
  return (
    <ScrollArea className=" h-[250px]  w-full mt-2" dir ="RTL">
      <div className="text-white flex-col flex items-center justify-evenly    w-full  px-3 gap-1">
      {MaintenanceExpensesArray.map((item, index) => {
        return (
          <Caption key={index} title={item.collector} data={item.amount} isBorder={false}     titleBgColor="bg-accent/60"
          titleTextColor="text-accent-foreground"
          h="h-7"
          align="end" />
        );
      })}
    </div>
      </ScrollArea>
  );
};

export default MangmentExpense;
