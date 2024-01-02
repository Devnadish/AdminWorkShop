import { ScrollArea } from "@/components/ui/scroll-area";

const ClientTransaction = ({ ReceptArray }) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex flex-col gap-3 w-full text-white  items-center justify-center">
        <ScrollArea className=" h-[250px]    px-4   w-full">
          {ReceptArray.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-between w-full text-white px-1"
              >
                <p>{item.amount}</p>
                <p>{item.fromName}</p>
              </div>
            );
          })}
        </ScrollArea>
      </div>
    </div>
  );
};

export default ClientTransaction;
