import Header from "../_components/Header";
import Search from "../_components/search-inputs";
import { db } from "../_lib/prisma";
import { Results } from "./Results";

interface props {
  searchParams: {
    query: string;
  };
}
const SearchPage = async ({ searchParams }: props) => {
  const products = await db.product.findMany({
    where: {
      category: {
        name: {
          contains: searchParams.query as string,
        },
      },
    },
    take: 20,
    include: {
      restaurant: true,
    },
  });

  return (
    <main className="flex w-full flex-col gap-4 pb-12 sm:container sm:mx-auto">
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>
      <h1 className="pl-4 text-sm opacity-70">
        Resultados para categoria &quot;{searchParams.query}&quot;
      </h1>
      {searchParams.query && <Results products={products} />}
    </main>
  );
};

export default SearchPage;
