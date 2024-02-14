import { getCardByCardID } from '@/db/fixing'
import { CardTranscation } from './_components/CardTranscation';
import { ArrangeTranaction } from './_components/lib';
import { CardFinince } from './_components/CardFinince';
import { CardDetail } from './_components/CardDetail';
import { CardHead } from './_components/CardHead';


async function page({ params }) {

  const getCard = await getCardByCardID(parseInt(params.cardno));
  const transactionData=ArrangeTranaction(getCard.reciptData,getCard.paymentData)

  const data = getCard.cardData
  const Reciptdata = getCard.reciptData
  const paymentData = getCard.paymentData
  const ReciptSum = Reciptdata.reduce((sum, transaction) => sum + transaction.amount, 0);
  const PaymentSum = paymentData.reduce((sum, transaction) => sum + transaction.amount, 0);
  const CardSum = ReciptSum - PaymentSum
  if (!getCard.cardData) { return <div className='bg-primary px-8 py-3 rounded-md mt-10'>
    <span> لا بوجد  معلومات عن الكرت رقم </span>
    <span className='bg-sky-600 px-8 py-3 mr-4'>{params.cardno} </span>
    </div> }


  return (
      <div className="text-foreground flex flex-col  flex-wrap items-center gap-3 w-full justify-start max-w-5xl mt-5 ">
        <CardHead
          fixingId={data.fixingId}
          isClosed={data.isClosed}
          createdDate={data.createdDate}
          updatedDate={data.updatedDate}
          selectedCar={data.selectedCar}
        />
        <CardDetail
          clientId={data.clientId}
          clientName={data.clientName}
          detail={data.detail}
          delivery={data.delivery}
          engName={data.engName}
        />
        <CardFinince  total={data.total}  receive={data.receive}  ReciptSum={ReciptSum} PaymentSum={PaymentSum} CardSum={CardSum} />
        <CardTranscation tranaction={transactionData} ReciptSum={ReciptSum} PaymentSum={PaymentSum} CardSum={CardSum}/>
     
    </div>
  );

}

export default page

