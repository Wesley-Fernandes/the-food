import { Navbar } from "./navbar";

const Header = () => {
  //<Image src="/logo.png" alt="logo" width={120} height={30} priority />
  return (
    <div className="flex justify-between px-5 pt-6">
      <h1 className="text-2xl font-extrabold text-red-600">ÉFooda</h1>
      <Navbar />
    </div>
  );
};

export default Header;
