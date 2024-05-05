import Header from "./_components/Header";
import CategoryList from "./_components/category-list";
import Search from "./_components/search-inputs";
import ProductList from "./_components/product-list";
import { ChevronRight } from "lucide-react";
import PromoBanner from "./_components/promo-banner";
import RestaurantList from "./_components/restaurant-list";
import { db } from "./_lib/prisma";
import ReferenceSeparator from "./_components/reference-separator";

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
    <main className="flex w-full flex-col gap-4 pb-12">
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

      <ReferenceSeparator title="Pedidos Recomendados" src="/" key="pedidos" />

      <ProductList products={products} />

      <PromoBanner
        src="/promo-banner2.png"
        alt="Lanches apartir de R$ 17,90"
        key="lanches"
      />

      <ReferenceSeparator
        title="Restaurantes Recomendados"
        src="/"
        key="restaurants"
      />
      <RestaurantList />
    </main>
  );
};

export default Home;
