import DashBoardMenu from "@/components/navbar/DashBoardMenu";

import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route"


export const dynamic = "force-dynamic";
const MenuSide = async () => {

  const session = await getServerSession(authOptions);

  // if (session) redirect("/dashboard");


  return      <DashBoardMenu user={session} />


};
export default MenuSide;
