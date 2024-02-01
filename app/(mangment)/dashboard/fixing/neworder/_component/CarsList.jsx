"use client";
import { memo } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Car, User } from "@/lib/icons";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";

const CarsList = memo(({ setCarid, carData, handleCheck }) => {
  return (
    <ScrollArea
      className="h-full w-full  max-w-[300px] bg-gray-600 shadow-lg p-5 border-t-4 border-green-500"
      dir="RTL"
    >
      <RadioGroup dir="RTL" onValueChange={setCarid}>
        {carData.map((client) => (
          <div key={client.clientName}>
            <div className="flex items-center gap-1 px-3">
              <User />
              <h2 className="text-bold px-2">{client.clientName}</h2>
            </div>
            <Separator className="bg-white/30" />
            {client.cars.map((car) => (
              <div
                key={car.id}
                className="flex items-center justify-between gap-2 w-full"
              >
                <div className="flex items-center gap-4 justify-between py-1 pr-6 px-4 w-full">
                  <div
                    className="flex items-center gap-2 bg-gray-500/80 w-full justify-between p-1 text-white hover:bg-gray-200/30"
                    onClick={() => handleCheck(car.CarNo,car.id)}
                  >
                    <p>{car.carName}</p>
                    <div className="flex items-center bg-gray-400 justify-between rounded-md px-3 gap-2 min-w-36">
                      <Car className="text-green-600" />
                      <div className="flex items-center gap-2 text-black">
                        <Label htmlFor={car.CarNo}>{car.CarNo}</Label>
                        <RadioGroupItem
                          value={car.CarNo}
                          id={car.CarNo}
                          className="text-white bg-green-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </RadioGroup>
    </ScrollArea>
  );
});
CarsList.displayName = 'CarsList';
export default CarsList;
