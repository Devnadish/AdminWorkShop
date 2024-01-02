"use client"
import React from 'react'
import { Button } from '../ui/button'
import { ClipboardCheck } from 'lucide-react'

function CopyBtn({text}) {
  return (
      <Button className="bg-white/90 "  onClick={() => { navigator.clipboard.writeText(text) }} variant="ghost" size="sm"><ClipboardCheck size={24} className="text-green-600"/></Button>

  )
}

export default CopyBtn
