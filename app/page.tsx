import Header from "./_components/Header";
import CategoryList from "./_components/category-list";
import Search from "./_components/search-inputs";
import ProductList from "./_components/product-list";
import { ChevronRight } from "lucide-react";
import { db } from "./_lib/prisma";
import PromoBanner from "./_components/promo-banner";

const Home = async () => {
  const products = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 10,
    include: {
      restaurant: {
        select: {
          name: true,
        },
      },
    },
  });
  return (
    <main className="flex w-full flex-col gap-4">
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>
      <CategoryList />
      <PromoBanner
        src="/promo-banner.png"
        alt="Até 30% de desconto em pizzas"
        key="pizzas"
      />

      <div className="flex items-center justify-between px-4">
        <h2 className="font-bold">Produtos recomendados</h2>
        <span className="flex items-center justify-center gap-1 text-red-600">
          Ver todos
          <ChevronRight size={16} />
        </span>
      </div>

      <ProductList products={products} />

      <PromoBanner
        src="/promo-banner2.png"
        alt="Lanches apartir de R$ 17,90"
        key="lanches"
      />
    </main>
  );
};

export default Home;
