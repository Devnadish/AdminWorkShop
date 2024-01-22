import React from "react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User,  Car } from "@/lib/icons";
import CardActions from "./CardActions";

const CarsCard = ({ cars,clientData }) => {
  return (
    <div className="grid grid-cols-1 place-items-start gap-6 md:grid-cols-4 ">
      {cars.map((car) => {
        return <SingleCard key={car.id} car={car} clientData={clientData}/>;
      })}
    </div>
  );
};
export default CarsCard;

const SingleCard = ({ car,clientData }) => {
  return (
    <Card
      className="w-[300px] min-h-[150px] flex flex-col justify-between"
      dir="RTL"
    >
      <CardHeader className="py-1">
      <div className="flex items-center  justify-between gap-2">
        <div className="flex items-center gap-2">
          <Car size={40} strokeWidth={1.25} className="text-green-500" />
          <CardTitle className="flex items-center gap-2 font">
            {car.CarNo}
          </CardTitle>
        </div>
        <Badge className="px-3 py-1 bg-blue-200 text-blue-500" >{car.MasterCar ? "رئسية" : "فرعية"}</Badge>
        </div>

        <div className="flex items-center justify-between  gap-2">
          <CardDescription className="flex items-center gap-2 text-sm py-1 px-2  ">
            <User size={20} strokeWidth={1.25} className="text-blue-500" />
            {car.clientName}
          </CardDescription>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="py-2">
        <div className="flex  gap-4">
          <Badge
            variant="outline"
            className="bg-blue-500 text-white px-4 py-1 "
          >
            {" "}
            {car.carName || "?"}
          </Badge>
          <Badge
            variant="secondary"
            className="bg-blue-500 text-white px-4 py-1"
          >
            {" "}
            {car.Model || "?"}
          </Badge>
          <Badge
            variant="secondary"
            className="bg-blue-500 text-white px-4 py-1"
          >
            {" "}
            {car.BodyNo || "?"}
          </Badge>
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="flex justify-between py-4">
        <CardActions
          className="text-red-500 text-2xl h-6 w-6 cursor-pointer"
          id={car.id}
          clientData={clientData}

        />
      </CardFooter>
    </Card>
  );
};
