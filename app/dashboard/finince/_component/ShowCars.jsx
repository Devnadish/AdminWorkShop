import { Car, MdCarCrash, User } from "@/lib/icons";
import ActionBtn from "./ActionBtn";
import CardCpm from "@/components/sharedcompnent/CardCpm";
import IconWithdata from "@/components/sharedcompnent/IconWithdata";
import OnlyDate from "@/components/sharedcompnent/OnlyDate";
import { Amounts } from "@/components/sharedcompnent/Amounts";

export const ShowCars = ({ card, type }) => {
  console.log(type)

  return (
    <>
      <CardCpm  topBorderColor={type === "payment" ? "border-border" : "border-primary"} borderSize="border-t-4">
        <div className="flex w-full items-center flex-col gap-4  ">
          <OnlyDate onlyDate={card.crdate} />
          <div className="flex items-center justify-between w-full">
            <IconWithdata tooltip={"رقم الكرت"}>
              <MdCarCrash size={20} />
              {card.FixNo}
            </IconWithdata>

            <IconWithdata tooltip={"رقم الكرت"}>
              <Car size={20} strokeWidth={1} className="text-foreground" />
              <span className="text-foreground">{card.selectedCar}</span>
            </IconWithdata>
          </div>
          <IconWithdata tooltip={"اسم العميل"}>
            <User size={20} strokeWidth={1} />
            <span>{card.clientName}</span>
          </IconWithdata>
          <div className="flex items-center justify-between gap-2  w-full">
            <Amounts title={"القيمة"} amount={card.fixOrederAmt} />
            <Amounts title={"المستلم"} amount={card.totalRecipt} bgColor={type === "recipt" ?   "bg-primary text-primary-foreground" : "bg-border" } />
            <Amounts title={"المصروف"} amount={card.payment} bgColor={type === "payment" ? "bg-primary text-primary-foreground" : "bg-border"}/>
          </div>
          <p className="py-1  px-2 bg-background/30  text-foreground/80 w-full flex items-center justify-between rounded">
            <span> المتبقي</span>
            <span className="text-lg font-bold py-1 px-3 ">{card.balance}</span>
          </p>
          <ActionBtn
            fromID={card.clientId}
            fromName={card.clientName}
            fixingCode={card.FixNo}
            type={type}
          />
        </div>
      </CardCpm>
    </>
  );
};
