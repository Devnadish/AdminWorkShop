import { JustDate } from '@/lib/timeanddate';
import { Title } from '@/components/sharedcompnent/Title';

export const CardHead = ({ fixingId, isClosed, createdDate, updatedDate, selectedCar }) => {
  return (
    <>
      <div className="flex w-full items-start justify-between gap-4 bg-accent p-4">
        <Title
          title={"رقم الكرت"}
          dataX={fixingId}
          color={"bg-yellow-300 text-black"} />
        <Title title={"رقم السيارة"} dataX={selectedCar} />
        <Title
          title={"حالة الكرت"}
          dataX={isClosed ? "مفتوح" : "مغلق"}
          color={isClosed ? "bg-red-800" : "bg-green-400"} />
        <Title title={"تاريخة"} dataX={JustDate(createdDate)} />
        <Title title={"اخر تعديل"} dataX={JustDate(updatedDate)} />
      </div>
    </>
  );
};
