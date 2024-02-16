"use client";
import React, { useState } from "react";
import { Filter, Search } from "@/lib/icons";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import INPUT from "@/components/sharedcompnent/INPUT";
function FilterData() {
  const [fliterOption, setFilterOption] = useState("");
  return (
    <div className="bg-secondary flex items-center justify-between w-full py-2 max-w-5xl rounded overflow-hidden mt-2">
      <RadioGroup
        dir="RTL"
        onValueChange={setFilterOption}
        className="flex items-center gap-2 text-foreground w-full justify-between px-4"
      >
         <DivWithTitle title={"العميل"}>
         <div className="flex items-center gap-4 border border-border text-foreground px-3 py-3 rounded">
          {/* <Label htmlFor="client">العميل</Label> */}
          <RadioGroupItem value="client" id="client" />
          <INPUT h="h-7"/>
        </div>
        </DivWithTitle>
        <DivWithTitle title={"حالةالكرت"}>
          <div className="flex items-center gap-4 border border-border text-foreground px-3 py-3 rounded">
            <Label htmlFor="open">مفتوح</Label>
            <RadioGroupItem value="open" id="open" />
            <Label htmlFor="close">مغلق</Label>
            <RadioGroupItem value="close" id="close" />
            <Label htmlFor="all">الكل</Label>
            <RadioGroupItem value="all" id="all" />
          </div>
        </DivWithTitle>

        <DivWithTitle title={"الرصيد"}>
          <div className="flex items-center gap-4 border border-border text-foreground px-3 py-3 rounded">
            <Label htmlFor="notZero">يوجد</Label>
            <RadioGroupItem value="notZero" id="notZero" />

            <Label htmlFor="Zero">لايوجد</Label>
            <RadioGroupItem value="Zero" id="Zero" />
          </div>
        </DivWithTitle>
      </RadioGroup>

      <Button className="bg-primary  flex items-center justify-center">
        <Search className="text-primary-foreground" />
      </Button>
    </div>
  );
}

export default FilterData;

const DivWithTitle = ({ title, children }) => {
  return (
    <div className="relative bg-inherit">
      <p className="absolute -top-2 px-3 bg-inherit text-primary text-[.7rem] right-2">
        {title}
      </p>
      {children}
    </div>
  );
};
