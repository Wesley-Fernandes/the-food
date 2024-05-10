import { Restaurant } from "@prisma/client";
import { RestaurantItem } from "./restaurant-item";

interface props {
  vertical: boolean;
  restaurants: Restaurant[];
}
export const RestaurantList = async ({ vertical, restaurants }: props) => {
  const type = vertical
    ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
    : "flex overflow-x-auto";
  return (
    <ul
      className={`-mt-2 list-none ${type} items-start gap-3 px-4 [&::-webkit-scrollbar]:hidden`}
    >
      {restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </ul>
  );
};
