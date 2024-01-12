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


  const totalOpenCards = sumOf_OPEN_FixingCard.totalCardAmt
  const totalOpenRecipts = sumOf_OPEN_FixingCard.totalRecipt
  const totalOpenPayment = sumOf_OPEN_FixingCard.totalPayment

  const totalCloseCards = sumOf_CLOSED_FixingCard.totalCardAmt
  const totalCloseRecipts = sumOf_CLOSED_FixingCard.totalRecipt
  const totalClosePayment = sumOf_CLOSED_FixingCard.totalPayment
  const openCardNet = (totalOpenCards - totalOpenRecipts) + totalOpenPayment
  const closeCardNet = (totalCloseCards - totalCloseRecipts) + totalClosePayment






  const net = reciptSum - (mangmentExp + fixingExp);
  const cardTotal =
    sumOf_OPEN_FixingCard.totalCardAmt + sumOf_CLOSED_FixingCard.totalCardAmt;
  const cardRecived =
    sumOf_OPEN_FixingCard.totalRecipt + sumOf_CLOSED_FixingCard.totalRecipt;
  const cardPayment =
    sumOf_OPEN_FixingCard.totalPayment + sumOf_CLOSED_FixingCard.totalPayment;

  const cardNet = (cardTotal - cardRecived) + cardPayment;

  // const cardNet = cardTotal - cardRecived;

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

  return (
    <div className="flex flex-col gap-4  max-w-6xl ">


        <FininceInfo
          totalIncome={cardTotal}
          clientBalance={cardNet}
          reciptSum={reciptSum}
          mangmentExp={mangmentExp}
          fixingExp={fixingExp}
         net={net}
        />





    <main className='mt-1 grid grid-cols-1 place-items-start gap-6 md:grid-cols-5 '>

      <InfoBox
        title="سندات القبض"
          tileIcon={<LiaCashRegisterSolid size={30} />}
        footer={ReceptArraySum}
      >
        <ClientTransaction ReceptArray={ReceptArray} />
      </InfoBox>
      <InfoBox
        title="مصاريف تشغيليه"
          tileIcon={<FaTools size={30} />}
        footer={PaymentArraySum}
      >
        <ClientTransaction ReceptArray={PaymentArray} />
      </InfoBox>

      <InfoBox
        title="مصاريف ادارية"
          tileIcon={<GiOfficeChair size={30} />}
        footer={MangmentExpArraySum}
      >
        <MangmentExpense MaintenanceExpensesArray={MangmenteExpensesArray} />
      </InfoBox>
        <InfoBox title={"كروت مفتوحة" } tileIcon={<HiMiniUserGroup size={30} />} footer={openCardNet
}>
        <FixingInfo

            records={sumOf_OPEN_FixingCard.recordCount}
            cardTotals={totalOpenCards}
            Recipt={totalOpenRecipts}
            payment={totalOpenPayment}
        />
      </InfoBox>
        <InfoBox title={"كروت مغلقة" } tileIcon={<HiMiniUserGroup size={30} />} footer={closeCardNet}>
          <FixingInfo
            records={sumOf_CLOSED_FixingCard.recordCount}
            cardTotals={totalCloseCards}
            Recipt={totalCloseRecipts}
            payment={totalClosePayment}

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
