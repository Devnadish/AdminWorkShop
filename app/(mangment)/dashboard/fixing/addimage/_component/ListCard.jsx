import { FixOrderImage } from "@/db/fixing";
import { Car, User } from "@/lib/icons";
import ImageCardAction from "./AddImages";
import AddImages from "./AddImages";
import ShowImages from "./ShowImages";
import Image from "next/image";
import PaymentIcon from "@/components/svgicon/PaymentIcon";
import NoImage from "@/components/svgicon/Noimage";

const ListCard = async () => {
    const cars=await FixOrderImage()
    return (
      <div className="flex text-white items-center justify-center flex-wrap  gap-6 px-3 ">
        {cars.map((car) => {
          return (
            <div
              key={car.id}
              className="flex items-center flex-col  justify-around bg-gray-500 w-44 h-52 border-t-4 border-gray-600  "
            >
              {car.coverImage ? (
                <div className=" relative w-[100px] h-[100px] bg-gray-400 rounded-full border-4 shadow-sm  ">
                  <Image
                    src={`https://res.cloudinary.com/dhyh7aufp/image/upload/q_auto,f_auto,w_300,h_200/${car.coverImage}`}
                    alt="Image from Cloudinary"
                    fill
                    className="w-[100px] h-[100px] bg-gray-400 rounded-full "
                  />
                </div>
              ) : (
                <div className=" flex items-center justify-center w-[100px] h-[100px] bg-gray-400 rounded-full ">
                  <NoImage color="rgba(0,0,0,.2)"  />
                </div>
              )}

              <div>
                <div className="flex items-center justify-center gap-2 bg-gray-600 w-26  px-3 rounded ">
                  <Car size={18} />
                  <p className=" text-sm text-center">{car.CarNo}</p>
                </div>
                <div className="flex items-center justify-center gap-2 ">
                  <User size={18} />
                  <p className=" text-sm text-center">{car.clientName}</p>
                </div>
              </div>
              <div className="flex items-center justify-between w-full">
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