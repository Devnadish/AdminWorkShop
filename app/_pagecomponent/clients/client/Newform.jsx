"use client";
import React from "react";
import INPUT from "@/components/shared/INPUT";
import ClearButton from "@/components/shared/ClearButton";
import Submit from "@/components/shared/Submit";
import {  Phone, User } from "lucide-react";
import { addClient } from "@/db/clients";
import { validateForm } from "@/lib/validation/clients";
import { toast } from "sonner"

import { Car, CarFront } from "lucide-react";
function Newform() {
  const handleSubmit = async (data) => {
    const name = data.get("name");
    const mobile = data.get("mobile");
    const email = data.get("email");
    const CarNo = data.get("CarNo");
    const CarName = data.get("CarName");
    const newClient = {
      name,
      mobile,
      email,
      CarNo,
      CarName
    };
    const validation = validateForm(newClient);
    if (!validation.isValid) {
      toast.error(validation.errorMessage);
      return;
    }

    try {
      const result = await addClient(newClient);
      // toast.success(result.msg, { duration: 4000, position: "bottom-center" });
      if (result.code === 403 || result.code === 401 ){
        toast.error(result.msg)
        return
      }
      if (result.code === 200) {
        toast.success(result.msg )
        return
      }
    } catch (error) {
      toast.error("حدث خطأ ما، يرجى المحاولة مرة أخرى");
    }
  };
  return (


    <form
      action={handleSubmit}
      id="newClientForm"
      className="flex flex-col gap-4 p-4 w-full text-white items-center justify-center max-w-md border rounded-md border-black/30"
    >
      <div className="flex flex-col gap-4 md:flex-row">
        <INPUT
          type="text"
          name="name"
          placeholder="اسم العميل"
          icon={<User />}
          id="clientnameId"
        />
        <INPUT
          type="text"
          name="mobile"
          placeholder="رقم الجوال"
          icon={<Phone />}
          maxLength="10"
          iconBgColor="bg-red-700"
                  />
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <INPUT
          type="text"
          name="CarNo"
          placeholder="رقم السيارة"
          icon={<Car />}
          iconBgColor="bg-red-700"
        />
        <INPUT
          type="text"
          name="CarName"
          placeholder="اسم السيارة"
          icon={<CarFront />}
          maxLength="10"
        />
      </div>
      <div className="flex flex-col gap-4 md:flex-row items-center justify-end  w-full">
          <Submit title="حفظ العميل"/>
          <ClearButton formId={"newClientForm"} FoucFiled={"clientnameId"} />
        {/* </div> */}
      </div>
    </form>

  );
}

export default Newform;
