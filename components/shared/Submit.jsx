"use client"
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import Spinner from "./Spinner";

function Submit({title="حفظ" ,w="w-6/12",color="bg-blue-500"}) {
  const status = useFormStatus();
  return (
    <Button
      disabled={status.pending}
      className={`${w} flex items-center justify-center gap-4 ${color}`}
    >
      {status.pending ? (
        <div className="flex items-center justify-center gap-2">
          <span>جاري الحفظ..</span> <Spinner />
          {/* <div className="spinner w-4 h-4 border-2 border-blue-200 rounded-full delay-500"></div> */}
        </div>
      ) : (
        <>
          <span>{title}</span>
          <Send size={18} />
        </>
      )}
    </Button>
  );
}


export default Submit
