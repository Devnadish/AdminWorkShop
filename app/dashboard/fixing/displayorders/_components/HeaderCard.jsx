import ShowDate from "@/components/shared/ShowDate";
import IconWithdata from "@/components/sharedcompnent/IconWithdata";
import {
  AlertCircle,
  Car,
  MdCarCrash,
  User
} from "@/lib/icons";

export const HeaderCard = ({ fixingId, clientName, selectedCar, isClosed ,create,update}) => {
  let clr;
  isClosed ? clr = "bg-accent" : clr = "bg-secondary";
  let sts;
  isClosed ? sts = "مغلق" : sts = "مفتوح";
  return (
    <div className="flex items-center gap-2 flex-wrap bg-accent py-2 rounded">
      <ShowDate create={create} update={update} />
      <div className="flex w-full items-center justify-between">
        <IconWithdata tooltip={"رقم الكرت "}>
          <MdCarCrash />
          {fixingId}
        </IconWithdata>

        <IconWithdata tooltip={"حالة الكرت "} bgColor={clr}>
          <AlertCircle size={18} />
          {sts}
        </IconWithdata>




        {/* <Caption   data={isClosed ? "مقفل" : "مفتوح"} /> */}
      </div>
      <div className="flex w-full items-center justify-between">
        <IconWithdata tooltip={"رقم السيارة"}>
          <Car />
          {selectedCar}
        </IconWithdata>
        <IconWithdata tooltip={"اسم العميل"}>
          <User />
          {clientName}
        </IconWithdata>
      </div>
    </div>
  );
};
