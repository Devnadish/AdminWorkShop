import Caption from "@/components/sharedcompnent/Caption";
import { ScrollArea } from "@/components/ui/scroll-area";

const GeneralInfo = ({ generalInfoData, ClientActions }) => {
  return (
    <ScrollArea className=" h-[300px] w-full mt-3 " dir="RTL">
      <div className="text-white flex-col flex items-center justify-evenly    w-full  px-3 gap-1">
        <Caption
          title={" التعليقعات"}
          data={ClientActions.visibleComments}
          titleBgColor="bg-accent/60"
          titleTextColor="text-accent-foreground"
          h="h-7"
          align="end"
        />
        <Caption
          title={" الاقتراحات"}
          data={ClientActions.visibleSuggestions}
          titleBgColor="bg-accent/60"
          titleTextColor="text-accent-foreground"
          h="h-7"
          align="end"
        />
        <Caption
          title={" الشكاوي"}
          data={ClientActions.visibleComplains}
          titleBgColor="bg-accent/60"
          titleTextColor="text-accent-foreground"
          h="h-7"
          align="end"
        />

        <Caption
          title={" العملاء"}
          data={generalInfoData.ClientRecord}
          titleBgColor="bg-accent/60"
          titleTextColor="text-accent-foreground"
          h="h-7"
          align="end"
        />
        <Caption
          title={" السيارات"}
          data={generalInfoData.CartRecord}
          titleBgColor="bg-accent/60"
          titleTextColor="text-accent-foreground"
          h="h-7"
          align="end"
        />

        <Caption
          title={" كروت الصيانة"}
          data={generalInfoData.fixingOrdertRecord}
          titleBgColor="bg-accent/60"
          titleTextColor="text-accent-foreground"
          h="h-7"
          align="end"
        />
        <Caption
          title={" الكروت المفتوحة"}
          data={generalInfoData.openFixingOrdertRecord}
          titleBgColor="bg-accent/60"
          titleTextColor="text-accent-foreground"
          h="h-7"
          align="end"
        />

        <Caption
          title={" القبض"}
          data={generalInfoData.RecietVouchertRecord}
          titleBgColor="bg-accent/60"
          titleTextColor="text-accent-foreground"
          h="h-7"
          align="end"
        />
        <Caption
          title={" الصرف"}
          data={generalInfoData.PaymentVouchertRecord}
          titleBgColor="bg-accent/60"
          titleTextColor="text-accent-foreground"
          h="h-7"
          align="end"
        />
      </div>
    </ScrollArea>
  );
};
export default GeneralInfo;
