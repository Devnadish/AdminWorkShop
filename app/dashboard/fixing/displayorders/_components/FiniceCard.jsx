import IconWithdata from "@/components/sharedcompnent/IconWithdata";
import {
  GiCash,
  LiaCashRegisterSolid, Scale
} from "@/lib/icons";

export const FiniceCard = ({ total, receive }) => {
  const balance = total - receive;
  return (
    <div className="flex items-center justify-between">
      <IconWithdata tooltip={"القيمة"}>
        <GiCash />
        {total}
      </IconWithdata>
      <IconWithdata tooltip={"المستلم"}>
        <LiaCashRegisterSolid />
        {receive}
      </IconWithdata>
      <IconWithdata tooltip={"المتبقي"}>
        <Scale />
        {balance}
      </IconWithdata>
    </div>
  );
};
