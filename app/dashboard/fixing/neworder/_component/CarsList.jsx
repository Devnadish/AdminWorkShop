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
      className="h-full w-full  max-w-[300px] bg-accent shadow p-5 border-t-4 border-primary "
      dir="RTL"
    >
      <RadioGroup dir="RTL" onValueChange={setCarid}>
        {carData.map((client) => (
          <>
            <div className="flex items-center gap-1 px-3">
              <User />
              <h2 className="text-bold px-2">{client.clientName}</h2>
            </div>
            <Separator className="bg-secondary mb-1" />
            {client.cars.map((car) => (
              <div
                key={car.id}
                className="flex items-center justify-between gap-2 w-full"
              >
                <div className="flex items-center gap-4 justify-between py-1 pr-6 px-4 w-full">
                  <div
                    className="flex items-center gap-2 bg-card/30 w-full justify-between p-1 text-card-foreground hover:bg-secondary/30 hover:border border-border"
                    onClick={() => handleCheck(car.CarNo, car.id)}
                  >
                    <p>{car.carName}</p>
                    <div className="flex items-center bg-secondary/10 justify-between rounded-md px-3 gap-2 min-w-36">
                      <Car className="text-secondary-foreground" />
                      <div className="flex items-center gap-2 text-secondary-foreground">
                        <Label htmlFor={car.CarNo}>{car.CarNo}</Label>
                        <RadioGroupItem
                          value={car.CarNo}
                          id={car.CarNo}
                          className="text-destructive-foreground bg-destructive h-4 w-7"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        ))}
      </RadioGroup>
    </ScrollArea>
  );
});
CarsList.displayName = 'CarsList';
export default CarsList;
