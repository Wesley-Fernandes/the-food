import { db } from "../_lib/prisma";

export const ReceiveHomepage = async () => {
  const products = await db.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    take: 10,
    include: {
      restaurant: true,
    },
  });

  const restaurants = await db.restaurant.findMany({ take: 10 });

  if (!restaurants || !products) {
    return { products: null, restaurants: null };
  }

  return { products, restaurants };
};
