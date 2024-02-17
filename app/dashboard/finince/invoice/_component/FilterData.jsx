"use client";
import React, { useState, useEffect } from "react";
import { MdCarCrash, Search } from "@/lib/icons";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import INPUT from "@/components/sharedcompnent/INPUT";
import { DivWithTitle } from "@/components/sharedcompnent/DivWithTitle";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";
import IconWithdata from "@/components/sharedcompnent/IconWithdata";

function FilterData({len}) {
  const [fliterOption, setFilterOption] = useState("");
  const [client, setClient] = useState("");
  const router = useRouter();


  const handleRadioChange = (value) => {
    setFilterOption(value)
  };
  // const [query] = useDebounce(fliterOption, 100);

  useEffect(() => {

    if(fliterOption==="client") {
      router.push(`/dashboard/finince/invoice?where=client&clientname=${client}`);
      return
     } 

    if (!fliterOption) {
      router.push("/dashboard/finince/invoice");
    } else {
      router.push(`/dashboard/finince/invoice?where=${fliterOption}`);  
    }

  }, [fliterOption, router,client]);
  return (
    <div className="bg-secondary flex items-center justify-between w-full py-2 max-w-5xl rounded overflow-hidden mt-2">
      <div className="flex items-center gap-8 w-full">
        <RadioGroup
          dir="RTL"
          value={fliterOption}
          onValueChange={handleRadioChange}
          className="flex items-start  text-foreground w-full  gap-8 px-4"
        >
          <DivWithTitle title={"العميل"} h={"h-14"}>
            <div className="flex items-center gap-4 border border-border h-12 text-foreground px-3 py-3 rounded">
              <RadioGroupItem value="client" id="client" />
              <INPUT
                h="h-7"
                disabled={fliterOption !== "client"}
                value={client}
                onChange={(e) => setClient(e.target.value)}
              />
            </div>
          </DivWithTitle>
          <DivWithTitle title={"حالةالكرت"}>
            <div className="flex items-center gap-4 border border-border h-12 text-foreground px-3 py-3 rounded">
              <Label htmlFor="open">مفتوح</Label>
              <RadioGroupItem value="open" id="open" />
              <Label htmlFor="close">مغلق</Label>
              <RadioGroupItem value="close" id="close" />
              <Label htmlFor="all">الكل</Label>
              <RadioGroupItem value="all" id="all" />
            </div>
          </DivWithTitle>

         
        </RadioGroup>
      </div>

      <IconWithdata tooltip={"عدد الكروت"}>
        <MdCarCrash size={25} />
        <span>{len}</span>
      </IconWithdata>
    </div>
  );
}

export default FilterData;


