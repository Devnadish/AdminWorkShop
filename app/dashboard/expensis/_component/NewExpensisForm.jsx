"use client";
import INPUT from "@/components/sharedcompnent/INPUT";
import { GiExpense } from "@/lib/icons";
import { useState } from "react";
import SelectTag from "./SelectTag";
import Submit from "@/components/sharedcompnent/Submit";
import { Notify } from "@/lib/notify";
import { newExpensis } from "@/db/expensis";
import { ShowTags } from "./ShowTags";
import { checkRequireTags } from "@/lib/checkDefaultValues";
import { AddNewTag } from "./AddNewTag";
import { RequireTags } from "./RequireTags";

function NewExpensisForm({ AllTag }) {
  const [value, setValue] = useState("");
  const [tags, setTags] = useState([]);
  const Chekdefultvaluse=checkRequireTags(AllTag)

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
      className=" flex items-center justify-center  gap-4 flex-col  w-full p-4  self-start"
    >
      <INPUT icon={<GiExpense />} placeholder="اسم المصروف" name="expName" />

      <div className="w-full flex items-center justify-center gap-4 ">
        <SelectTag
          data={AllTag}
          value={value}
          setValue={setValue}
          comboLabel="اختار المجموعة"
          tags={tags}
          setTags={setTags}
        />
        <AddNewTag />
      </div>
      <ShowTags tags={tags} setTags={setTags} />
      {Chekdefultvaluse.length !==0 && <RequireTags AllTagData={Chekdefultvaluse}/>}
      <div className="flex items-center justify-end w-full">
        <Submit />
      </div>
    </form>
  );
}

export default NewExpensisForm;


