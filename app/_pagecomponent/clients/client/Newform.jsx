"use client";
import React from "react";
import INPUT from "@/components/shared/INPUT";
import ClearButton from "@/components/shared/ClearButton";
import Submit from "@/components/shared/Submit";
import { Mail, Phone, User } from "lucide-react";
import { toast } from "react-hot-toast";
import { addClient } from "@/db/clients";
import { validateForm } from "@/lib/validation/clients";
import { Car } from "lucide-react";
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
      toast.success(result.msg, { duration: 4000, position: "bottom-center" });
    } catch (error) {
      toast.error("حدث خطأ ما، يرجى المحاولة مرة أخرى", {
        duration: 4000,
        position: "bottom-center",
      });
    }
  };
  return (
    <form
      action={handleSubmit}
      id="newClientForm"
      className="flex flex-col gap-4 p-4 w-full text-white items-center justify-center max-w-md border rounded-md border-white/30"
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
        />
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <INPUT
          type="text"
          name="CarNo"
          placeholder="رقم السيارة"
          icon={<Car />}
        />
        <INPUT
          type="text"
          name="CarName"
          placeholder="اسم السيارة"
          icon={<Car />}
          maxLength="10"
        />
      </div>



      <div className="flex flex-col gap-4 md:flex-row items-center justify-center  w-full">
        {/* <INPUT
          type="email"
          name="email"
          placeholder="الايميل"
          icon={<Mail />}
        /> */}
        {/* <div className="flex items-center justify-around "> */}
          <Submit />
          <ClearButton formId={"newClientForm"} FoucFiled={"clientnameId"} />
        {/* </div> */}
      </div>
    </form>
  );
}

export default Newform;
