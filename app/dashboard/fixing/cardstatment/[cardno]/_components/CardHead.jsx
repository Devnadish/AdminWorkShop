import { JustDate } from '@/lib/timeanddate';
import { Title } from '@/components/sharedcompnent/Title';

export const CardHead = ({ fixingId, isClosed, createdDate, updatedDate, selectedCar }) => {
  return (
    <>
      <div className="flex w-full items-start justify-between gap-4 bg-accent p-4">
        <Title
          title={"رقم الكرت"}
          dataX={fixingId}
          color={"bg-primary text-primary-foreground"} />
        <Title title={"رقم السيارة"} dataX={selectedCar} />
        <Title
          title={"حالة الكرت"}
          dataX={isClosed ? "مغلق" : "مفتوح"}
          color={isClosed ? "bg-destructive " : "bg-primary"}
          textColor={isClosed ? "text-destructive-foreground " : "text-primary-foreground"} />
        <Title title={"تاريخة"} dataX={JustDate(createdDate)} />
        <Title title={"اخر تعديل"} dataX={JustDate(updatedDate)} />
      </div>
    </>
  );
};
