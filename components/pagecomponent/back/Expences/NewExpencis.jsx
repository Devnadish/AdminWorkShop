"use client"
import INPUT from '@/components/shared/INPUT'
import Submit from '@/components/shared/Submit';
import { newExp } from '@/db/expencisData';
import React from 'react'
import { GiOfficeChair } from "react-icons/gi";
import toast from "react-hot-toast";

function NewExpencis() {

    const handlesubmit=async (data)=>{
        const expName=data.get("expName")
        const FormData={expName}
        const SaveData = await newExp(FormData)
        if (SaveData.code === 400) { return toast.error(SaveData.msg) }

    }

  return (
    <form action={handlesubmit} className= ' flex items-center justify-center gap-4 flex-col border w-full p-4'>
          <INPUT
          icon={<GiOfficeChair/>}
          Placeholder="اسم المصروف"
          name="expName"
          />
          <Submit/>

    </form>
  )
}

export default NewExpencis
