import DeleteClient from "@/app/dashboard/clients/new/_component/ClientCardAction";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User, Phone, AtSign, Car } from "lucide-react";
import CardCpm from "@/components/sharedcompnent/CardCpm";
import IconWithdata from "@/components/sharedcompnent/IconWithdata";
import CallClient from "@/components/sharedcompnent/CallClient";
import MailClient from "@/components/sharedcompnent/MailClient";
import ClientCarAction from "@/app/dashboard/clients/new/_component/ClientCardAction";
import ClientCardAction from "@/app/dashboard/clients/new/_component/ClientCardAction";

function ClientCard({
  clientName,
  phone,
  email,
  carNo,
  carName,
  CarCount,
  id,
}) {
  return (
    <>
      <CardCpm>
        {/* header */}
        <div className="flex justify-between items-center flex-col w-full">
          <div className="flex flex-col gap-2 w-full">
            <IconWithdata tooltip={"العميل"}>
              <User size={20} strokeWidth={1.25} className="text-blue-500" />
              {clientName}
            </IconWithdata>
            <div className="flex items-center justify-between">
              <IconWithdata>
                <Phone size={20} strokeWidth={1.25} className="text-blue-500" />
                {phone}
              </IconWithdata>
              <CallClient phone={phone} />
            </div>
            <div className="flex items-center justify-between">
              <IconWithdata>
                <AtSign
                  size={20}
                  strokeWidth={1.25}
                  className="text-blue-500"
                />
                {email}
              </IconWithdata>
              <MailClient phone={phone} />
            </div>
          </div>
          <Separator className="my-4" />
          {/* body */}
          <div className="flex items-center justify-between w-full  gap-4 py-4 ">
            <IconWithdata tooltip={"رقم اللوحة"}>
              <Car size={20} strokeWidth={1.25} className="text-green-500" />
              <p className="text-sm">{carNo}</p>
            </IconWithdata>
            <p className="text-sm">{carName}</p>
            <p className="text-sm bg-blue-500 text-white px-2 rounded-full">
              {CarCount}
            </p>
          </div>
          {/* footer */}
        </div>
          <ClientCardAction id={id} />
      </CardCpm>
    </>
  );
}
export default ClientCard;
