"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import INPUT from "@/components/shared/INPUT";
import { ImMobile } from "react-icons/im";
import { IoMdUnlock } from "react-icons/io";

export default function LoginForm() {
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        mobile,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400 bg-white text-black/80 min-w-[300px]">
        <h1 className="text-xl font-bold my-4">تسجيل الدخول</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <INPUT
            onChange={(e) => setMobile(e.target.value)}
            type="text"
            placeholder="رقم الجوال"
            icon={<ImMobile size={24} className="text-white" />}
            h="h-9"
          />
          <INPUT
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="كلمة المرور"
            icon={<IoMdUnlock size={24} className="text-white" />}
            h="h-9"
          />
          <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2">
            دخول
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}

          {/* <Link className="text-sm mt-3 text-right" href={"/register"}>
            Don't have an account? <span className="underline">Register</span>
          </Link> */}
        </form>
      </div>
    </div>
  );
}
