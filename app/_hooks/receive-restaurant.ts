import { db } from "@/app/_lib/prisma";
import { IRestaurantData } from "../_types/restaurant.types";

export async function ReceiveRestaurant(id: string) {
  const restaurant = await db.restaurant.findUnique({
    where: {
      id: id,
    },
    include: {
      categories: true,
    },
  });
  const products = await db.product.findMany({
    where: {
      restaurantId: id,
    },
    include: {
      restaurant: true,
    },
  });

  if (!restaurant || !products) {
    return { restaurant: null, data: null };
  }

  let data: IRestaurantData | any = {};

  restaurant.categories.forEach((category) => {
    const new_products = products.filter(
      (product) => product.categoryId === category.id,
    );

    data[category.name] = new_products;
  });

  return { restaurant, data };
}
