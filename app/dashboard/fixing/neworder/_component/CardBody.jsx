"use client";
import { Textarea } from "@/components/ui/textarea";
import INPUT from "@/components/sharedcompnent/INPUT";
import { Car, User, MdOutlineEngineering, Timer } from "@/lib/icons";
import IconWithdata from "@/components/sharedcompnent/IconWithdata";
import DateComponent from "@/components/sharedcompnent/DateComponent";
import { Checkbox } from "@/components/ui/checkbox";

export const CardBody = ({
  carid,
  ClientName,
  ClientID,
  loading,
  setSelectedDate,
  selectedDate,
  alertchecked,
  setalertChecked,
}) => {
  return (
    <div className="flex items-center justify-between w-full flex-col  bg-background/30 p-3 px-3 ">
      <div className="flex items-center  flex-col w-full gap-2">
        {!loading ? (
          <Hd carid={carid} ClientName={ClientName} ClientID={ClientID} />
        ) : (
          <p>loading...</p>
        )}

        <Textarea
          placeholder="الخدمة المطلوبة"
          rows={3}
          name="serviceDescription"
          id="serviceDetail"
          className="border border-border rounded px-4 w-full resize-none bg-input"
        />
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between w-full">
          <INPUT
            placeholder="المهندس"
            name="engName"
            icon={<MdOutlineEngineering />}
          />
          <INPUT
            placeholder="موعد التسليم"
            name="deliveryDate"
            icon={<Timer strokeWidth={1.5} />}
          />
        </div>
        <div className="flex w-full gap-8">
          <DateComponent
            setSelectedDate={setSelectedDate}
            selectedDate={selectedDate}
          />
          <AlertForEnding
            alertchecked={alertchecked}
            setalertChecked={setalertChecked}
          />
        </div>
      </div>
    </div>
  );
};

const Hd = ({ carid, ClientName, ClientID }) => {
  return (
    <div className="w-full">
      <div
        className={`  flex w-fit items-center justify-start py-1  gap-4 px-3 rounded ${
          carid === "اختار السيارة"
            ? "bg-destructive animate-pulse"
            : "bg-background/40"
        }  text-white`}
      >
        <IconWithdata tooltip={"رقم لوحة السيارة"}>
          <Car />
          {carid}
        </IconWithdata>

        <div className="flex items-center gap-2">
          <User />
          <span className="bg-primary px-4">{ClientID}</span>
          <span>{ClientName}</span>
        </div>
      </div>
    </div>
  );
};

export function AlertForEnding({ alertchecked, setalertChecked }) {
  const handleCheckedChange = () => {
    setalertChecked(!alertchecked);
  };
  return (
    <div className="flex items-center space-x-2 gap-4">
      <Checkbox
        id="terms"
        checked={alertchecked}
        onCheckedChange={handleCheckedChange}
      />
      {alertchecked}
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        هل ترغب بعرض عداد الوقت في الصفحة الرئسية
      </label>
    </div>
  );
}
