import IconWithdata from "@/components/sharedcompnent/IconWithdata";
import {
  MdOutlineEngineering,
  PiEngineDuotone, Timer
} from "@/lib/icons";

export const BodyCard = ({ detail, delivery, engName }) => {
  return (
    <div className="flex   flex-col w-full gap-3 bg-accent py-3 rounded-md shadow-md" >
      <div className="flex w-full items-center justify-between ">
        <IconWithdata tooltip={"موعد التسليم"}>
          <Timer />
          {delivery}
        </IconWithdata>
        <IconWithdata tooltip={"المهندس"}>
          <MdOutlineEngineering />
          {engName}
        </IconWithdata>
      </div>
      <IconWithdata tooltip={"الخدمة المطلوبة"}>
        <PiEngineDuotone />
        <p className="line-clamp-2 hover:line-clamp-none ">
        {detail}
            </p>
       
      </IconWithdata>
    </div>
  );
};
