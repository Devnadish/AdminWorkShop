import { FileDigit } from 'lucide-react';
import React from 'react'

function DocementNO({ DocID }) {
  return (
    <div className="border bg-black flex items-center  justify-between  text-md  rounded-md px-1 py-1 h-[50px] self-start">
        <div className="border-l-2  px-1 border-white/30">
                  <FileDigit strokeWidth={1} />
        </div>
      <span className="underline underline-offset-4 text-2xl px-3 self-start">
        {DocID}
      </span>
    </div>
  );
}

export default DocementNO
