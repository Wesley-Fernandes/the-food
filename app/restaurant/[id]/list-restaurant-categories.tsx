import { Category } from "@prisma/client";

interface IListRestaurantCategories {
  categorys: Category[];
}

export const ListRestaurantCategories = ({
  categorys,
}: IListRestaurantCategories) => {
  return (
    <ul className="flex  items-center gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden">
      {categorys.map((category) => (
        <li
          className="flex min-w-40 items-center justify-center rounded-md bg-[#F4F4F5] p-1"
          key={category.id}
        >
          {category.name}
        </li>
      ))}
    </ul>
  );
};
