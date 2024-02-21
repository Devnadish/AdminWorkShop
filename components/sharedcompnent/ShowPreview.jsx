"use client"
import React from 'react'
import DailogBox from './DailogBox'
import { Button } from '../ui/button'

function ShowPreview({openPreview, setOpenPreview,clickTarget,id}) {
  return (
    <DailogBox
    open={openPreview}
    setOpen={setOpenPreview}
    title={"ملف عميل"}
    borederRed={"border-primary"}
  >
   <div>
   ShowClientDailog - {id} + {clickTarget}
   <Button onClick={()=>{setOpenPreview(false)}}> close</Button>
    </div> 
  </DailogBox>
  )
}

export default ShowPreview