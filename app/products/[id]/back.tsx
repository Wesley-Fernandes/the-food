"use client";
import { Button } from "@/app/_components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const { back } = useRouter();

  return (
    <Button
      size="icon"
      onClick={back}
      className="absolute left-2 top-2 rounded-full bg-white text-foreground shadow-md hover:text-white"
    >
      <ChevronLeftIcon />
    </Button>
  );
};

export default BackButton;
