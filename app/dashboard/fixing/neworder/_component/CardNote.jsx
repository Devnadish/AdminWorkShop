"use client";
import { Textarea } from "@/components/ui/textarea";

export const CardNote = () => {
  return (
    <div className=" flex items-center justify-center     p-2   w-full bg-background/30   shadow-xl">
      <Textarea
        placeholder="ملاحظات"
        rows={2}
        name="serviceNote"
        id="serviceNote"
        className="px-4 py-2 w-full resize-none bg-input  border " />
     </div>
  );
};
