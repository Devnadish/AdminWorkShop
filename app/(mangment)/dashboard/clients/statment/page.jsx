import SelectClientData from "@/components/pagecomponent/back/clients/statment/SelectClientData";
import Caption from "@/components/shared/Caption";
import { getGroupClientWithTransactions } from "@/db/clients";
export const dynamic = "force-dynamic";


async function Statement() {
  const data = await getGroupClientWithTransactions();

  return (
    <div className="overflow-x-auto flex flex-wrap items-center justify-center w-full ">
      <div className="max-w-2xl w-full mb-2">
        <Caption title={"عرض العملاء التي توجد لهم حركة مالية "} data={data.length} dataBgColor="bg-gray-500" align="center"/>
        </div>
      <SelectClientData data={data} />
    </div>
  );
}

export default Statement;
