// "use client"
import { Receipt, Wrench } from "lucide-react";
import InfoBox, {
  InfoBoxWithNoBalance,
} from "@/components/pagecomponent/back/dashboard/InfoBox";
import {
  calculateClientRecipts,
  calculateClientSums,
  SumsOfFixingCard,
  recietVoucher,
  mangmentExpenses,
  fixingExpenses,
  mangmentExpensesDetails,
  getRecordCounts,
  generalInfo,
  calculateClientPayment
} from "@/db/dashboard";
import { GiCash } from "react-icons/gi";
import { LiaCashRegisterSolid } from "react-icons/lia";
import { HiMiniUserGroup } from "react-icons/hi2";
import { FaTools } from "react-icons/fa";
import { GiOfficeChair } from "react-icons/gi";

import FixingInfo from "@/components/pagecomponent/back/dashboard/FixingInfo";
import ClientTransaction from "@/components/pagecomponent/back/dashboard/ClientTransaction";
import MangmentExpense from "@/components/pagecomponent/back/dashboard/MangmentExpense";
import FininceInfo from "@/components/pagecomponent/back/dashboard/FininceInfo";
import FixingExpenses from "@/components/pagecomponent/back/dashboard/FixingExpenses";
import GeneralInfo from "@/components/pagecomponent/back/dashboard/GeneralInfo";

export const dynamic = "force-dynamic";
export default async function Dashboard() {

  const MaintenanceExpensesArraydb = calculateClientSums();
  const MangmenteExpensesArraydb = mangmentExpensesDetails();

  const ReceptArraydb = calculateClientRecipts();
  const PaymentArraydb = calculateClientPayment();

  const sumOf_OPEN_FixingCarddb = SumsOfFixingCard(false);
  const sumOf_CLOSED_FixingCarddb = SumsOfFixingCard(true);

  const reciptSumdb = recietVoucher();
  const mangmentExpdb = mangmentExpenses();
  const fixingExpdb = fixingExpenses();
  const ClientActionsdb = getRecordCounts();
  const generalInfoDatadb = generalInfo();

  const [
    MaintenanceExpensesArray,
    MangmenteExpensesArray,
    ReceptArray,
    PaymentArray,
    sumOf_OPEN_FixingCard,
    sumOf_CLOSED_FixingCard,
    reciptSum,
    mangmentExp,
    fixingExp,
    ClientActions,
    generalInfoData,
  ] = await Promise.all([
    MaintenanceExpensesArraydb,
    MangmenteExpensesArraydb,
    ReceptArraydb,
    PaymentArraydb,
    sumOf_OPEN_FixingCarddb,
    sumOf_CLOSED_FixingCarddb,
    reciptSumdb,
    mangmentExpdb,
    fixingExpdb,
    ClientActionsdb,
    generalInfoDatadb,
  ]);

  const net = reciptSum - (mangmentExp + fixingExp);
  const cardTotal =
    sumOf_OPEN_FixingCard.totalSum + sumOf_CLOSED_FixingCard.totalSum;
  const cardRecived =
    sumOf_OPEN_FixingCard.receiveSum + sumOf_CLOSED_FixingCard.receiveSum;
  const cardNet = cardTotal - cardRecived;

  function calculateSumOfAmounts(ReceptArray) {
    let sum = 0;
    for (let i = 0; i < ReceptArray.length; i++) {
      sum += ReceptArray[i].amount;
    }
    return sum;
  }
  const ReceptArraySum = calculateSumOfAmounts(ReceptArray);
  const PaymentArraySum = calculateSumOfAmounts(PaymentArray);
  const ExpenceArraySum = calculateSumOfAmounts(MaintenanceExpensesArray);
  const MangmentExpArraySum = calculateSumOfAmounts(MangmenteExpensesArray);

  //  const analytics = useAnalytics();
  return (
    // <main>
    <div className="flex flex-col gap-4">


      {/* <InfoBox title="ملخص النقدية" tileIcon={<Receipt />} footer={net}> */}
        <FininceInfo
          totalIncome={cardTotal}
          clientBalance={cardNet}
          reciptSum={reciptSum}
          mangmentExp={mangmentExp}
          fixingExp={fixingExp}
         net={net}
        />
      {/* </InfoBox> */}




    <main className='mt-1 grid grid-cols-1 place-items-start gap-6 md:grid-cols-5 '>

      <InfoBox
        title=" اجمالي  سندات القبض  "
          tileIcon={<LiaCashRegisterSolid size={30} />}
        footer={ReceptArraySum}
      >
        <ClientTransaction ReceptArray={ReceptArray} />
      </InfoBox>
      <InfoBox
        title=" اجمالي   الصرف التشغيلية  "
          tileIcon={<FaTools size={30} />}
        footer={PaymentArraySum}
      >
        <ClientTransaction ReceptArray={PaymentArray} />
      </InfoBox>

      {/* <InfoBox
        title="مصاريف تشغيلية"
        tileIcon={<Receipt />}
        footer={ExpenceArraySum}
      >
        <FixingExpenses MaintenanceExpensesArray={MaintenanceExpensesArray} />
      </InfoBox> */}
      <InfoBox
        title="مصاريف ادارية"
          tileIcon={<GiOfficeChair size={30} />}
        footer={MangmentExpArraySum}
      >
        <MangmentExpense MaintenanceExpensesArray={MangmenteExpensesArray} />
      </InfoBox>
        <InfoBox title="كروت الصيانة" tileIcon={<HiMiniUserGroup size={30} />} footer={cardNet}>
        <FixingInfo
          sumOf_OPEN_FixingCard={sumOf_OPEN_FixingCard}
          sumOf_CLOSED_FixingCard={sumOf_CLOSED_FixingCard}
          cardTotal={cardTotal}
          cardRecived={cardRecived}
          cardNet={cardNet}
        />
      </InfoBox>
      <InfoBoxWithNoBalance title="معلومات عامة" >
        <GeneralInfo
          generalInfoData={generalInfoData}
          ClientActions={ClientActions}
        />
      </InfoBoxWithNoBalance>
    </main>
    </div>
  );
}
