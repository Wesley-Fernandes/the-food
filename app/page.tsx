import Header from "./_components/Header";
import CategoryList from "./_components/category-list";
import Search from "./_components/search-inputs";
import Product from "./_components/Product";
import PromoBanner from "./_components/promo-banner";
import ReferenceSeparator from "./_components/reference-separator";
import { ReceiveHomepage } from "./_hooks/receive-homepage";
import { notFound } from "next/navigation";
import Restaurant from "./_components/Restaurant";

const Home = async () => {
  const { products, restaurants } = await ReceiveHomepage();
  if (!products || !restaurants) {
    return notFound();
  }
  return (
    <main className="flex w-full flex-col gap-4 pb-12 sm:container sm:mx-auto">
      <Header />
      <Search />
      <CategoryList />
      <PromoBanner
        src="/promo-banner.png"
        alt="Até 30% de desconto em pizzas"
        key="pizzas"
      />
      <ReferenceSeparator
        title="Pedidos Recomendados"
        src="/recomend/products"
        key="pedidos"
      />
      <Product.List products={products} vertical={true} />
      <PromoBanner
        src="/promo-banner2.png"
        alt="Lanches apartir de R$ 17,90"
        key="lanches"
      />
      <ReferenceSeparator
        title="Restaurantes Recomendados"
        src="/recomend/restaurants"
        key="restaurants"
      />
      <Restaurant.List vertical={false} restaurants={restaurants} />
    </main>
  );
};

export default Home;
