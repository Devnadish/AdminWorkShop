"use client"

import React from 'react'
import { Button } from "@/components/ui/button";
import { Eraser } from 'lucide-react';

function ClearButton({formId,FoucFiled}) {
      const handleclear = () => {
        document.getElementById(formId).reset();
        document.getElementById(FoucFiled).focus();
      };
  return (
    <Button className="bg-sky-300 text-sky-800"  onClick={() => handleclear()} type="button">
      <Eraser />
    </Button>
  );
}

export default ClearButton
