"use client";
import React, { useState } from "react";
import INPUT from "@/components/sharedcompnent/INPUT";
import ClearButton from "@/components/sharedcompnent/ClearButton";
import Submit from "@/components/sharedcompnent/Submit";
import { Phone, User, Car, CarFront } from "@/lib/icons";
import { addClient } from "@/db/clients";
import { validateForm } from "@/lib/validation/clients";
import { Notify } from "@/lib/notify";
import { carNoInfo } from "@/constant/information";

function Newform({ setOpen }) {
  const [carNo, setCarNo] = useState("");
  const [MobileNumber, setMobileNumber] = useState();
  const handleSubmit = async (data) => {
    const name = data.get("name");
    const mobile = data.get("mobile");
    const email = data.get("email");
    // const CarNo = data.get("CarNo");
    const CarNo = carNo;
    const CarName = data.get("CarName");
    const newClient = {
      name,
      mobile,
      email,
      CarNo,
      CarName,
    };
    const validation = validateForm(newClient);

    if (!validation.isValid) {
      Notify(validation.errorMessage, "error");
      return;
    }

    try {
      const result = await addClient(newClient);
      if (result.code === 403 || result.code === 401) {
        Notify(result.msg, "error");
        return;
      }
      if (result.code === 200) {
        setOpen(false);
        Notify(result.msg, "info");
        return;
      }
    } catch (error) {
      Notify("حدث خطأ ما، يرجى المحاولة مرة أخرى" + error, "error", 15000);
    }
  };

  const handlePhoneChange = (e) => {
 
    const inputValue = e.target.value;
    const allowedPattern = /^(05\d{8}|5\d{8})$/; // Saudi mobile number pattern without international code

    const updatedValue = inputValue
      .replace(/\s/g, "") // Remove spaces
      .slice(0, 10); // Limit to 10 characters for Saudi mobile numbers without the international code

    if (allowedPattern.test(updatedValue) || updatedValue === "") {
      setMobileNumber(updatedValue);
    }
  };

  const handleChange = (e) => {
    const inputValue = e.target.value.toUpperCase(); // Convert input to uppercase
    const allowedPattern = /^[A-Z0-9]{0,8}$/;

    const updatedValue = inputValue
      .replace(/\s/g, "") // Remove spaces
      .slice(0, 8); // Limit to 8 characters

    if (allowedPattern.test(updatedValue) || updatedValue === "") {
      setCarNo(updatedValue);
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
    iconBgColor="bg-gray-500"
  />
  <INPUT
    type="tel"
    name="mobile"
    placeholder="رقم الجوال"
    icon={<Phone />}
    maxLength="9" // Update maxLength to 9
    iconBgColor="bg-amber-700"
    // value={MobileNumber}
    // onChange={handlePhoneChange}
    // info={carNoInfo}
  />
</div>

      <div className="flex flex-col gap-4 md:flex-row">
        <INPUT
          type="text"
          name="CarNo"
          placeholder="رقم السيارة"
          icon={<Car />}
          value={carNo}
          iconBgColor="bg-amber-700"
          onChange={handleChange}
          info={carNoInfo}
        />
        <INPUT
          type="text"
          name="CarName"
          placeholder="اسم السيارة"
          icon={<CarFront />}
          maxLength="10"
          iconBgColor=" bg-gray-500"
        />
      </div>

      <div className="flex flex-col gap-4 md:flex-row items-center justify-end  w-full">
        <Submit title="حفظ العميل" color="bg-primary" />
        <ClearButton formId={"newClientForm"} FoucFiled={"clientnameId"} />
        {/* </div> */}
      </div>
    </form>
  );
}

export default Newform;
