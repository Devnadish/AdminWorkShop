const FixingInfo = ({
  sumOf_OPEN_FixingCard,
  sumOf_CLOSED_FixingCard,
  cardTotal,
  cardRecived,
  cardNet,
}) => {
  return (
    <div className="text-black flex-col   flex items-center justify-between   text-black   gap-3 w-full ">

      <div className="w-full  text-white flex flex-col gap-2  rounded ">
        <div className="bg-yellow-300 text-black text-lg font-tajawal text-lg flex items-center justify-between w-fit gap-4 ">
          <p> المفتوحة</p>
          <p className="bg-red-600 text-white  px-1">
            {sumOf_OPEN_FixingCard.recordCount}
          </p>
        </div>

        <div className="flex items-center justify-between w-full  px-3 ">
          <p>الاجمالي العام </p>
          <p>{sumOf_OPEN_FixingCard.totalSum}</p>
        </div>

        <div className="flex items-center justify-between w-full  px-3 ">
          <p> المستلم </p>
          <p className="flex items-center justify-center ">
            {sumOf_OPEN_FixingCard.receiveSum}
          </p>
        </div>

        <div className="flex items-center justify-between w-full  px-3 ">
          <p>المتبقي </p>
          <p>{sumOf_OPEN_FixingCard.remaining}</p>
        </div>
      </div>

      <div className="w-full  text-black flex flex-col gap-2  ">
        <div className="bg-yellow-300 text-black text-lg font-tajawal text-lg flex items-center justify-between w-fit gap-4   ">
          <p>المغلقة</p>
          <p className="bg-red-600 text-white  px-3 ">
            {sumOf_CLOSED_FixingCard.recordCount}
          </p>
        </div>
        <div className="flex items-center justify-between w-full text-white px-3 ">
          <p>الاجمالي العام </p>
          <p>{sumOf_CLOSED_FixingCard.totalSum}</p>
        </div>

        <div className="flex items-center justify-between w-full text-white px-3 ">
          <p>الاجمالي المستلم </p>
          <p>{sumOf_CLOSED_FixingCard.receiveSum}</p>
        </div>

        <div className="flex items-center justify-between w-full text-white px-3 ">
          <p>الاجمالي العام </p>
          <p>{sumOf_CLOSED_FixingCard.remaining}</p>
        </div>
      </div>


    </div>
  );
};
export default FixingInfo;
