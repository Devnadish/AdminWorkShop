"use client"
import { Button } from '@/components/ui/button';
import { deleteClient } from '@/db/clients';
import { Trash } from 'lucide-react';
import { FaUserEdit } from "react-icons/fa";
import React from 'react'


function DeleteClient({ id }) {
  const handleDelete = async (id) => {

    const deleteClientx = await deleteClient(id)

  }
  return (
    <div className="flex items-center justify-evenly  w-full">
      <Button onClick={() => handleDelete(id)} size="sm" className="flex items-center justify-center  h-9 h-9 bg-transparent ">
        <Trash size={24} className="text-red-500   cursor-pointer" />
      </Button>
      <Button onClick={() => handleDelete(id)} size="sm" className="flex items-center justify-center h-9 h-9 bg-transparent ">
        <FaUserEdit size={24} className="text-blue-500   cursor-pointer" />
      </Button>
    </div>
  );
}

export default DeleteClient
