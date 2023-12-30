import ShowComments from '@/components/pagecomponent/back/clients/comments/ShowComments';
import PageTitle from '@/components/shared/PageTitle';
import {  getAllCommentsForAdmin } from '@/db/comments';
import {  MessagesSquare } from "lucide-react";
import React from 'react'

async function Comments() {
  // const getComment = await getAllCommentsForAdmin();
let getComment;

try {
  getComment = await getAllCommentsForAdmin();
} catch (error) {
  console.error(error);
  getComment = []; // set to empty array on failure
}


 return (
   <div className="flex items-center flex-col justify-center w-full">
     <PageTitle
       title={"تعليقات العملاء"}
       icon={<MessagesSquare className="text-yellow-300 w-12 h-12" />}
     />
     <ShowComments getComment={getComment}  />
   </div>
 );}


export default Comments;
