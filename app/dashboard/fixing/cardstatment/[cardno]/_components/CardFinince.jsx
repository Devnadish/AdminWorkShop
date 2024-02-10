import { Title } from '@/components/sharedcompnent/Title';

export const CardFinince = ({ total, receive, CardSum, ReciptSum, PaymentSum }) => {
  return (
    <div className="flex items-center justify-evenly gap-4 bg-accent py-2 w-full">
      <Title title={"اجمالي الكرت"} dataX={total} />
      {/* <Title title={"المستلم"} dataX={receive} /> */}
      <Title title={" المستلم"} dataX={ReciptSum} />
      <Title title={" المصروف"} dataX={PaymentSum} />
      <Title
        title={"رصيد الكرت"}
        dataX={CardSum}
        color={CardSum >= 0 ? "bg-green-500" : "bg-red-500"} />
    </div>
  );
};
