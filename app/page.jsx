import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";
import LoginForm from "@/app/dashboard/setting/auth/login/page"

export default async function Home() {
  const session = await getServerSession(authOptions);
//  this homePage If already signIn if Not Sign in  <LoginForm />
  if (session) redirect("/dashboard/dashboard");

  return (
    <main>
      <LoginForm />
    </main>
  );
}


