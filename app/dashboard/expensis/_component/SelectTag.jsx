"use client";

import * as React from "react";
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
import { Tag, XCircle } from "@/lib/icons";
import { ScrollArea } from "@/components/ui/scroll-area";

export function SelectTag({
  data,
  value,
  setValue,
  comboLabel,
  tags,
  setTags,
}) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex flex-col gap-2">
      <div>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {value
                ? data.find((framework) => framework.tag === value)?.tag
                : comboLabel}
              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder={comboLabel} className="h-9" />
              <CommandEmpty>عير موجود.</CommandEmpty>
              <CommandGroup>
                <ScrollArea className=" h-[150px]       w-full " dir="RTL">
                  {data.map((framework) => (
                    <CommandItem
                      key={framework.id}
                      value={framework.tag}
                      // onSelect={(currentValue) => {
                      //   // setValue(currentValue === value ? "" : currentValue)
                      //   // setTags((prevTags) => [...prevTags, value]);

                      //   // setOpen(false)

                      //   const newValue =
                      //     currentValue === value ? "" : currentValue;
                      //   setValue(newValue);
                      //   setTags((prevTags) => [...prevTags, newValue]);
                      //   setOpen(false);
                      // }}

                      onSelect={(currentValue) => {
                        const newValue = currentValue === value ? "" : currentValue;
                      
                        // Check if the new value is not already in the tags array
                        if (!tags.includes(newValue)) {
                          setValue(newValue);
                          setTags((prevTags) => [...prevTags, newValue]);
                        } else {
                          // Notify the client about the duplicate value
                          alert("This value already exists in the tags.");
                          // You can use a different method to notify the client, such as a toast notification or a custom alert component
                        }
                      
                        setOpen(false);
                      }}

                    >
                      {framework.tag}
                      <CheckIcon
                        className={cn(
                          "ml-auto h-4 w-4",
                          value === framework.tag ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </ScrollArea>
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}

export default SelectTag;

// const ShowTags = ({ tags, setTags }) => {
//   const handleTagRemove = (index) => {
//     const updatedTags = tags.filter((_, idx) => idx !== index);
//     setTags(updatedTags);
//   };

//   return (
//     <div className="flex items-center gap-4 flex-wrap w-full">
//       {tags.map((tag, idx) => (
//         <div
//           key={idx}
//           className="flex items-center border border-primary px-1 rounded-full gap-2"
//         >
//           <span className="text-[.8rem]">{tag}</span>
//           <button
//             onClick={() => handleTagRemove(idx)}
//             className="p-1 "
//             type="button"
//           >
//             <XCircle size={18} className="text-primary" />
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };
