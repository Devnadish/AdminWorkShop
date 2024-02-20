"use client";
import React, { useState } from "react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import DailogBox from "@/components/sharedcompnent/DailogBox";
import NewExpensisForm from "@/app/dashboard/expensis/_component/NewExpensisForm";

function Expensis({ data, value, setValue, AllTag }) {
  const [open, setOpen] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);

  const comboLabel = "اختار المصروف";

  return (
    <>
      <div className="flex items-center  gap-4">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[300px] justify-between"
            >
              {value
                ? data.find((framework) => framework.expName === value)?.expName
                : comboLabel}
              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[300px] p-0">
            <Command>
              <CommandInput placeholder={comboLabel} className="h-9" />

              <CommandEmpty>عير موجود.</CommandEmpty>
              <CommandGroup>
                {data.map((framework) => (
                  <CommandItem
                    key={framework.id}
                    value={framework.expName}
                    onSelect={(currentValue) => {
                      const newValue =
                        currentValue === value ? "" : currentValue;
                      setValue(newValue);
                      // setTags((prevTags) => [...prevTags, newValue]);
                      setOpen(false);
                    }}
                  >
                    {framework.expName}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        value === framework.expName
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
        <Button
          size="icon"
          className="bg-secondary text-secondary-foreground text-xl"
          type="button"
          onClick={()=>setOpenAdd(true)}
        >
          +
        </Button>
      </div>

      <DailogBox open={openAdd} setOpen={setOpenAdd} title={"مصروف جديد"}>
        <NewExpensisForm AllTag={AllTag} />
      </DailogBox>
    </>
  );
}

export default Expensis;
