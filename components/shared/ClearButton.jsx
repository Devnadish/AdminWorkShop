"use client"

import React from 'react'
import { Button } from "@/components/ui/button";
import { Eraser } from 'lucide-react';

function ClearButton({formId,FoucFiled,color="bg-sky-300"}) {
      const handleclear = () => {
        document.getElementById(formId).reset();
        document.getElementById(FoucFiled).focus();
      };
  return (
    <Button className={`${color} text-sky-800`}  onClick={() => handleclear()} type="button">
      <Eraser className="text-white"/>
    </Button>
  );
}

export default ClearButton
