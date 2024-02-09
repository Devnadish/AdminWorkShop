"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { IoLogOutSharp } from "react-icons/io5";

export default function UserInfo() {
  const { data: session } = useSession();
  // const { name, avatar, phone } = session.user;

  return (
        <Button
          onClick={() => signOut()}
          className="bg-red-500 text-white font-bold px-6 py-2 mt-3 flex items-center gap-4"
        >
          <IoLogOutSharp size={24} />
          <span className="font-bold">{session?.user?.name}</span>
        </Button>
  );
}
