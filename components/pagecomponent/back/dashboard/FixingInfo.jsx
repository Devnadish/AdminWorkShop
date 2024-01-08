import Caption from "@/components/shared/Caption";

const FixingInfo = ({
  sumOf_OPEN_FixingCard,
  sumOf_CLOSED_FixingCard,
  cardTotal,
  cardRecived,
  cardNet,
}) => {
  return (
    <div className="flex-col flex items-center justify-evenly    w-full  px-3 gap-1">
      <div className="w-full   flex flex-col gap-2  rounded ">
        <Caption title={" الكروت المفتوحة"} data={sumOf_OPEN_FixingCard.recordCount} isBorder dataBgColor="bg-red-800" titleBgColor="bg-red-500"/>
        <div className="w-full  flex  gap-1">
        <Caption title={" الاجمالي "} data={sumOf_OPEN_FixingCard.totalSum} />
        <Caption title={"  المستلم"} data={sumOf_OPEN_FixingCard.receiveSum} />
        </div>
        <Caption title={"  المتبقي"} data={sumOf_OPEN_FixingCard.remaining} />
      </div>
      <div className="w-full  text-black flex flex-col gap-2  ">
        <Caption title={" الكروت المغلقه"} data={sumOf_CLOSED_FixingCard.recordCount} isBorder dataBgColor="bg-red-800" titleBgColor="bg-red-500" />
        <div className="w-full  flex  gap-1">
        <Caption title={" الاجمالي "} data={sumOf_CLOSED_FixingCard.totalSum} />
        <Caption title={"  المستلم"} data={sumOf_CLOSED_FixingCard.receiveSum} />
        </div>
        <Caption title={"  المتبقي"} data={sumOf_CLOSED_FixingCard.remaining} />
      </div>
    </div>
  );
};
export default FixingInfo;
