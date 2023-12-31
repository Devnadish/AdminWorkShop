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
} from "@/db/dashboard";

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
  const ExpenceArraySum = calculateSumOfAmounts(MaintenanceExpensesArray);
  const MangmentExpArraySum = calculateSumOfAmounts(MangmenteExpensesArray);

  //  const analytics = useAnalytics();
  return (
    // <main>
    <main className=" flex  flex-wrap   gap-4 items-start justify-center p-4   w-full   ">

      <InfoBox title="ملخص النقدية" tileIcon={<Receipt />} footer={net}>
        <FininceInfo
          totalIncome={cardTotal}
          clientBalance={cardNet}
          reciptSum={reciptSum}
          mangmentExp={mangmentExp}
          fixingExp={fixingExp}
          // net={net}
        />
      </InfoBox>
      <InfoBox
        title="ايرادات العملاء"
        tileIcon={<Receipt />}
        footer={ReceptArraySum}
      >
        <ClientTransaction ReceptArray={ReceptArray} />
      </InfoBox>
      <InfoBox
        title="مصاريف تشغيلية"
        tileIcon={<Receipt />}
        footer={ExpenceArraySum}
      >
        <FixingExpenses MaintenanceExpensesArray={MaintenanceExpensesArray} />
      </InfoBox>
      <InfoBox
        title="مصاريف ادارية"
        tileIcon={<Receipt />}
        footer={MangmentExpArraySum}
      >
        <MangmentExpense MaintenanceExpensesArray={MangmenteExpensesArray} />
      </InfoBox>
      <InfoBoxWithNoBalance title="كروت الصيانة" tileIcon={<Wrench />}>
        <FixingInfo
          sumOf_OPEN_FixingCard={sumOf_OPEN_FixingCard}
          sumOf_CLOSED_FixingCard={sumOf_CLOSED_FixingCard}
          cardTotal={cardTotal}
          cardRecived={cardRecived}
          cardNet={cardNet}
        />
      </InfoBoxWithNoBalance>
      <InfoBoxWithNoBalance title="معلومات عامة" tileIcon={<Receipt />}>
        <GeneralInfo
          generalInfoData={generalInfoData}
          ClientActions={ClientActions}
        />
      </InfoBoxWithNoBalance>
    </main>
  );
}
