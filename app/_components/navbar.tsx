import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/_components/ui/sheet";
import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="bg-white">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <ul className="flex flex-col gap-2">
          <li>
            <Link
              className={
                buttonVariants({ variant: "outline" }) + " w-full text-start"
              }
              href={"/"}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              className={
                buttonVariants({ variant: "outline" }) + " w-full text-start"
              }
              href={"/cart"}
            >
              Carrinho
            </Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
}
