import CommentAction from "@/app/dashboard/visitor/comment/_component/CommentAction";
import Avatar from "@/components/sharedcompnent/Avatar";
import PageTitle from "@/components/sharedcompnent/PageTitle";
import { Button } from "@/components/ui/button";
import { getAllcomplainForAdmin } from "@/db/complain";
import { getTimeElapsed } from "@/lib/timeanddate";
import { Frown } from "lucide-react";
import React from "react";
export const dynamic = "force-dynamic";
async function Complain() {
  const getComplain = await getAllcomplainForAdmin();

  return (
    <div className="flex items-center flex-col justify-center w-full">
      <PageTitle title={"صندوق  الشكاوي"} icon={<Frown />} />
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
            el.isVisible ? "border-white " : "border-destructive "
          }`}
        >
          <div className="flex items-center justify-between w-full bg-primary/20 px-4">
            <div className=" rounded-t p-1 flex items-center ">
              <Avatar src={el.avatar} />
              <p className="text-foreground">{el.username}</p>
            </div>

            <p className="bg-gray-200/20 px-4 text-xs rounded-xl py-1">
              {getTimeElapsed(el.updatedAt)}
            </p>
          </div>
          <p className="text-foreground px-4">{el.text}</p>
          <div className="flex w-full items-center justify-center p-2 ">
            <Button className="w-1/2 ">رد علي الشكوى</Button>
          </div>
        </div>
      ))}
    </div>
  );
};
