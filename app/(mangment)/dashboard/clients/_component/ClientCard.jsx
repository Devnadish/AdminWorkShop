import DeleteClient from "@/app/(mangment)/dashboard/clients/_component/DeleteClient";
import { Button } from '@/components/ui/button';
import { Separator } from "@/components/ui/separator"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { User, Phone, AtSign, Car } from "lucide-react";

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
    <Card className="w-[300px] min-h-[250px] bg-gray-300 " dir="RTL">
      <CardHeader className="py-4">
        <CardTitle className="flex items-center gap-2 font">
          <User size={20} strokeWidth={1.25} className="text-blue-500" />
          {clientName}
        </CardTitle>
        <div className="flex items-center justify-between  gap-2">
          <CardDescription className="flex items-center gap-2 shadow-lg py-1 px-2 rounded-md border border-blue-400">
            <Phone size={20} strokeWidth={1.25} className="text-blue-500" />
            {phone}
          </CardDescription>
          <Button>اتصل</Button>
        </div>
        <div className="flex items-center justify-between  gap-2">
          <CardDescription className="flex items-center gap-2">
            <AtSign size={18} strokeWidth={1.25} className="text-blue-500" />
            {email}
          </CardDescription>
          {email && <Button>ارسال</Button>}
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="py-4">
        <div className="flex items-center justify-around  gap-4 ">
          <div className="flex gap-2">
            <Car size={20} strokeWidth={1.25} className="text-green-500" />
            <p className="text-sm">{carNo}</p>
          </div>

          <p className="text-sm">{carName}</p>
          <p className="text-sm bg-blue-500 text-white px-2 rounded-full">{CarCount}</p>
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="flex justify-between py-2">
        <DeleteClient
          className="text-red-500 text-2xl h-6 w-6 cursor-pointer"
          id={id}
        />
      </CardFooter>
    </Card>
  );
}
export default ClientCard;
