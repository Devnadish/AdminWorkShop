import InfoBox from "@/app/dashboard/admin/_component/InfoBox";
import { summury } from "@/db/dashboard";
import { LiaCashRegisterSolid } from "react-icons/lia";
import { FaTools } from "react-icons/fa";
import { GiOfficeChair } from "react-icons/gi";

import ClientTransaction from "@/app/dashboard/admin/_component/ClientTransaction";
import MangmentExpense from "@/app/dashboard/admin/_component/MangmentExpense";
import FininceInfo from "@/app/dashboard/admin/_component/FininceInfo";
import GeneralInfo from "@/app/dashboard/dashboard/_component/GeneralInfo";
import {  MdCarCrash } from "@/lib/icons";
import FixingInfo from "../dashboard/_component/FixingInfo";

export const dynamic = "force-dynamic";
export default async function Dashboard() {
  const admin = await summury();
  return (
    <div className="flex flex-col gap-4  max-w-5xl ">
      <FininceInfo
        totalIncome={admin.incomeTotal}
        reciptSum={admin.reciptTotal}
        fixingExp={admin.fixPaymentTotal}
        mangmentExp={admin.mangmentPaymentTotal}
        clientBalance={admin.clientBalance}
      />

      <main className='mt-5 grid grid-cols-1 place-items-start gap-6 md:grid-cols-5'>
      <InfoBox title={"كروت الصيانة"} tileIcon={<MdCarCrash size={22} />} NotBalance={false}>
          <FixingInfo
            openRecords={admin.fixCardInfo.openLen}
            openCardTotals={admin.fixCardInfo.openTotal}
            openRecipt={admin.fixCardInfo.openReceived}
            closeRecords={admin.fixCardInfo.closeLen}
            closeCardTotals={admin.fixCardInfo.closeTotal}
            closeRecipt={admin.fixCardInfo.closeReceived}
          />
        </InfoBox>
        <InfoBox
          title="سندات القبض"
          tileIcon={<LiaCashRegisterSolid size={22} />}
          footer={admin.reciptSum}
        >
          <ClientTransaction ReceptArray={admin.reciptTranaction} />
        </InfoBox>

        <InfoBox
          title="مصاريف تشغيليه"
          tileIcon={<FaTools size={22} />}
          footer={admin.fixPaymentSum}
        >
          <ClientTransaction ReceptArray={admin.PaymentTranaction} />
        </InfoBox>

        <InfoBox
          title="مصاريف ادارية"
          tileIcon={<GiOfficeChair size={22} />}
          footer={admin.mangmentPaymentSum}
        >
          <MangmentExpense
            MaintenanceExpensesArray={admin.mangmentPaymentTranaction}
          />
        </InfoBox>

       

        <InfoBox NotBalance={false} title="معلومات عامة">
          <GeneralInfo
          count_client={admin.count_client}
          count_comment={admin.count_comment}
          count_complain={admin.count_complain}
          count_suggestion={admin.count_suggestion}
          count_Car={admin.count_Car}
          count_fixingOrder={admin.count_fixingOrder}
          count_PaymentVoucher={admin.count_PaymentVoucher}
          count_RecietVoucher={admin.count_RecietVoucher}
          />
        </InfoBox>




      </main>
    </div>
  );
}
