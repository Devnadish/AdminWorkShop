"use client"

import {useState}  from 'react'
import INPUT from '@/components/sharedcompnent/INPUT'
import { Button } from '@/components/ui/button';
import { VscTools } from "react-icons/vsc";
import { useRouter } from 'next/navigation';
export const dynamic = "force-dynamic";
function Page() {
  const router=useRouter()
  const [cardid,setCardid]=useState("")
  const handleId=()=>{
    router.push(`/dashboard/fixing/cardstatment/${cardid}`)
  }
  return (
    <div className="flex  items-center justify-center  border w-[300px] h-[300px] mt-10 rounded-md bg-black/30 border-white/30 p-4 flex-col gap-4">
      <div>
    <INPUT
    placeholder={"رقم الكرت"}
    icon={<VscTools/>}
    value={cardid}
    onChange={(e)=>setCardid(e.target.value)}
    h={"h-9"}

    />
      </div>
      <Button onClick={() => { handleId() }}  className="w-1/2 bg-green-500">عرض</Button>
    </div>
  )
}

export default Page
