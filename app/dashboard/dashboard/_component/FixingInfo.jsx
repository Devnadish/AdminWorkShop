import Caption from "@/components/sharedcompnent/Caption";

const FixingInfo = ({ cardTotals, Recipt, payment, records }) => {
  return (
    <div className="flex flex-col  items-center justify-evenly  h-[250px]  w-full  px-3 gap-1 ">
      <Caption
        title={"عدد الكروت "}
        data={records}
        titleBgColor="bg-accent/60"
        titleTextColor="text-accent-foreground"
        h="h-7"
        align="end"
      />
      <Caption
        title={"الاجمالي "}
        data={cardTotals}
        titleBgColor="bg-accent/60"
        titleTextColor="text-accent-foreground"
        h="h-7"
        align="end"
      />
      <Caption
        title={"المستلم"}
        data={Recipt}
        titleBgColor="bg-accent/60"
        titleTextColor="text-accent-foreground"
        h="h-7"
        align="end"
      />
      <Caption
        title={"المصروف"}
        data={payment}
        titleBgColor="bg-accent/60"
        titleTextColor="text-accent-foreground"
        h="h-7"
        align="end"
      />
      <Caption
        title={"المتبقي"}
        data={cardTotals - Recipt + payment}
        titleBgColor="bg-accent/60"
        titleTextColor="text-accent-foreground"
        h="h-7"
        align="end"
      />
    </div>
  );
};
export default FixingInfo;
