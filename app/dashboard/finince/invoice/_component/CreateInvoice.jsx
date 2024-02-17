"use client";

import { useRouter } from "next/navigation";
import React from "react";

import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

function CreateInvoice({ id, balance, fixOrederId }) {
  const router = useRouter();
  const handleDelete = (id) => {
    router.push(`/dashboard/finince/invoice/create/${id}`);
  };

  return (
    <Button className="bg-accent text-accent-foreground" onClick={() => handleDelete(id, balance, fixOrederId)}>
      <Eye size={24} />
    </Button>
  );
}

export default CreateInvoice;
