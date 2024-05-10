"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "./ui/button";

type Props = {
  downgrade: () => void;
  upgrade: () => void;
  status: number;
};
export const ButtonQuantity = ({ downgrade, upgrade, status }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <Button size="icon" variant="outline" onClick={downgrade}>
        <ChevronLeftIcon size={16} />
      </Button>
      <span>{status}</span>
      <Button size="icon" variant="destructive" onClick={upgrade}>
        <ChevronRightIcon size={16} />
      </Button>
    </div>
  );
};
