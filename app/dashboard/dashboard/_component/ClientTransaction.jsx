import Caption from "@/components/sharedcompnent/Caption";
import { ScrollArea } from "@/components/ui/scroll-area";

const ClientTransaction = ({ ReceptArray }) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <ScrollArea className=" h-[250px]    px-4   w-full " dir="RTL">
        <div className="flex flex-col 2 w-full  items-center justify-center gap-1">
          {ReceptArray.map((item, index) => {
            return (
              <Caption key={index} title={item.fromName} data={item.amount} isBorder={false} />
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ClientTransaction;
