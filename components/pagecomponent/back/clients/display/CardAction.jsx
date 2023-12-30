"use client"
import { Button } from '@/components/ui/button';
import { Delete, Edit, FilePieChart, Trash, View } from 'lucide-react';
import React from 'react'

function CardAction({Cid,onEdit,onDelete}) {
  return (
    <div className="flex items-center justify-between mb-4 w-full px-2">
      <div className="flex   items-center justify-center gap-0">
        <Button
          onClick={() => onEdit(Cid)}
          className="bg-gray-300  hover:bg-blue-200 text-blue-500 py-2 px-2 rounded-full flex items-center gap-3"
        >
          <Edit size={18} className="text-blue-500" />
        </Button>
        <Button
          onClick={() => onDelete(Cid)}
          className="bg-gray-300  hover:bg-red-200 text-red-600 py-2 px-2 rounded-full ml-2 flex items-center gap-3"
        >
          <Trash size={18} className="text-red-600" />
        </Button>
        <Button
          onClick={() => onDelete(id)}
          className="bg-gray-300 text-green-600  hover:bg-green-200  py-2 px-2 rounded-full ml-2 flex items-center gap-3"
        >
          <View size={18} className="text-green-600" />
        </Button>
      </div>
      <Button className="flex items-center justify-between px-6 ">
        <FilePieChart size={18} />
      </Button>
    </div>
  );
}

export default CardAction
