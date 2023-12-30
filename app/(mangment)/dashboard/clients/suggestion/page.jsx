import Avatar from "@/components/shared/Avatar";
import PageTitle from "@/components/shared/PageTitle";
import { Button } from "@/components/ui/button";
import { getAllSuggestionForAdmin } from "@/db/suggestion";
import { getTimeElapsed } from "@/lib/timeanddate";
import { Frown, Smile } from "lucide-react";
import React from "react";

async function Complain() {
  const getComplain = await getAllSuggestionForAdmin();

  return (
    <div className="flex items-center flex-col justify-center w-full">
      <PageTitle title={"صندوق  الاقراحات"} icon={<Smile className="text-yellow-300 w-12 h-12" />} />
      <CommentsData getComplain={getComplain} />
    </div>
  );
}

export default Complain;

const CommentsData = ({ getComplain }) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 w-full p-4">
      {getComplain.map((el, index) => (
        <div
          key={index}
          className={`flex flex-col gap-4 rounded  w-full border   ${
            el.isVisible ? "border-white " : "border-red-800 "
          }`}
        >
          <div className="flex items-center justify-between w-full bg-sky-400/20 px-4">
            <div className=" rounded-t p-1 flex items-center ">
              <Avatar src={el.avatar} />
              <p className="text-white">{el.username}</p>
            </div>

            <p className="bg-gray-200/20 px-4 text-xs rounded-xl py-1">
              {getTimeElapsed(el.updatedAt)}
            </p>
          </div>

          <p className="text-white px-4">{el.text}</p>
          <div className="flex w-full items-center justify-between bg-yellow-300 text-black rounded-b p-2 ">
            <p className="font-extrabold"></p>
            <Button>رد علي الاقتراح</Button>
          </div>
        </div>
      ))}
    </div>
  );
};
