import { GiCash } from "react-icons/gi";
import { LiaCashRegisterSolid } from "react-icons/lia";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaTools } from "react-icons/fa";
import { GiOfficeChair } from "react-icons/gi";
const FininceInfo = ({
  totalIncome,
  clientBalance,
  reciptSum,
  mangmentExp,
  fixingExp,
  net,
}) => {
  return (
    <div className='mt-5 grid grid-cols-1 place-items-start gap-6 md:grid-cols-5'>
      <Figure title={"القبض"} no={reciptSum} icon={<LiaCashRegisterSolid size={50} className="text-green-400" />} color="text-green-600" />
      <Figure title={"المصاريف التشغيليه"} no={fixingExp} icon={<FaTools size={50} className="text-sky-600" />} color="text-sky-600" />
      <Figure title={"المصاريف الادارية"} no={mangmentExp} icon={<GiOfficeChair size={50} className="text-yellow-600" />} color="text-yellow-600" />
      <Figure title={"رصيد العملاء"} no={clientBalance} icon={<HiMiniUserGroup size={50} className="text-red-400" />} color="text-red-600" />
      <Figure title={"الايرادات"} no={totalIncome} icon={<GiCash size={50} className="text-blue-400"/>} color="text-blue-600"/>
    </div>
  );
};
export default FininceInfo;


const Figure = ({ title, no,icon,color }) => {
  return (
    <div className="flex flex-col items-center  justify-center  w-full  min-w-40  bg-white p-4 rounded shadow-lg font-tajwal ">
{icon}
    <p className={`${color} text-lg font-bold`}>{title}</p>
      <p className={`${color} text-xl font-bold`}>{no}</p>
  </div>
  )
}
