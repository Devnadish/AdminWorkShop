"use client";
import { useEffect } from 'react';
import Avatar from '@/components/shared/Avatar';
import { getTimeElapsed } from '@/lib/timeanddate';
import React from 'react'
import CommentAction from './CommentAction';

const ShowComments = ({ getComment }) => {
    const fetchData = async () => {
    //   const response = await fetch("/api/data");
    //   const data = await response.json();

    //   setData(data);
    };
    useEffect(() => {
      window.addEventListener("focus", fetchData);

      return () => window.removeEventListener("focus", fetchData);
    }, []);


  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 w-full p-4">
      {getComment.map((el, index) => (
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

          <p className="text-white px-4">{el.comment}</p>
          <div className="flex w-full items-center justify-between bg-yellow-300 text-black rounded-b p-2 ">
            <p className="font-extrabold">الحالة الحالية</p>
            <CommentAction id={el.id} valueToggle={el.isVisible} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ShowComments;
