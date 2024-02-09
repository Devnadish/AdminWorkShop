import Caption from "@/components/sharedcompnent/Caption";
import { ScrollArea } from "@/components/ui/scroll-area";

const GeneralInfo = ({ generalInfoData, ClientActions }) => {
  return (
    <ScrollArea className=" h-[300px] w-full mt-3 " dir="RTL">
      <div className="text-white flex-col flex items-center justify-evenly    w-full  px-3 gap-1">

        <Caption title={" التعليقعات"} data={ClientActions.visibleComments} />
        <Caption title={" الاقتراحات"} data={ClientActions.visibleSuggestions} />
        <Caption title={" الشكاوي"} data={ClientActions.visibleComplains} />
        <div className="w-full  flex  gap-1">
          <Caption title={" العملاء"} data={generalInfoData.ClientRecord} />
          <Caption title={" السيارات"} data={generalInfoData.CartRecord} />
        </div>
        <Caption title={" كروت الصيانة"} data={generalInfoData.fixingOrdertRecord} />
        <Caption title={" الكروت المفتوحة"} data={generalInfoData.openFixingOrdertRecord} />
        <div className="w-full  flex  gap-1">
          <Caption title={" القبض"} data={generalInfoData.RecietVouchertRecord} />
          <Caption title={" الصرف"} data={generalInfoData.PaymentVouchertRecord} />
        </div>
      </div>
    </ScrollArea>
  );
};
export default GeneralInfo;
