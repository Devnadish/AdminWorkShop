import React from "react";
import { CiEdit, Trash } from "@/lib/icons";
import { Button } from "@/components/ui/button";

export const ExpenAction = () => {
  return (
    <div className="flex items-center gap-4 w-full justify-end">
      <Button size="icon" variant="secondary">
        <CiEdit size={25} className="text-primary" />
      </Button>
      <Button size="icon" variant="secondary">
        <Trash size={25} className="text-destructive" />
      </Button>
    </div>
  );
};
