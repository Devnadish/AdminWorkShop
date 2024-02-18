"use client"
import INPUT from '@/components/sharedcompnent/INPUT'
import Submit from '@/components/sharedcompnent/Submit';
import React, { useState } from 'react'
import { toast } from "sonner";
import { newLabor } from '@/db/expensis';
import { GiExpense, Tag } from '@/lib/icons';
import { Button } from '@/components/ui/button';
import DailogBox from '@/components/sharedcompnent/DailogBox';
import SelectTag from './SelectTag';

function NewExpens({AllTag}) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = React.useState("")
  const [tags, setTags] = React.useState([])
  console.log(tags)
    const handlesubmit=async (data)=>{
      const expName = data.get("expName")
      const FormData = { expName,tag:tags }
      const SaveData = await newLabor(FormData)
        if (SaveData.code === 400) { return toast.error(SaveData.msg) }
    }

  return (
    <div className='flex w-full justify-start'>
      <Button
        onClick={() => {
          setOpen(true);
        }}
        className="flex items-center gap-3"
      >
        <GiExpense size={25} />
        مصروف جديد 
      </Button>
      <DailogBox
        open={open}
        setOpen={setOpen}
        title={"مصروف جديد"}
        borederRed={"border-primary"}
      >
        <form
          action={handlesubmit}
          className=" flex items-center justify-center gap-4 flex-col  w-full p-4 max-w-sm self-start"
        >
          <INPUT
            icon={<GiExpense />}
            placeholder="اسم المصروف"
            name="expName"
          />
          <div className='flex items-center gap-4 w-full justify-start '>
          <Tag/>
          <SelectTag data={AllTag} value={value} setValue={setValue} comboLabel="اختار المجموعة" tags={tags} setTags={setTags}/>
          </div>
          <Submit />
        </form>
      </DailogBox>
    </div>
  );
}

export default NewExpens
