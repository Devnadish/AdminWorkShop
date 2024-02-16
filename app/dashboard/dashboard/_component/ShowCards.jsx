import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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

export const ShowCards = (props) => {
  const cardDate=props.cardDate.props.data
  const deleverTime=props.deleverTime
  return (
      <CardCpm>
        {/* card title */}
       {props.reminder && <DeleveryTimer deleveryTime={deleverTime}/>}
        <IconWithdata tooltip={"اسم العميل"}>
          <User size={18} />
          {props.clientName}
        </IconWithdata>
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center gap-4">
            <IconWithdata tooltip={"رقم كرت الاصلاح"}>
              <MdCarCrash size={25} color="bg-primary" />
              {props.cardNo}
            </IconWithdata>
            <IconWithdata tooltip={"رقم لوحة السيارة"}>
              <Car strokeWidth={1.25} className="text-red-500" />
              {props.carNo}
            </IconWithdata>
          </div>
          <OnlyDate onlyDate={cardDate}  />
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
            <p className="line-clamp-2 hover:line-clamp-none ">
              {props.service}
            </p>
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
