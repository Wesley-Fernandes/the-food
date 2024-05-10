"use client";
import { Button } from "@/app/_components/ui/button";
import { ChevronLeftIcon, Home } from "lucide-react";
import { useRouter } from "next/navigation";
import { Navbar } from "../navbar";

export const HeaderButtons = () => {
  const { back, push } = useRouter();

  return (
    <div className="absolute flex w-full justify-between px-2 py-2">
      <Button
        size="icon"
        onClick={back}
        className=" rounded-full bg-white text-foreground shadow-md hover:text-white"
      >
        <ChevronLeftIcon />
      </Button>
      <Navbar />
    </div>
  );
};
