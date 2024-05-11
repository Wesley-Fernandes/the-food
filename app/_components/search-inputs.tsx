"use client";
import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

const Search = () => {
  const { push } = useRouter();
  const submitter = async (e: FormEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      search: {
        value: string;
      };
    };

    const search = target.search.value;

    if (!search) {
      return;
    }
    push(`/search?query=${search}`);
  };

  return (
    <form className="flex gap-2 px-5 pt-6" onSubmit={submitter}>
      <Input
        placeholder="Buscar restaurantes"
        className="border-none"
        name="search"
      />
      <Button size="icon" className="h-10 w-12" type="submit">
        <SearchIcon size={18} />
      </Button>
    </form>
  );
};

export default Search;
