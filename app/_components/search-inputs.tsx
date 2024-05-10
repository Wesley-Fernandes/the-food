import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Search = () => {
  //<div className="px-5 pt-6">
  return (
    <div className="flex gap-2 px-5 pt-6">
      <Input placeholder="Buscar restaurantes" className="border-none" />
      <Button size="icon" className="h-10 w-12">
        <SearchIcon size={18} />
      </Button>
    </div>
  );
};

export default Search;
