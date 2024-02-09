"use client";
import Submit from "@/components/sharedcompnent/Submit";
import ClearButton from "@/components/sharedcompnent/ClearButton";
 

export const CardAction = () => {
  return (
      <div className="flex items-center justify-end  gap-4 w-full bg-background/50 p-3 px-3 border-t-4 border-border shadow-xl">
        <Submit color="bg-primary" />
        <ClearButton formId={"fixingForm"} FoucFiled={"serviceDetail"} />
    </div>
  );
};
