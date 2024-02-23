"use client";
import INPUT from "@/components/sharedcompnent/INPUT";
import { GiExpense } from "@/lib/icons";
import { useState } from "react";
import Submit from "@/components/sharedcompnent/Submit";
import { Notify } from "@/lib/notify";
import { newTag } from "@/db/expensis";
import { Button } from "@/components/ui/button";
import DailogBox from "@/components/sharedcompnent/DailogBox";

export const AddNewTag = () => {
  const [addTag, setAddTag] = useState(false);


  const handlesubmit = async (data) => {
    const tag = data.get("tagName");
    const FormData = { tag };
    const SaveData = await newTag(FormData);
    if (SaveData.code === 400) {
      return Notify(SaveData.msg, "error");
    }
  };
  return (
    <>
      <Button type="button" size="icon" onClick={() => setAddTag(true)}>
        +
      </Button>

      <DailogBox
        open={addTag}
        setOpen={setAddTag}
        title={"مجموعة جديدة"}
        borederRed={"border-primary"}
      >
        <form
          action={handlesubmit}
          className=" flex items-center justify-center  gap-4 flex-col  w-full p-4  self-start"
        >
          <INPUT
            icon={<GiExpense />}
            placeholder="اسم المجموعة"
            name="tagName" />
          <Submit />
        </form>
      </DailogBox>
    </>
  );
};
