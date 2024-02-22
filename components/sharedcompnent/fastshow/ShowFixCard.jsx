"use client";

import { useState, useEffect } from "react";
import Caption from "../Caption";
import { getFixCardById } from "@/db/fixing";
import { JustDate } from "@/lib/timeanddate";
import ShowDate from "../ShowDate";
import { RowDiv } from "../RowDiv";

const ShowFixCard = ({ id }) => {
  const [card, setcard] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const cardData = await getFixCardById(id);
        setcard(cardData);
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
        create={card.createdDate}
        update={card.updatedDate}
      />
      <RowDiv>
        <Caption title={"رقم الكرت"} data={card.fixingId} w="w-fit" />
        <Caption title={"لوحة السيارة"} data={card.selectedCar} w="w-fit" />
        <Caption
          title={"حالة الكرت"}
          data={card.isClosed ? "مقفل" : "مفتوح"}
          w="w-fit"
        />
      </RowDiv>
      <RowDiv>
        <Caption title={"رقم العميل"} data={card.clientId} w="w-fit" />
        <Caption title={"اسم العميل"} data={card.clientName} w="w-fit" />
      </RowDiv>

      <Caption title={"المهندس"} data={card.engName} />
      <Caption title={"الصيانة المطلوبة"} data={card.detail} />
      <RowDiv>
        <Caption title={"الاجمالي"} data={card.total} w="w-fit" />
        <Caption title={"المستلم"} data={card.receive} w="w-fit" />
      </RowDiv>
      <RowDiv>
        <Caption
          title={" التسليم "}
          data={JustDate(card.deliveryTime)}
          w="w-fit"
        />
      </RowDiv>
    </div>
  );
};

export default ShowFixCard;
