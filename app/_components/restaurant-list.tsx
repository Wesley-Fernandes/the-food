import { db } from "../_lib/prisma";
import RestaurantItem from "./restaurant-item";

const RestaurantList = async () => {
  const restaurants = await db.restaurant.findMany({ take: 10 });
  return (
    <ul className="-mt-2 flex list-none items-start gap-2 overflow-x-scroll px-4 [&::-webkit-scrollbar]:hidden">
      {restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </ul>
  );
};

export default RestaurantList;
