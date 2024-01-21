"use client"
import React, { useState } from 'react'
import { Button } from '@/components/ui/button';
import { deleteClient, getClient, updateClient } from '@/db/clients';
import { Trash } from 'lucide-react';
import { FaUserEdit } from "react-icons/fa";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import INPUT from '@/components/shared/INPUT';
import Submit from '@/components/shared/Submit';
import ClearButton from '@/components/shared/ClearButton';
import {  AtSign, Phone, User,Pencil,Trash2 } from 'lucide-react';
    import { toast } from "sonner"


function DeleteClient({ id }) {
  const [open, setOpen] = useState(false)
  const [type, setType] = useState("")
  const [ClientData, setClientData] = useState({})




  const getClientData=async (id,mode)=>{
    const dbClientData=await getClient(id)
    setOpen(true)
    setType(mode)
    setClientData({
      id: dbClientData.clientIDs,
      name: dbClientData.name,
      mobile: dbClientData.mobile,
      email: dbClientData.email,
    })
  }

  const handleDelete = async (id) => {
 setOpen(true)
    setType("delete")


  }

  const handleUpClientData = async (id) => {
    setOpen(true)
    setType("update")
  }
  return (
    <div className="flex items-center justify-evenly  w-full">
      <Button onClick={() => getClientData(id,"delete")} size="sm" className="flex items-center justify-center border  h-9 h-9 text-red-500 bg-transpernt ">
        <Trash size={24} className="text-red-500   cursor-pointer" />
      </Button>
      <Button onClick={() => getClientData(id,"update")} size="sm" className="flex items-center justify-center h-9 h-9 border  bg-transpernt">
        <FaUserEdit size={24} className="text-lime-500   cursor-pointer" />
      </Button>
      <ShowBeforActon open={open} setOpen={setOpen} type={type} ClientData={ClientData} setClientData={setClientData}/>
    </div>
  );
}

export default DeleteClient

const ShowBeforActon = ({ open,setOpen,type,ClientData,setClientData})=>{
  return(<>
    <AlertDialog dir="RTL" open={open} onOpenChange={setOpen} >
      <AlertDialogContent className="bg-gray-300">
        <AlertDialogHeader>
          <AlertDialogTitle className={`w-full text-center font-tajwal font-bold text-xl py-1 rounded  ${type==="update" ? "bg-lime-500":"bg-red-500" }`}> {type==="update" ? "تعديل ملف عميل":"حذف ملف عميل"}</AlertDialogTitle>
        </AlertDialogHeader>
        <FormAction type={type} ClientData={ClientData} setClientData={setClientData} setOpen={setOpen}/>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>

  </>)
}

const FormAction = ({ type,ClientData,setClientData,setOpen })=>{


const handleSubmit = async (data) => {
   const name = data.get("name");
    const mobile = data.get("mobile");
    const email = data.get("email");
    const newClient = {
      name,
      mobile,
      email,
    };

  //   const validation = validateForm(newClient);
  //   if (!validation.isValid) {
  //     toast.error(validation.errorMessage);
  //     return;
  //   }





  if(type==="update"){
    const updateClientx = await updateClient(ClientData.id,data)
    if (updateClientx.code === 400) {
      toast.info(updateClientx.msg);
      return;
    }


    setOpen(false)
    return
  }
  if (type === "delete") {
    const deleteClientx = await deleteClient(ClientData.id)
    if(deleteClientx.code===400){
      toast.error(deleteClientx.msg);
      return;
    }
      if(deleteClientx.code===200){
      toast.success(deleteClientx.msg);
      return;
    }
    setOpen(false)
    return
  }

  };



  return(<>

    <form
      action={handleSubmit}
      id="newClientForm"
      className="flex flex-col gap-4 p-4 w-full text-white items-center justify-center max-w-md border rounded-md border-black/30"
    >
      <INPUT
        type="text"
        name="name"
        placeholder="اسم العميل"
        icon={<User />}
        id="clientnameId"
        value={ClientData.name}
        onChange={(event) => setClientData({ ...ClientData, name: event.target.value })}
        disabled={type==="delete"}
      />
      <div className="flex flex-col w-full gap-4 ">

        <INPUT
          type="text"
          name="mobile"
          value={ClientData.mobile}
          onChange={(event) => setClientData({ ...ClientData, mobile: event.target.value })}
          placeholder="رقم الجوال"
          icon={<Phone />}
          maxLength="10"
          iconBgColor="bg-red-700"
           disabled={type==="delete"}
        />
        <INPUT
          type="text"
          name="email"
          placeholder="الايميل"
          value={ClientData.email}
          onChange={(event) => setClientData({ ...ClientData, email: event.target.value })}
          icon={<AtSign />}
          // maxLength="10"
           disabled={type==="delete"}
        />
      </div>





      <div className="flex flex-col gap-4 md:flex-row items-center justify-end  w-full">
        <Submit
        title= {type==="update" ? "حفظ التعديلات" : "حذف الملف"}
        color={type==="update" ? "bg-lime-500" : "bg-red-500"}
        textColor={type==="update" ? "text-black" : "text-white"}
        icon={type==="update" ? <Pencil /> : <Trash2 />}/>

        <ClearButton formId={"newClientForm"} FoucFiled={"clientnameId"} />
        {/* </div> */}
      </div>
    </form>
  </>)
}
