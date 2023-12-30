"use client"
import { Button } from '@/components/ui/button';
import { deleteClient } from '@/db/clients';
import { Trash } from 'lucide-react';
import React from 'react'


function DeleteClient({id}) {
const handleDelete = async (id) => {

 const deleteClientx= await deleteClient(id)

}
  return (
    <div>
        <Button onClick={()=>handleDelete(id)}>

      <Trash className="text-red-500 text-2xl h-8 w-8 cursor-pointer" />
        </Button>
    </div>
  );
}

export default DeleteClient
