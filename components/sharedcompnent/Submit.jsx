"use client"
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Spinner from "./Spinner";

function Submit({title="حفظ" ,w="w-6/12",color="bg-blue-500",icon=<Send size={18} />,textColor="text-white"}) {
  const status = useFormStatus();
  return (
    <Button
      disabled={status.pending}
      className={`${w} flex items-center justify-center gap-4  font-tajwal font-bold   ${textColor}  ${color}`}
    >
      {status.pending ? (
        <div className={`flex items-center justify-center gap-2 ${textColor}`}>
          <span>جاري الحفظ..</span> <Spinner />
        </div>
      ) : (
        <>
          <span >{title}</span>
          {icon}
          {/* <Send size={18} /> */}
        </>
      )}
    </Button>
  );
}


export default Submit
