"use client"
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { deleteExp } from "@/db/expencisData";

import { Notify } from "@/lib/notify";


function DeleteExpinces({ expName,id }) {
    const handleDelete = async (expName,id)=>{
        const delExp = await deleteExp(expName,id)
        if (delExp.code === 400) { return  Notify(delExp.msg,"error")}


    }
  return (
      <Button onClick={() => { handleDelete(expName,id)}} className="text-white"><Trash /></Button>
  )
}

export default DeleteExpinces
