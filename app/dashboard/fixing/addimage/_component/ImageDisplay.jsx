"use client";
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";


export function ImageDisplay({ carImage }) {
  const imagelist = ["next/jfki7mvshatolizv5frl", "next/d69o6wzehfoofbcivpgj", "next/aamoscpkmgdzfltvrcp4"];
  return (
    <div className="max-h-[300px]  h-full overflow-auto w-full flex  items-center justify-center gap-2 flex-wrap ">
      {carImage.map((imgUrl) => {
        return (
          <Card key={imgUrl}>
            <CardContent className="flex aspect-square items-center justify-center ">
              <Image
                src={`https://res.cloudinary.com/dhyh7aufp/image/upload/q_auto,f_auto,w_300,h_200/${imgUrl.imageId}`}
                alt="Image from Cloudinary"
                // fill
                width={200}
                height={200} />
            </CardContent>
            <CardFooter>{imgUrl.description}</CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
