



"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import INPUT from "@/components/shared/INPUT";
import { User2, LucidePhone, Lock } from "lucide-react";
import Submit from "@/components/shared/Submit";
import toast from "react-hot-toast";
import { registerUser } from "@/db/user";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [phone, setphone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { data: session } = useSession();



  const handleSubmit = async () => {
     if (!session) redirect("/");
    if (!name || !phone || !password) {
      setError("يجب ادخال جميع الحقول");
      return;
    }

    const userData = {
      name,
      phone,
      password,
    };

    try {
      const reg = await registerUser(userData);


      if (reg.code === 200) {
        toast.success(reg.msg);
      }
      if (reg.code === 400) {
        toast.error(reg.msg);
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <div className="grid place-items-center h-screen ">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400 bg-white text-black w-[300px]">
        <h1 className="text-xl font-bold my-4">مستخدم جديد</h1>

        <form action={handleSubmit} className="flex flex-col gap-3">
          <INPUT
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="الاسم"
            icon={<User2 className="text-white" />}
          />
          <INPUT
            onChange={(e) => setphone(e.target.value)}
            type="text"
            placeholder="الهاتف"
            icon={<LucidePhone className="text-white" />}
          />
          <INPUT
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="كلمة السر"
            icon={<Lock className="text-white" />}
          />

          <Submit title="تسجيل" w={"w-full"} color={"bg-green-400"} />

          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
