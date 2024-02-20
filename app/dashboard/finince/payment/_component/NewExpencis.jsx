"use client"
import INPUT from '@/components/sharedcompnent/INPUT'
import Submit from '@/components/sharedcompnent/Submit';
import { newExp } from '@/db/expencisData';
import { Notify } from '@/lib/notify';
import React from 'react'
import { GiOfficeChair } from "react-icons/gi";


function NewExpencis() {

    const handlesubmit=async (data)=>{
        const expName=data.get("expName")
        const FormData={expName}
        const SaveData = await newExp(FormData)
        if (SaveData.code === 400) { return  Notify(SaveData.msg,"error") }

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
