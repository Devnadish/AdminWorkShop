"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { ShowFixOrderImage } from "@/db/fixing";
import { BsExclamationOctagon, Car } from "@/lib/icons";
import IconWithdata from "./IconWithdata";
import { Separator } from "../ui/separator";
import Spinner from "./Spinner";

function ShowCarImages({ carId }) {
  console.log(carId)
  const [carImage, setCarImage] = useState([]);
  const [loading, setLoading] = useState(false);

  const getImages = async (carId) => {
    setLoading(true);
    const images = await ShowFixOrderImage(carId);
    setCarImage(images);
    setLoading(false);
  };

  // 

  useEffect(() => {
    const images = getImages(carId);
    setLoading(false);
  }, [carId]);

  return (
    <div className="w-full flex flex-col gap-4">
      <IconWithdata>
        <Car />
        <p>{carId}</p>
      </IconWithdata>

      {loading && <Spinner />}
      <ImageDisplay carImage={carImage} loading={loading}/>
    </div>
  );
}

export default ShowCarImages;

export function ImageDisplay({ carImage,loading }) {

  return (
    <div className="max-h-[300px]  h-full overflow-auto w-full flex  items-center justify-center gap-2 flex-wrap ">
      {/* {carImage.length===0 && <NoImage/>} */}
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

const NoImage=()=>{
  return (
    <div className="w-full bg-yellow-400 text-black text-xl flex items-center flex-col justify-center  rounded">
      <BsExclamationOctagon />
      <p>لاتوجد صور للسيارة</p>
    </div>
  );
}