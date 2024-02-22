"use client";

import { useState, useEffect } from "react";
import Caption from "../Caption";
import { JustDate } from "@/lib/timeanddate";
import ShowDate from "../ShowDate";
import { RowDiv } from "../RowDiv";
import { getCarById } from "@/db/cars";

const ShowCar = ({ id }) => {
  const [car, setcar] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const carData = await getCarById(id);
        setcar(carData);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <p>جلب المعلومات ...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="flex w-full items-center justify-start flex-col gap-5">
      <ShowDate
        create={car.createdDate}
        update={car.updatedDate}
      />
      <RowDiv>
        <Caption title={"لوحة السيارة"} data={car.CarNo} w="w-fit" />
        <Caption
          title={"التصنيف"}
          data={car.MasterCar ? "رئسية" : "فرعية"}
          w="w-fit"
        />
      </RowDiv>
        <Caption title={"اسم السيارة"} data={car.carName}  />
     
      <RowDiv>
        <Caption title={"رقم الهيكل"} data={car.BodyNo} w="w-fit" />
        <Caption title={"الموديل"} data={car.Model} w="w-fit" />
      </RowDiv>

     
      <RowDiv>
        <Caption title={"رقم العميل"} data={car.clientId} w="w-fit" />
        <Caption title={"hsl hguldg"} data={car.clientName} w="w-fit" />
      </RowDiv>
     
    </div>
  );
};

export default ShowCar;
