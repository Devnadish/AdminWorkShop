import {
  Car,
  MdCarCrash,
  MdOutlineEngineering,
  PiEngineDuotone,
  Timer,
  User,
} from "@/lib/icons";
import IconWithdata from "@/components/sharedcompnent/IconWithdata";
import CardCpm from "@/components/sharedcompnent/CardCpm";
import OnlyDate from "@/components/sharedcompnent/OnlyDate";
import DeleveryTimer from "./DeleveryTimer";
import ClickIconWithdata from "@/components/sharedcompnent/fastshow/ClickIconWithdata";

export const ShowCards = (props) => {
  const cardDate = props.cardDate.props.data;
  const deleverTime = props.deleverTime;
  return (
    <CardCpm>
      {/* card title */}
      {props.reminder && <DeleveryTimer deleveryTime={deleverTime} />}
      <ClickIconWithdata
        tooltip={"اسم العميل"}
        clickTarget="client"
        id={props.clientId}
      >
        <User size={18} />
        {props.clientName}
      </ClickIconWithdata>
      <div className="flex items-center w-full justify-between">
        <div className="flex items-center gap-4">
          <ClickIconWithdata
            tooltip={"رقم كرت الاصلاح"}
            clickTarget="fixCard"
            id={props.cardNo}
          >
            <MdCarCrash size={25} color="bg-primary" />
            {props.cardNo}
          </ClickIconWithdata>
          <ClickIconWithdata
            tooltip={"رقم لوحة السيارة"}
            clickTarget="car"
            id={props.carNo}
          >
            <Car strokeWidth={1.25} className="text-red-500" />
            {props.carNo}
          </ClickIconWithdata>
        </div>
        <OnlyDate onlyDate={cardDate} />
      </div>
      <div className="flex items-center gap-2 justify-between w-full">
        <IconWithdata tooltip={"موعد التسليم"}>
          <Timer size={18} strokeWidth={1.25} />
          <p>{props.delevery}</p>
        </IconWithdata>
        <IconWithdata tooltip={"المهندس"}>
          <MdOutlineEngineering />
          <p>{props.eng}</p>
        </IconWithdata>
      </div>
      {/* card content */}
      <div className="flex items-start flex-col w-full justify-between gap-3 bg-accent rounded">
        <IconWithdata tooltip={"الصيانة المطلوبة"}>
          <PiEngineDuotone />
          <p className="line-clamp-2 hover:line-clamp-none ">{props.service}</p>
        </IconWithdata>
      </div>
      {/* card fotter */}
      <div>
        {props.note}
        {props.action}
      </div>
    </CardCpm>
  );
};
