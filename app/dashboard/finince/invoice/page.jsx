import {  getAllOpenFixOrderForInvoice } from "@/db/fixing";
import FilterData from "./_component/FilterData";
import IconWithdata from "@/components/sharedcompnent/IconWithdata";
import { MdCarCrash } from "@/lib/icons";
import ShowData from "./_component/ShowData";
export const dynamic = "force-dynamic";



async function page(props) {
 const fliter= createFilter(props.searchParams)
  const OpenCard = await getAllOpenFixOrderForInvoice(fliter);

  return (
    <div className="overflow-x-auto flex flex-wrap flex-col items-center justify-center w-full gap-3">
      <FilterData len={OpenCard.length}/>
      <ShowData OpenCard={OpenCard}/>
    </div>
  );
}
export default page;

function createFilter(where){
  let filter;
  switch (where.where) {
    case undefined:
        filter={}
      break;
    case 'open':
        filter={isClosed:false}
      break;
      case 'close':
        filter={isClosed:true}
      break;
      case 'all':
        filter={}
      break;
      case 'client':
        filter={ clientName: {
          contains: where.clientname
        }}
      break;

  
    default:
      break;
  }
  return filter

}

