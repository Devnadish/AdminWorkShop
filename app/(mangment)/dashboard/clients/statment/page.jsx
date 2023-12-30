import SelectClientData from "@/components/pagecomponent/back/clients/statment/SelectClientData";
import { getGroupClientWithTransactions } from "@/db/clients";



async function Statement() {
  const data = await getGroupClientWithTransactions();



  return (
    <div className="overflow-x-auto flex flex-wrap items-center justify-center w-full ">
      <SelectClientData data={data} />

    </div>
  );
}

export default Statement;
