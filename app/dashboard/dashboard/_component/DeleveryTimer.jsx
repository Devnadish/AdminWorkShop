"use client";
import FastInfo from "@/components/sharedcompnent/FastInfo";
import { useEffect, useState } from "react";
const DeleveryTimer = ({ deleveryTime }) => {
  const [timeEnd, setTimeEnd] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date(deleveryTime);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setTimeEnd(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const stylex =
    "border-b border-border flex items-center gap-1 px-1 text-[.7rem]";
  return (
    <div className="flex items-center justify-between gap-1 w-full">
      {timeEnd && <TimeUp/>}
    <div className="flex items-center gap-1 justify-center flex-grow border border-border w-fit  bg-accent">
      <FastInfo title={"يوم"} data={days} gap="gap-0" w="w-fit" />
      <FastInfo title={"ساعة"} data={hours} gap="gap-0" w="w-fit" />
      <FastInfo title={"دقيقة"} data={minutes} gap="gap-0" w="w-fit" />
      <FastInfo title={"ثانية"} data={seconds} gap="gap-0" w="w-fit" />
    </div>
    </div>
  );
};

export default DeleveryTimer;
const TimeUp = () => {
  return (
    <div className="bg-destructive text-destructive-foreground border border-red-600 w-full flex justify-center items-center">
      TIME UP 
    </div>
  );
};
