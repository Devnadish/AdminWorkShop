import { getCardByCardID } from '@/db/fixing'
import { getTimeElapsed } from '@/lib/timeanddate';
import React from 'react'


async function page({ params }) {

  const getCard = await getCardByCardID(parseInt(params.cardno));
  const data = getCard.cardData
  const Reciptdata = getCard.reciptData
  const paymentData = getCard.paymentData
  const ReciptSum = Reciptdata.reduce((sum, transaction) => sum + transaction.amount, 0);
  const PaymentSum = paymentData.reduce((sum, transaction) => sum + transaction.amount, 0);
  const CardSum = ReciptSum - PaymentSum
  if (!getCard.cardData) { return <div className='bg-sky-500 px-8 py-3 rounded-md mt-10'>
    <span> لا بوجد  معلومات عن الكرت رقم </span>
    <span className='bg-sky-600 px-8 py-3 mr-4'>{params.cardno} </span>
    </div> }


  return (
    <div className="w-full flex w-full items-center flex-col justify-center gap-8 h-svh overflow-y-hidden">
      <div className="text-white flex flex-col md:flex-row flex-wrap items-center gap-4 w-full justify-center  ">
        <div className="flex items-center gap-4 border border-white/15 p-4">
          <Title
            title={"رقم الكرت"}
            dataX={data.fixingId}
            color={"bg-yellow-300 text-black"}
          />
          <Title title={"رقم العميل"} dataX={data.clientId} />
          <Title title={"اسم العميل"} dataX={data.clientName} />
          <Title title={"رقم السيارة"} dataX={data.selectedCar} />
        </div>
        <div className="flex items-center gap-4 border border-white/15 p-4">
          <Title title={"الخدمة المطلوبة"} dataX={data.detail} />
          <Title title={"موعد التسليم"} dataX={data.delivery} />
          <Title title={"المهندس"} dataX={data.engName} />
        </div>
        <div className="flex items-center gap-4 border border-white/15 p-4">
          <Title title={"اجمالي الكرت"} dataX={data.total} />
          <Title title={"المستلم"} dataX={data.receive} />
          <Title title={"رصيد الكرت"} dataX={CardSum} color={CardSum >= 0 ? 'bg-green-500' : 'bg-red-500' }/>

          <Title
            title={"حالة الكرت"}
            dataX={data.isClosed ? "مفتوح" : "مغلق"}
            color={data.isClosed ? "bg-red-800" : "bg-green-400"}
          />
        </div>
        <div className="flex items-center gap-4 border border-white/15 p-4">
          <Title title={"تاريخة"} dataX={getTimeElapsed(data.createdDate)} />
          <Title title={"اخر تعديل"} dataX={getTimeElapsed(data.updatedDate)} />
        </div>
      </div>
      <div className='flex  items-start justify-start gap-16'>
        <ShowTranaction Tranaction={Reciptdata} title={"سندات قبض"} type={"reciet"} sum={ReciptSum}/>
        <ShowTranaction Tranaction={paymentData} title={"سندات الصرف"} type={"payment"} sum={PaymentSum}/>
      </div>
    </div>
  );

}

export default page
const Title = ({ title, dataX, color = "bg-sky-800" }) => {
  return (
    <>
      <div className="border rounded-md   flex items-center gap-3 border-white/30">
        <span className={`${color} px-3 py-1`}>{title}</span>
        <span className=" px-3 py-1">{dataX}</span>
      </div>
    </>
  );
};





const ShowTranaction = ({ Tranaction, title,type ,sum}) => {


  return (
    <div className='w-[300px] border rounded-md overflow-hidden border-white/30'>
      <p className="bg-sky-800 px-4 py-1  w-full flex items-center justify-center text-xl">{title}</p>

      <div className="bg-gray-600 px-4 py-1  w-full flex items-center justify-between">
        <ul className='flex  items-center gap-4 w-full justify-between'>
          <li className=" first-line: px-4 py-1 w-20 text-center flex-1">
            <span>الرقم</span>
          </li>
          <li className=" px-4 py-1  w-20 text-center flex-1">
            <span>المبلغ</span>
          </li>
        </ul>
      </div>

      <div className='flex flex-col gap-2 w-full'>
        {Tranaction.map((el) => {
          return (
            <ul key={el.id} className='flex  items-center gap-4 w-full justify-between'>
              <li className="bg-gray-500 px-4 py-1 w-20 text-center flex-1">
                {type === "reciet" ? el.recietId : el.paymentId}
              </li>
              <li className="bg-gray-500 px-4 py-1  w-20 text-center flex-1">
                {el.amount}
              </li>
            </ul>
          );
        })}
      </div>

      <div className="bg-gray-600 px-4 py-1  w-full flex items-center justify-between">
        <ul className='flex  items-center gap-4 w-full justify-between'>
          <li className=" px-4 py-1 w-20 text-center flex-1">
            <span>الاجمالي</span>
          </li>
          <li className=" px-4 py-1  w-20 text-center flex-1">
            <span>{sum}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
