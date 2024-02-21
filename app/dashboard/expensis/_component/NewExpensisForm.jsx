"use client";
import INPUT from "@/components/sharedcompnent/INPUT";
import { GiExpense, Tag } from "@/lib/icons";
import { useState } from "react";
import SelectTag from "./SelectTag";
import Submit from "@/components/sharedcompnent/Submit";
import { Notify } from "@/lib/notify";
import { newExpensis, newTag } from "@/db/expensis";
import { Button } from "@/components/ui/button";
import { ShowTags } from "./ShowTags";
import DailogBox from "@/components/sharedcompnent/DailogBox";

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
      <div className="flex items-center justify-end w-full">
        <Submit />
      </div>
    </form>
  );
}

export default NewExpensisForm;

const AddNewTag = () => {
  const [addTag, setAddTag] = useState(false);


  const handlesubmit = async (data) => {
    const tag  = data.get("tagName");
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
            name="tagName"
          />
          <Submit />
        </form>
      </DailogBox>
    </>
  );
};
