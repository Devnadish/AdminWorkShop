"use client"
import React from 'react'
import { Button } from '../ui/button';
import { PhoneCallIcon } from '@/lib/icons';

function CallClient({phone}) {
  return (
    <Button
    size="icon"
      onClick={() => (window.location.href = `tel:${phone}`)}
      className="flex items-center  justify-center bg-yellow-300 shadow-lg text-black hover:bg-green-400"
    >
      <PhoneCallIcon size={20} />
     
    </Button>
  );
}

export default CallClient
