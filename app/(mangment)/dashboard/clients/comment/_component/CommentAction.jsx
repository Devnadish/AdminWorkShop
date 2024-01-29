"use client"
import React,{useState} from 'react'


import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Eye, EyeOff } from 'lucide-react';
import { toggleVisible } from '@/db/comments';


function CommentAction({id,valueToggle}) {
    const [value, setValue] = useState(valueToggle ? "show" : "hide");
    const handleValueChange = async (newValue) => {
      setValue(newValue);
      if (newValue === "show") {
      await toggleVisible(id, true);
      }else {
        await toggleVisible(id, false);
      }
    };
  return (
    <ToggleGroup
      type="single"
      value={value}
      size="sm"
      onValueChange={handleValueChange}
      className="flex items-center justify-start gap-4"
    >
      <ToggleGroupItem
        value="show"
        aria-label="Toggle bold"
        className="flex items-center gap-4"
      >
        <Eye className="h-4 w-4" />
        <p>عرض</p>
      </ToggleGroupItem>
      <ToggleGroupItem
        value="hide"
        aria-label="Toggle italic"
        className="flex items-center gap-4"
      >
        <EyeOff className="h-4 w-4" />
        <p>اخفاء</p>
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

export default CommentAction
