"use client"
import React from 'react'
import { Button } from '../ui/button';
import { Mail } from '@/lib/icons';

function MailClient({phone}) {
  return (
    <Button
    size="icon"
      onClick={() => (window.location.href = `tel:${phone}`)}
      className="border gap-4   flex items-center justify-center bg-yellow-300 shadow-lg text-black  hover:bg-green-400"
    >
      <Mail size={20} />
    </Button>
  );
}

export default MailClient
