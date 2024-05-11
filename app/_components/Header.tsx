import Image from "next/image";
import { Navbar } from "./navbar";

const Header = () => {
  //<Image src="/logo.png" alt="logo" width={120} height={30} priority />
  return (
    <div className="flex justify-between px-5 pt-6">
      <Image src="/logo.png" alt="logo" width={50} height={50} priority />
      <Navbar />
    </div>
  );
};

export default Header;
