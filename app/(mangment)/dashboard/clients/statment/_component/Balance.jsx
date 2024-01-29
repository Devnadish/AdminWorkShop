import { Wrench, FaTools, LiaCashRegisterSolid, Scale } from "@/lib/icons";

export const Balance = ({sumFix,  sumRecipt,  sumPayment}) => {
  const blanceStyle = "flex items-center gap-2 bg-gray-500 px-3 rounded-md py-1";
  return (
    <div className="flex w-full items-center justify-between px-3">
      <div className={blanceStyle}>
        <Wrench />
        <p>{sumFix}</p>
      </div>
      <div className={blanceStyle}>
        <LiaCashRegisterSolid />
        <p>{sumRecipt}</p>
      </div>
      <div className={blanceStyle}>
        <FaTools />
        <p>{sumPayment}</p>
      </div>
      
      {/* <div className={blanceStyle}>
        <Scale />
        <p>{(sumFix-sumRecipt)+ sumPayment}</p>
      </div> */}
    </div>
  );
};
