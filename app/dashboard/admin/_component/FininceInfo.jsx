import { GiCash,LiaCashRegisterSolid,HiMiniUserGroup,FaTools,GiOfficeChair } from '@/lib/icons';
import { Figure } from '../../../../components/sharedcompnent/Figure';

const FininceInfo = ({
  totalIncome,
  clientBalance,
  reciptSum,
  mangmentExp,
  fixingExp,
}) => {
  return (
    <div className='mt-5 grid grid-cols-1 place-items-start gap-6 md:grid-cols-5'>
      <Figure title={"الايرادات"} no={totalIncome} icon={<GiCash size={50} className="text-blue-400"/>} color="text-blue-600"/>
      <Figure title={"القبض"} no={reciptSum} icon={<LiaCashRegisterSolid size={50} className="text-green-400" />} color="text-green-600" />
      <Figure title={"المصاريف التشغيليه"} no={fixingExp} icon={<FaTools size={50} className="text-sky-600" />} color="text-sky-600" />
      <Figure title={"المصاريف الادارية"} no={mangmentExp} icon={<GiOfficeChair size={50} className="text-yellow-600" />} color="text-yellow-600" />
      <Figure title={"رصيد العملاء"} no={clientBalance} icon={<HiMiniUserGroup size={50} className="text-red-400" />} color="text-red-600" />
    </div>
  );
};
export default FininceInfo;



