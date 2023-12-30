import React from "react";

const GeneralInfo = ({ generalInfoData, ClientActions }) => {
  return (
    <div className="text-white flex-col flex items-center justify-evenly    w-full h-full px-3">
      <div className="flex items-center justify-between w-full text-white ">
        <p>اجمالي التعليقعات </p>
        <p>{ClientActions.visibleComments}</p>
      </div>

      <div className="flex items-center justify-between w-full text-white  rounded  ">
        <p>عدد الاقتراحات</p>
        <p>{ClientActions.visibleSuggestions}</p>
      </div>
      <div className="flex items-center justify-between w-full text-white rounded ">
        <p>عدد الشكاوي</p>
        <p>{ClientActions.visibleComplains}</p>
      </div>

      <div className="flex items-center justify-between w-full  ">
        <p>عدد العملاء</p>
        <p>{generalInfoData.ClientRecord}</p>
      </div>

      <div className="flex items-center justify-between w-full ">
        <p>عدد السيارات </p>
        <p>{generalInfoData.CartRecord}</p>
      </div>
      <div className="flex items-center justify-between w-full  ">
        <p>عدد كروت الصيانة</p>
        <p>{generalInfoData.fixingOrdertRecord}</p>
      </div>

      <div className="flex items-center justify-between w-full  rounded py-1">
        <p>عدد الكروت المفتوحة</p>
        <p>{generalInfoData.openFixingOrdertRecord}</p>
      </div>
      <div className="flex items-center justify-between w-full  rounded py-1">
        <p>عدد سندات القبض</p>
        <p>{generalInfoData.RecietVouchertRecord}</p>
      </div>
      <div className="flex items-center justify-between w-full  rounded py-1">
        <p>عدد سندات الصرف</p>
        <p>{generalInfoData.PaymentVouchertRecord}</p>
      </div>
    </div>
  );
};
export default GeneralInfo;
