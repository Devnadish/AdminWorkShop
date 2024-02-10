import { Title } from '@/components/sharedcompnent/Title';

export const CardDetail = ({
  clientId, clientName, detail, delivery, engName,
}) => {
  return (
    <div className="flex items-center w-full flex-col gap-1 justify-start bg-accent py-2">
      <div className="flex items-center gap-4 w-full">
        <Title title={"رقم العميل"} dataX={clientId} />
        <Title title={"اسم العميل"} dataX={clientName} />
      </div>
      <div className="flex items-center gap-4 w-full">
        <Title title={"موعد التسليم"} dataX={delivery} />
        <Title title={"المهندس"} dataX={engName} />
      </div>

      <div className="flex items-center gap-4 w-full">
        <Title title={"الخدمة المطلوبة"} dataX={detail} />

      </div>
    </div>
  );
};
