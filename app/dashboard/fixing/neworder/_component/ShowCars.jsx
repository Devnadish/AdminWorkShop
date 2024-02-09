"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle
} from "@/components/ui/drawer";

const ShowCars = ({ isShow, carData, setIsShow }) => {
  return (
    <>
      <div>
        <Drawer open={isShow} onOpenChange={setIsShow}>
          <DrawerContent>
            <div className="mx-auto w-full p-6 ">
              <DrawerHeader>
                <DrawerTitle>
                  <p className="w-full text-right ">عرض سيارات العملاء</p>
                </DrawerTitle>
              </DrawerHeader>
              <div className="border border-black/30 p-2 max-h-48 overflow-y-auto">
                {Object.entries(carData).map(([clientName, cars]) => (
                  <div key={clientName}>
                    <h2 className="bg-green-500">{clientName}</h2>
                    <ul className="flex flex-col gap-2 w-full">
                      {cars.map((car) => (
                        <div
                          key={car.id}
                          className="flex items-center justify-between gap-2 w-full "
                        >
                          <div className="flex items-center gap-4 justify-end  py-1 ">
                            <li className="bg-green-200 px-4 rounded-full py-1">
                              {car.CarNo}
                            </li>
                            <li>{car.carName}</li>
                          </div>
                          <Button
                            className="border-green-400 border"
                            onClick={() => {
                              navigator.clipboard.writeText(car.CarNo);
                            }}
                            variant="outline"
                          >
                            نسخ
                          </Button>
                        </div>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <DrawerFooter>
                <DrawerClose asChild>
                  <Button
                    onClick={() => {
                      setIsShow(false);
                    }}
                    variant="outline"
                  >
                    اغلاق
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};
