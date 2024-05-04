import Header from "./_components/Header";
import CategoryList from "./_components/category-list";
import Search from "./_components/search-inputs";

const Home = () => {
  return (
    <>
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>
      <CategoryList />
    </>
  );
};

export default Home;
