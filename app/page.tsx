import Image from "next/image";
import Header from "./_components/Header";
import CategoryList from "./_components/category-list";
import Search from "./_components/search-inputs";
import ProductList from "./_components/product-list";
import { Button } from "./_components/ui/button";
import { ChevronRight } from "lucide-react";

const Home = () => {
  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>
      <CategoryList />
      <div className="mb-4 px-4">
        <Image
          src="/promo-banner.png"
          alt="Até 30% de desconto em pizzas"
          height={0}
          width={0}
          className="h-auto w-full object-contain"
          sizes="100vw"
          quality={100}
        />
      </div>
      <div className="mb-4 flex items-center justify-between px-4">
        <h2 className="font-bold">Produtos recomendados</h2>
        <span className="flex items-center justify-center gap-1 text-red-600">
          Ver todos
          <ChevronRight size={16} />
        </span>
      </div>
      <ProductList />
    </>
  );
};

export default Home;
