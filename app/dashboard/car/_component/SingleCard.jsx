import React from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { User, Car } from "@/lib/icons";
import CardActions from "./CardActions";
import ShowDate from "@/components/sharedcompnent/ShowDate";
import CardCpm from "@/components/sharedcompnent/CardCpm";
import IconWithdata from "@/components/sharedcompnent/IconWithdata";
import FastInfo from "@/components/sharedcompnent/FastInfo";

export const SingleCard = ({ car, clientData }) => {
  return (
    <>
      <CardCpm minW="min-w-[200px]" h={"min-h-52"}>
        {/* header */}
        <div className="flex flex-col gap-1 items-start justify-center">
        <ShowDate create={car.createdDate} update={car.updatedDate} />
        <IconWithdata>
          <User size={20} strokeWidth={1.25} className="text-primary " />
          {car.clientName}
        </IconWithdata>
        <div className="flex items-center  justify-between gap-2 w-full">
          <IconWithdata>
            <Car size={40} strokeWidth={1.25} className="text-green-500 " />
            {car.CarNo}
          </IconWithdata>
          <Badge className="px-3 py-1 bg-primary text-primary-foreground">
            {car.MasterCar ? "رئسية" : "فرعية"}
          </Badge>
        </div>
        <Separator />
        {/* content */}
        <div className="flex items-center flex-col justify-between">
          <FastInfo title={"نوع السيارة"} data={car.carName} direction="flex-row"/>
          <FastInfo title={"الموديل"} data={car.Model } direction="flex-row"/>
          <FastInfo title={"الشاص"} data={car.BodyNo} direction="flex-row"/>
        </div>
        <Separator />
        <CardActions
          id={car.id}
          clientData={clientData}
        />
        </div>
      </CardCpm>
    </>
  );
};


