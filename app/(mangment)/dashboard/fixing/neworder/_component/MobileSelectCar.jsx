"use client";
import INPUT from "@/components/shared/INPUT";
import { CarIcon, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { User } from "@/lib/icons";

const MobileSelectCar = () => {
  return (
    <>
      <div className="absolute -top-2 right-3 px-3 rounded bg-yellow-300 text-black">
        معلومات السيارة
      </div>
      <div className="flex items-center justify-between gap-3 flex-1">
        <INPUT
          placeholder="Car Plate Number"
          name="car"
          icon={<CarIcon />}
          value={Carid}
          onChange={(e) => setCarid(e.target.value)}
          iconBgColor="bg-systemColor-required" />

        <Button
          onClick={() => handleGetCar()}
          className="text-white bg-green-600 rounded"
        >
          <CheckCircle size={24} />
        </Button>
      </div>
      <div className="flex items-center justify-between w-full gap-4">
        <div className="flex items-center gap-3 border p-1 w-full rounded border-white/40 text-white/60 ">
          <User />
          <span>{ClientName}</span>
        </div>

        <Button variant="ghost" onClick={() => setIsShow(true)}>
          <Search size={24} />
        </Button>
      </div>
    </>
  );
};
