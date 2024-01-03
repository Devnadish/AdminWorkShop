"use client"
import { Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { deleteExp } from "@/db/expencisData";
import toast from "react-hot-toast";


function DeleteExpinces({ expName,id }) {
    const handleDelete = async (expName,id)=>{
        const delExp = await deleteExp(expName,id)
        if (delExp.code === 400) { return toast.error(delExp.msg) }


    }
  return (
      <Button onClick={() => { handleDelete(expName,id)}} className="text-white"><Trash /></Button>
  )
}

export default DeleteExpinces
