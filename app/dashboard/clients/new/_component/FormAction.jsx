"use client";
import React from "react";
import { deleteClient, updateClient } from "@/db/clients";
import { AtSign, Phone, User, Pencil, Trash } from "@/lib/icons";
import INPUT from "@/components/sharedcompnent/INPUT";
import Submit from "@/components/sharedcompnent/Submit";
import ClearButton from "@/components/sharedcompnent/ClearButton";
import { toast } from "sonner";


export const FormAction = ({ type, ClientData, setClientData, setOpen }) => {
  const handleSubmit = async (data) => {
    const name = data.get("name");
    const mobile = data.get("mobile");
    const email = data.get("email");
    const newClient = {
      name,
      mobile,
      email,
    };
    if (type === "update") {
      const updateClientx = await updateClient(ClientData.id, data);
      if (updateClientx.code === 400) {
        toast.info(updateClientx.msg);
        return;
      }

      setOpen(false);
      return;
    }
    if (type === "delete") {
      const deleteClientx = await deleteClient(ClientData.id);
      if (deleteClientx.code === 400) {
        toast.error(deleteClientx.msg);
        return;
      }
      if (deleteClientx.code === 200) {
        toast.success(deleteClientx.msg);
        return;
      }
      setOpen(false);
      return;
    }
  };

  return (
    <>
      <form
        action={handleSubmit}
        id="newClientForm"
        className="flex flex-col gap-4 p-4 w-full text-white items-center justify-center max-w-md  rounded-md "
      >
        <INPUT
          type="text"
          name="name"
          placeholder="اسم العميل"
          icon={<User />}
          id="clientnameId"
          value={ClientData.name}
          onChange={(event) => setClientData({ ...ClientData, name: event.target.value })}
          disabled={type === "delete"} />
       
          <INPUT
            type="text"
            name="mobile"
            value={ClientData.mobile}
            onChange={(event) => setClientData({ ...ClientData, mobile: event.target.value })}
            placeholder="رقم الجوال"
            icon={<Phone />}
            maxLength="10"
            iconBgColor="bg-destructive"
            disabled={type === "delete"} />
          <INPUT
            type="text"
            name="email"
            placeholder="الايميل"
            value={ClientData.email}
            onChange={(event) => setClientData({ ...ClientData, email: event.target.value })}
            icon={<AtSign />}
            disabled={type === "delete"} />
        <div className="flex flex-col gap-4 md:flex-row items-center justify-end  w-full">
          <Submit
            title={type === "update" ? "حفظ التعديلات" : "حذف الملف"}
            color={type === "update" ? "bg-primary" : "bg-destructive"}
            textColor={type === "update" ? "text-black" : "text-white"}
            icon={type === "update" ? <Pencil /> : <Trash />} />
          <ClearButton formId={"newClientForm"} FoucFiled={"clientnameId"} />
          {/* </div> */}
        </div>
      </form>
    </>
  );
};
