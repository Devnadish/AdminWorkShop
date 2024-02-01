"use client";
import { Textarea } from "@/components/ui/textarea";

export const CardNote = () => {
  return (
    <div className=" flex items-center justify-center     p-2   w-full bg-gray-300 border-t-4 border-gray-400 shadow-xl">
      <Textarea
        placeholder="ملاحظات"
        rows={2}
        name="serviceNote"
        id="serviceNote"
        className="  px-4 py-2 w-full resize-none bg-gray-400  border border-gray-600" />
     </div>
  );
};
