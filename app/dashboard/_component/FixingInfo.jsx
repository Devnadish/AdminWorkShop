import Caption from "@/components/shared/Caption";

const FixingInfo = ({
  cardTotals,
Recipt,
  payment, records

}) => {
  return (
    <div className="flex flex-col  items-center justify-evenly  h-[250px]  w-full  px-3 gap-1 ">
        <Caption title={"عدد الكروت "} data={records} h="h-6" dataBgColor="bg-blue-700" align="center"/>
        <Caption title={"الاجمالي "} data={cardTotals} h="h-6" />
        <Caption title={"المستلم"} data={Recipt} h="h-6" />
        <Caption title={"المصروف"} data={payment} h="h-6" />
        <Caption title={"المتبقي"} data={(cardTotals - Recipt) + payment} h="h-6" dataBgColor="bg-yellow-300" dataTextColor="text-black"/>
      {/* </div> */}

    </div>
  );
};
export default FixingInfo;
