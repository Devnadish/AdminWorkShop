import Caption from "@/components/sharedcompnent/Caption";

const GeneralInfo = ({ count_client,  count_comment,
  count_complain,
  count_suggestion,
  count_Car,
  count_fixingOrder,
  count_PaymentVoucher,
  count_RecietVoucher }) => {
  return (
      <div className="text-white flex-col flex items-center justify-evenly    w-full  px-3 gap-1">
        <Caption
          title={" التعليقات"}
          data={count_comment}
          titleBgColor="bg-accent/60"
          titleTextColor="text-accent-foreground"
          h="h-7"
          align="end"
          fonSize="text-[.8rem]"
          
        />
        <Caption
          title={" الاقتراحات"}
          fonSize="text-[.8rem]"
          data={count_suggestion}
          titleBgColor="bg-accent/60"
          titleTextColor="text-accent-foreground"
          h="h-7"
          align="end"
        />
        <Caption
          title={" الشكاوي"}
          fonSize="text-[.8rem]"
          data={count_complain}
          titleBgColor="bg-accent/60"
          titleTextColor="text-accent-foreground"
          h="h-7"
          align="end"
        />

        <Caption
          title={" العملاء"}
          fonSize="text-[.8rem]"
          data={count_client}
          titleBgColor="bg-accent/60"
          titleTextColor="text-accent-foreground"
          h="h-7"
          align="end"
        />
        <Caption
          title={" السيارات"}
          fonSize="text-[.8rem]"
          data={count_Car}
          titleBgColor="bg-accent/60"
          titleTextColor="text-accent-foreground"
          h="h-7"
          align="end"
        />

        <Caption
          title={" كروت الصيانة"}
          fonSize="text-[.8rem]"
          data={count_fixingOrder}
          titleBgColor="bg-accent/60"
          titleTextColor="text-accent-foreground"
          h="h-7"
          align="end"
        />
         

        <Caption
          title={" القبض"}
          data={count_RecietVoucher}
          titleBgColor="bg-accent/60"
          titleTextColor="text-accent-foreground"
          h="h-7"
          align="end"
          fonSize="text-[.8rem]"
        />
        <Caption
          title={" الصرف"}
          data={count_PaymentVoucher}
          titleBgColor="bg-accent/60"
          titleTextColor="text-accent-foreground"
          h="h-7"
          align="end"
          fonSize="text-[.8rem]"
        />
      </div>
  );
};
export default GeneralInfo;
