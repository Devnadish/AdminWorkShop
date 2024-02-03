"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Eye } from "@/lib/icons";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
 
import Image from "next/image";

function ShowImages({ carId ,carImage}) {
  const [open, setopen] = useState(false);

  return (
    <>
      <div className="flex w-full items-center justify-around py-1">
        <Button className="bg-blue-600 h-7" onClick={() => setopen(true)}>
          <Eye size={20} />
        </Button>
      </div>
      <AlertDialog dir="RTL" open={open} onOpenChange={setopen}>
        <AlertDialogContent className="bg-gray-300">
          <AlertDialogHeader>
            <AlertDialogTitle className="w-full text-center font-tajwal font-bold text-xl">
              البوم الصور--{" "}
              <span className="bg-white/40 px-3 rounded-md text-center">
                {carId}
              </span>
            </AlertDialogTitle>
          </AlertDialogHeader>
          {/* <div className="w-full flex items-center justify-center "> */}
            <ImageDisplay carImage={carImage}/>
          {/* </div> */}
          {/* <Dropzone className="border   border-neutral-200 p-2 rounded-lg bg-slate-400 " carId={carId}/> */}
          <AlertDialogFooter>
            <AlertDialogCancel>الغاء</AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default ShowImages;

export function ImageDisplay({carImage}) {
  console.log(carImage)
  const imagelist=["next/jfki7mvshatolizv5frl","next/d69o6wzehfoofbcivpgj","next/aamoscpkmgdzfltvrcp4"]
  return (
    <div className="max-h-[300px]  h-full overflow-auto w-full flex  items-center justify-center gap-2 flex-wrap ">
    {carImage.map((imgUrl) => {
          return (
            // <CarouselItem key={imgUrl}>
                <Card key={imgUrl}>
                  <CardContent className="flex aspect-square items-center justify-center ">
                    <Image
                      src={`https://res.cloudinary.com/dhyh7aufp/image/upload/q_auto,f_auto,w_300,h_200/${imgUrl.imageId}`}
                      alt="Image from Cloudinary"
                      // fill
                      width={200}
                      height={200}
                    />
                  </CardContent>
                  <CardFooter>{imgUrl.description}</CardFooter>
                </Card>
            // </CarouselItem>
          );
        })}
    </div>
  );
}
