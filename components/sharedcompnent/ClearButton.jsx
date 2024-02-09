"use client"

import React from 'react'
import { Button } from "@/components/ui/button";
import { Eraser } from 'lucide-react';

function ClearButton({formId,FoucFiled,color="bg-popover"}) {
      const handleclear = () => {
        document.getElementById(formId).reset();
        document.getElementById(FoucFiled).focus();
      };
  return (
    <Button className={`${color} text-foreground `}  onClick={() => handleclear()} type="button">
      <Eraser className="text-white"/>
    </Button>
  );
}

export default ClearButton
