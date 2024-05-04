import Image from "next/image";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-between px-5 pt-6">
      <Image src="/logo.png" alt="logo" width={120} height={30} priority />
      <Button size="icon" variant="ghost">
        <Menu />
      </Button>
    </div>
  );
};

export default Header;
