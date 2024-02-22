"use client";
import React, { useState } from "react";
import Ttip from "../Ttip";

import { Button } from "../../ui/button";
import DailogBox from "../DailogBox";
import  ShowClient from "./ShowClient";
import  ShowFixCard  from "./ShowCar";
import   ShowCar   from "./ShowCar";

function ClickIconWithdata({
  children,
  tooltip,
  bgColor = "bg-transpernt",
  fontSize = "text-sm",
  clickTarget,
  id,
}) {
  const [openPreview, setOpenPreview] = useState(false);
  let modelTitle=""
  if(clickTarget==="client"){modelTitle="ملف العميل"}
  if(clickTarget==="fixCard"){modelTitle="كرت صيانة"}
  if(clickTarget==="car"){modelTitle="ملف السيارة"}
 

  return (
    <>
      <Button
        className={`flex items-center gap-3 ${bgColor}  w-fit px-3 rounded cursor-pointer `}
        onClick={() => setOpenPreview(true)}
        variant="ghost"
      >
        {tooltip ? (
          <Ttip tool={tooltip}>
            <div>{children[0]}</div>
          </Ttip>
        ) : (
          <div>{children[0]}</div>
        )}
        <div className={`${fontSize} text-foreground/70`}>{children[1]}</div>
      </Button>

      <DailogBox
        open={openPreview}
        setOpen={setOpenPreview}
        title={modelTitle}
        borederRed={"border-primary"}
      >
         {(() => {
    switch (clickTarget) {
      case 'client':
        return <ShowClient id={id}/>;
      case 'fixCard':
       
        return <ShowFixCard id={id}/>;
      case 'car':
        return <ShowCar id={id}/>;
      default:
        return null;
    }
  })()}
      
      </DailogBox>
    </>
  );
}

export default ClickIconWithdata;


