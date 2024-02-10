import { FixOrderImage } from "@/db/fixing";
import { Car, User } from "@/lib/icons";
import ImageCardAction from "./AddImages";
import AddImages from "./AddImages";
import ShowImages from "./ShowImages";
import Image from "next/image";
import NoImage from "@/components/svgicon/Noimage";
import IconWithdata from "@/components/sharedcompnent/IconWithdata";

const ListCard = async () => {
    const cars=await FixOrderImage()
    return (
      <div className="flex  items-center  justify-center flex-wrap  gap-6 ">
        {cars.map((car) => {
          return (
            <div
              key={car.id}
              className="flex items-center flex-col  rounded-md shadow-md justify-around bg-accent w-44 h-52 border-t-4 border-border hover:bg-accent/50  "
            >
              {car.coverImage ? (
                <div className=" relative w-[100px] h-[100px]  rounded-full border-4  shadow-sm  ">
                  <Image
                    src={`https://res.cloudinary.com/dhyh7aufp/image/upload/q_auto,f_auto,w_300,h_200/${car.coverImage}`}
                    alt="Image from Cloudinary"
                    fill
                    className="w-[100px] h-[100px]  rounded-full "
                  />
                </div>
              ) : (
                <div className=" flex items-center justify-center w-[100px] h-[100px] bg-secondary-foreground/30 rounded-full ">
                  <NoImage color="rgba(0,0,0,.2)"  />
                </div>
              )}

              <div className="flex w-full items-start flex-col justify-start ">
                <IconWithdata tooltip={"رقم السيارة"}>
                <Car size={18} />
                  {car.CarNo}
                </IconWithdata>
                <IconWithdata>
                <User size={18} />
                  {car.clientName}
                </IconWithdata>
              </div>
              <div className="flex items-center  bg-background/40 justify-between w-full p-1 ">
                <AddImages carId={car.CarNo} carImage={car.carImage.length} />
               {car.carImage.length !==0 && <ShowImages carId={car.CarNo} carImage={car.carImage} />}
              </div>
            </div>
          );
        })}
      </div>
    
    );
  };
  export default ListCard