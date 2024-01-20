"use client"
import INPUT from "@/components/shared/INPUT";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Car, User, Search, Wrench } from "lucide-react"
function SelectOpenCard({ openCards, setCarId, carId, Client, setClient }) {

  const handleSelect = (car, cid, cname, fixId, fixAmt) => {
    setCarId(car)
    setClient({ claientId: cid, clientName: cname, fixOrederId: fixId, fixAmount: fixAmt })

  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full border p-1 rounded border-white/30  gap-1 bg-black">
      <INPUT icon={<Car />} roundedCorners="rounded-none" disabled value={carId} w="w-full md:w-1/3" />
      <INPUT icon={<Wrench />} roundedCorners="rounded-none" disabled value={Client.fixOrederId} w="w-full md:w-1/3" />
      <INPUT icon={<User />} roundedCorners="rounded-none" disabled value={Client.clientName} />

      <DropdownMenu>
        <DropdownMenuTrigger className="w-full" asChild>
          <Button variant="outline" className="text-black w-full md:w-[100px] p-0 rounded-none h-9 border">
            <Car size={18} />
            <Search />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[320px]">
          {/* <DropdownMenuLabel>My Account</DropdownMenuLabel> */}
          {openCards.map((option, index) => (
            <DropdownMenuItem key={option.id} onClick={() => { handleSelect(option.selectedCar, option.clientId, option.clientName, option.fixOrederId, option.fixOrederAmt) }} >
              <div className="flex items-center gap-4 w-full">
                <p className="w-[80px] bg-blue-600 text-white px-1 rounded">{option.selectedCar}</p>
                <p>{option.clientName}</p>
              </div>
            </DropdownMenuItem>
          ))}

          {/* <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub> */}
        </DropdownMenuContent>
      </DropdownMenu>

    </div>
  )
}

export default SelectOpenCard
