import Header from "../_components/Header";
import Restaurant from "../_components/Restaurant";
import Search from "../_components/search-inputs";
import { db } from "../_lib/prisma";

const SearchPage = async () => {
  const restaurants = await db.restaurant.findMany({ take: 10 });
  return (
    <main className="flex w-full flex-col gap-4 pb-12 sm:container sm:mx-auto">
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>
      <h1 className="pl-4 text-sm opacity-70">
        Resultados para "Comida urbana"
      </h1>
      <Restaurant.List vertical={true} restaurants={restaurants} />
    </main>
  );
};

export default SearchPage;
