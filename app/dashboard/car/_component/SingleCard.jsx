import React from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { User, Car } from "@/lib/icons";
import CardActions from "./CardActions";
import ShowDate from "@/components/shared/ShowDate";
import CardCpm from "@/components/sharedcompnent/CardCpm";
import IconWithdata from "@/components/sharedcompnent/IconWithdata";
import FastInfo from "@/components/sharedcompnent/FastInfo";

export const SingleCard = ({ car, clientData }) => {
  return (
    <>
      <CardCpm>
        {/* header */}
        <ShowDate create={car.createdDate} update={car.updatedDate} />
        <IconWithdata>
          <User size={20} strokeWidth={1.25} className="text-blue-500" />
          {car.clientName}
        </IconWithdata>
        <div className="flex items-center  justify-between gap-2">
          <IconWithdata>
            <Car size={40} strokeWidth={1.25} className="text-green-500 " />
            {car.CarNo}
          </IconWithdata>
          <Badge className="px-3 py-1 bg-secondary text-blue-500">
            {car.MasterCar ? "رئسية" : "فرعية"}
          </Badge>
        </div>
        <Separator />
        {/* content */}
        <div className="flex items-center justify-between">
          <FastInfo title={"الاسم"} data={car.carName}/>
          <FastInfo title={"الموديل"} data={car.Model }/>
          <FastInfo title={"الشاص"} data={car.BodyNo}/>
        </div>
        <Separator />
        <CardActions
          className="text-red-500 text-2xl h-6 w-6 cursor-pointer"
          id={car.id}
          clientData={clientData}
        />
      </CardCpm>
    </>
  );
};


