"use client";
import INPUT from "@/components/sharedcompnent/INPUT";
import { GiExpense, Tag } from "@/lib/icons";
import { useState } from "react";
import SelectTag from "./SelectTag";
import Submit from "@/components/sharedcompnent/Submit";
import { Notify } from "@/lib/notify";
import { newExpensis } from "@/db/expensis";

function NewExpensisForm({ AllTag }) {
  const [value, setValue] = useState("");
  const [tags, setTags] = useState([]);

  const handlesubmit = async (data) => {
    const expName = data.get("expName");
    const FormData = { expName, tag: tags };
    const SaveData = await newExpensis(FormData);
    if (SaveData.code === 400) {
      return Notify(SaveData.msg, "error");
    }
  };

  return (
    <form
      action={handlesubmit}
      className=" flex items-center justify-center gap-4 flex-col  w-full p-4 max-w-sm self-start"
    >
      <INPUT icon={<GiExpense />} placeholder="اسم المصروف" name="expName" />
      <div className="flex items-center gap-4 w-full justify-start ">
        <Tag />
        <SelectTag
          data={AllTag}
          value={value}
          setValue={setValue}
          comboLabel="اختار المجموعة"
          tags={tags}
          setTags={setTags}
        />
      </div>
      <Submit />
    </form>
  );
}

export default NewExpensisForm;
