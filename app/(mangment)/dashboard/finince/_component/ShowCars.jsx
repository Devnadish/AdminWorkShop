import { Wrench } from 'lucide-react';
import { getTimeElapsed } from "@/lib/timeanddate";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Car,User } from '@/lib/icons';
import { Separator } from '@/components/ui/separator';
import ActionBtn from './ActionBtn';

export const ShowCars = ({ card,type }) => {
  return (
    <Card className={`w-[350px] border-t-8 ${type==="payment" ?  "border-red-500":  "border-green-500"} `} dir="RTL">
      <CardHeader className="flex items-center justify-between w-full  shadow-lg py-3 mb-3 ">
      <div className='w-full flex items-baseline justify-between'>
      
        <div className="flex items-end gap-2 rounded bg-yellow-300 px-6 text-black py-1 shadow-lg">
          <Wrench size={20} strokeWidth={1} />
          <p>
            <span className="rounded">{card.FixNo}</span>
          </p>
        </div>
        <p className='text-sm'>{getTimeElapsed(card.crdate)}</p>
        </div>

        <div className='w-full flex items-baseline justify-between'>
          <div className="flex gap-2 items-center ">
            <User size={20} strokeWidth={1} />
            <span>{card.clientName}</span>
          </div>
          <div className="flex gap-2 items-center bg-blue-300 py-1 px-3 rounded-lg border border-blue-900">
            <Car size={20} strokeWidth={1} className='text-blue-900'/>
            
            <span className='text-blue-900'>{card.selectedCar}</span>
          </div>
        </div>
      </CardHeader>
      {/* <Separator className="h-0.5 bg-black/30 mb-1" /> */}

      <CardContent>
      
          
             <div className="flex items-start justify-start gap-1 flex-col  w-full">
               <p className="py-1 text-right px-2 bg-blue-800 order-4 text-white w-full flex items-center justify-between rounded-md">
                 <span>اجمالي الكرت</span>
                 <span className="text-lg font-bold py-1 px-3 ">
                   {card.fixOrederAmt}
                 </span>
               </p>
               <p className="py-1 text-right px-2 bg-blue-800 order-4 text-white w-full flex items-center justify-between rounded-md">
                 <span> المستلم</span>
                 <span className="text-lg font-bold py-1 px-3 ">
                   {card.totalRecipt}
                 </span>
               </p>
               <p className="py-1 text-right px-2 bg-blue-800 order-4 text-white w-full flex items-center justify-between rounded-md">
                 <span> المصروف</span>
               <span className="text-lg font-bold py-1 px-3 ">
                   {card.payment}
                 </span>
               </p>
               <p className="py-1 text-right px-2 bg-orange-800 order-4 text-white w-full flex items-center justify-between rounded-md">
                 <span> المتبقي</span>
               <span className="text-lg font-bold py-1 px-3 ">
                   {card.balance}
                 </span>
               </p>
             </div>
      </CardContent>
      <Separator className="h-0.5 bg-green-400 mb-3" />
      <CardFooter className="flex justify-between ">
      <ActionBtn fromID={card.clientId} fromName={card.clientName} fixingCode={card.FixNo} type={type} />
      </CardFooter>
    </Card>
 
  );
};


    
