import React from 'react'
import { Button } from '../ui/button';
import { PhoneCallIcon } from 'lucide-react';
import { FaPhone } from "react-icons/fa";
function CallClient({phone}) {
  return (
    <Button
      onClick={() => (window.location.href = `tel:${phone}`)}
      className="border gap-4 h-8   rounded-full flex items-center justify-center bg-yellow-300 shadow-lg text-black w-fit hover:bg-green-400"
    >
      <PhoneCallIcon size={20} />
      {/* <p className='text-[.8rem]'>{phone}</p> */}
    </Button>
  );
}

export default CallClient
