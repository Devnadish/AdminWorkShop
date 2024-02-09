import React from "react";
import Ttip from "./Ttip";

function IconWithdata({ children, tooltip }) {
  return (
    <div className="flex items-center gap-3 bg-accent w-fit px-3 rounded">
      {tooltip ? (
        <Ttip tool={tooltip}>
          <div>{children[0]}</div>
        </Ttip>
      ) : (
        <div>{children[0]}</div>
      )}
      <div>{children[1]}</div>
    </div>
  );
}

export default IconWithdata;
