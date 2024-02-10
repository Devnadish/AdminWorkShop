import React from "react";
import Ttip from "./Ttip";

function IconWithdata({ children, tooltip ,bgColor="bg-inherit" ,fontSize="text-sm"}) {
  return (
    <div className={`flex items-center gap-3 ${bgColor} w-fit px-3 rounded `}>
      {tooltip ? (
        <Ttip tool={tooltip}>
          <div>{children[0]}</div>
        </Ttip>
      ) : (
        <div >{children[0]}</div>
      )}
      <div className={`${fontSize} text-foreground/70`}>{children[1]}</div>
    </div>
  );
}

export default IconWithdata;
