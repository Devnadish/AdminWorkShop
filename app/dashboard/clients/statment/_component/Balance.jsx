import IconWithdata from "@/components/sharedcompnent/IconWithdata";
import { Wrench, FaTools, LiaCashRegisterSolid } from "@/lib/icons";

export const Balance = ({sumFix,  sumRecipt,  sumPayment}) => {
  return (
    <div className="flex w-full items-center justify-between px-3">
      <IconWithdata tooltip={"الايرادات"}>
        <Wrench size={20} strokeWidth={1.25}/>
        <p>{sumFix}</p>
      </IconWithdata>

      <IconWithdata tooltip={"القبض"}>
      <LiaCashRegisterSolid />
        <p>{sumRecipt}</p>
      </IconWithdata>

      <IconWithdata tooltip={"الصرف"}>
      <FaTools />
        <p>{sumPayment}</p>
      </IconWithdata>

      
    </div>
  );
};
