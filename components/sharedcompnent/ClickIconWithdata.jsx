"use client"
import React, { useState } from "react";
import Ttip from "./Ttip";
import ShowPreview from "./ShowPreview";
 

function ClickIconWithdata({
  children,
  tooltip,
  bgColor = "bg-transpernt",
  fontSize = "text-sm",
  clickTarget,
  id,
}) {
 
const [openPreview, setOpenPreview] = useState(false)



  return (
    <div
      className={`flex items-center gap-3 ${bgColor}  w-fit px-3 rounded cursor-pointer `}
      onClick={()=>setOpenPreview(true)}
    >
      {tooltip ? (
        <Ttip tool={tooltip}>
          <div>{children[0]}</div>
        </Ttip>
      ) : (
        <div>{children[0]}</div>
      )}
      <div className={`${fontSize} text-foreground/70`}>{children[1]}</div>
      {openPreview && <ShowPreview openPreview={openPreview} setOpenPreview={setOpenPreview} id={id} clickTarget={clickTarget}/>}
    </div>
  );
}

export default ClickIconWithdata;
