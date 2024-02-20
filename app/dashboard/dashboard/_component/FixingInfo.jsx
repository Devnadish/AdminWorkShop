import Caption from "@/components/sharedcompnent/Caption";

const FixingInfo = ({ openRecords, openCardTotals, openRecipt, closeRecords, closeCardTotals, closeRecipt }) => {
  return (
    <div className="flex flex-col  items-center justify-evenly  h-[250px]  w-full  px-3 gap-1 ">
      <Caption
        title={"عدد الكروت "}
        data={openRecords}
        titleBgColor="bg-accent/60"
        titleTextColor="text-accent-foreground"
        h="h-7"
        align="end"
      />
      <Caption
        title={"الاجمالي "}
        data={openCardTotals}
        titleBgColor="bg-accent/60"
        titleTextColor="text-accent-foreground"
        h="h-7"
        align="end"
      />
      <Caption
        title={"المستلم"}
        data={openRecipt}
        titleBgColor="bg-accent/60"
        titleTextColor="text-accent-foreground"
        h="h-7"
        align="end"
      />

<div className="h-4 w-full text-[.7rem] text-primary border-b border-border flex items-center justify-center">الكروت المنتهية</div>


<Caption
        title={"عدد الكروت "}
        data={closeRecords}
        titleBgColor="bg-accent/60"
        titleTextColor="text-accent-foreground"
        h="h-7"
        align="end"
      />
      <Caption
        title={"الاجمالي "}
        data={closeCardTotals}
        titleBgColor="bg-accent/60"
        titleTextColor="text-accent-foreground"
        h="h-7"
        align="end"
      />
      <Caption
        title={"المستلم"}
        data={closeRecipt}
        titleBgColor="bg-accent/60"
        titleTextColor="text-accent-foreground"
        h="h-7"
        align="end"
      />
      
      
    </div>
  );
};
export default FixingInfo;
