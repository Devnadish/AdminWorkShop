"use client"
import React,{useState}  from 'react'
import {  newNote } from '@/db/fixing'
import { Edit, Trash } from 'lucide-react'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Submit from '@/components/shared/Submit'
import ClearButton from '@/components/shared/ClearButton'
import { useSession } from "next-auth/react";


function CardActions({ cardid }) {
  const { data: session } = useSession();
  const [open,setOpen]=useState(false)

  const fixCard = cardid
  // const [cardNo, setCardNo] = useState(cardid)
  const handleNote = async (data )=>{
  const note=data.get("note")
  const notedata={
    note,
    CardId: fixCard,
     userID: session.user.phone,
    userName: session.user.name,
    userAvatar: session.user.avatar
  }
    const saveNote = await newNote(notedata)
    handleclose()
}
 const handleclose=()=>{
   setOpen(false)
 }

  return (
    <div className="flex items-center justify-between  bg-slate-900 w-full gap-12 py-2 px-2">


      <AlertDialog dir="RTL" open={open} onOpenChange={setOpen}>
          <AlertDialogTrigger className="border rounded-md px-2 py-1 flex items-center gap-4 bg-sky-600 border-sky-800 ">
          <p className='font-tajwal '>
            اضافة ملاحظات
          </p>
          <Edit className="text-blue-300" />

          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="w-full text-center">اضافة ملاحظات</AlertDialogTitle>
            </AlertDialogHeader>
            <form action={handleNote} id="formNote">
              <textarea id="formnote"  name='note' className='bg-gray-100 w-full text-black text-sm resize-none border rounded-md border-black shadow-lg px-3' rows={7}/>
              <div className='flex items-center gap-10 w-full justify-end'>
              <Submit/>
              <ClearButton formId={"formNote"} FoucFiled={"formnote"}/>
            </div>
            </form>
          </AlertDialogContent>
        </AlertDialog>

    </div>
  );
}

export default CardActions
