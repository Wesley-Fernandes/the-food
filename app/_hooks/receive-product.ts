import { db } from "@/app/_lib/prisma";
interface props {
  id: string;
}
export const ReceiveProduct = async ({ id }: props) => {
  const product = await db.product.findUnique({
    where: { id: id },
    include: {
      restaurant: true,
      category: true,
    },
  });

  if (!product) {
    return { product: null, sugestion: null };
  }

  const sugestion = await db.product.findMany({
    where: {
      restaurant: {
        id: product.restaurant.id,
      },
      NOT: {
        category: {
          name: product.category.name,
        },
      },
    },
    include: {
      restaurant: true,
    },
    take: 10,
  });

  if (!sugestion) {
    return { product: null, sugestion: null };
  }

  return { product, sugestion };
};
