"use client";
import ShowDate from "@/components/shared/ShowDate";
import IconWithdata from "@/components/sharedcompnent/IconWithdata";
import { Button } from "@/components/ui/button";
import {
  Car,
  GiCash,
  LiaCashRegisterSolid,
  MdCarCrash,
  MdOutlineEngineering,
  PiEngineDuotone,
  Scale,
  StickyNote,
  TfiGallery,
  Timer,
  User,
} from "@/lib/icons";

export const DisplayFixCard = ({ CardData }) => {
  const net = CardData.total - CardData.discount - CardData.receive;
  return (
    <div className="flex flex-col gap-2">
      {/* general info */}
      <div className="flex flex-col items-start justify-start gap-2 w-full border-primary px-3 rounded-md py-3 border">
        <p className="text-xl font-tajwal font-bold border-b-2 border-primary ">
          معلومات الكرت
        </p>
        <ShowDate create={CardData.createdDate} update={CardData.updatedDate} />
        <IconWithdata tooltip={"رقم الكرت"}>
          <MdCarCrash />
         {CardData.fixingId}
        </IconWithdata>

        <div className="flex w-full items-center justify-between">
          <IconWithdata tooltip={"موعد التسليم"}>
            <Timer />
            {CardData.delivery}
          </IconWithdata>
          <IconWithdata tooltip={"المهندس"}>
            <MdOutlineEngineering />
            {CardData.engName}
          </IconWithdata>
        </div>


       

        <IconWithdata tooltip={"الصيانة المطلوبة"}>
          <PiEngineDuotone />
          {CardData.detail}
        </IconWithdata>
      </div>

      <div className="flex flex-col items-start justify-start gap-1 w-full border-green-800 px-3 rounded-md py-3 border">
        <p className="text-xl font-tajwal font-bold border-b-4 border-green-600 ">
          معلومات السيارة
        </p>
        <div className="flex items-center justify-between">
        <IconWithdata tooltip={"لوحة السيارة"}>
          <Car />
         {CardData.selectedCar}
        </IconWithdata>

        <IconWithdata tooltip={"العميل"}>
          <User />
          {CardData.clientName}
        </IconWithdata>
      </div>
      </div>

      <div className="flex flex-col items-start justify-between gap-1 w-full border-blue-600 px-3 rounded-md py-3 border">
        <p className="text-xl font-tajwal font-bold border-b-4 border-blue-600 ">
          معلومات مالية
        </p>
        <div className="flex items-center justify-between w-full gap-4 flex-wrap">
          <IconWithdata tooltip={"قيمة الكرت"}>
            <GiCash />
            {CardData.total}
          </IconWithdata>
          <IconWithdata tooltip={"المستلم"}>
            <LiaCashRegisterSolid />
            {CardData.receive}
          </IconWithdata>
          <IconWithdata tooltip={"المتبقي"}>
            <Scale />
            {net}
          </IconWithdata>
        </div>
      </div>
      <div className="flex items-center justify-end gap-2 w-full  px-3    ">
            <Button  className="bg-popover text-accent-foreground"><StickyNote/> </Button>
            <Button className="bg-popover text-accent-foreground"><TfiGallery/> </Button>
      </div>
    </div>
  );
};
