"use client"
import React, { useState } from 'react'
import ExpandItem from '@/components/shared/ExpandItem'
import { MdOutlineEditNote } from "react-icons/md";
import { DateCaption } from '@/components/shared/Caption';
import { User } from 'lucide-react';

function DisplayNOte({ note }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ExpandItem
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      menuTitle={note.length === 0 ? "لاتوجد ملاحظات للكرت" : "تو جد :  " + note.length + " ملاحظات"}
      color={note.length === 0 ? "bg-green-500" : "bg-red-500"}

      menuIcon={<MdOutlineEditNote size={30} className="text-yellow-300" />}
    >
      <div className='flex flex-col gap-4 p-3'>
        {note.map(
          (el, index) => {
            return (<div key={el.id} className='border flex flex-col justify-between rounded p-4 gap-4 border-white/30 shadow-md' >
              <p>{el.note}</p>
              <div className='h-8 w-full bg-sky-900/80 flex items-center justify-between w-full px-3'>
                <div className='text-white/30 border px-2 rounded text-base border-white/30 flex items-center gap-4'>
                  <User/>
                  {el.userName}
                  </div>
                <DateCaption data={el.updatedAt} />





              </div>
            </div>)
          }
        )}
      </div>





    </ExpandItem>
  )
}

export default DisplayNOte
