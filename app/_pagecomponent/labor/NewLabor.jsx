"use client"
import INPUT from '@/components/shared/INPUT'
import Submit from '@/components/shared/Submit';
import { newExp } from '@/db/expencisData';
import React from 'react'
import { GiOfficeChair } from "react-icons/gi";
import toast from "react-hot-toast";
import { newLabor } from '@/db/labor';

function NewLabor() {

    const handlesubmit=async (data)=>{
      const laborName = data.get("laborName")
      const FormData = { laborName }
      const SaveData = await newLabor(FormData)
        if (SaveData.code === 400) { return toast.error(SaveData.msg) }

    }

  return (
    <form action={handlesubmit} className= ' flex items-center justify-center gap-4 flex-col border w-full p-4'>
          <INPUT
          icon={<GiOfficeChair/>}
          Placeholder="اسم الموظف"
          name="laborName"
          />
          <Submit/>

    </form>
  )
}

export default NewLabor
