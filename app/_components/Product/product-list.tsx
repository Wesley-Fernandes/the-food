import { Prisma } from "@prisma/client";
import { ProductItem } from "./product-item";

interface props {
  products: Prisma.ProductGetPayload<{
    include: {
      restaurant: true;
    };
  }>[];
  vertical: boolean;
}

export const ProductList = ({ products, vertical }: props) => {
  const orientation = !vertical
    ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
    : "flex";
  //${orientation}
  return (
    <ul
      className={`-mt-2 ${orientation} list-none items-start gap-2 overflow-x-scroll px-4 [&::-webkit-scrollbar]:hidden`}
    >
      {products.map((product) => (
        <ProductItem
          key={product.id}
          restaurant={product.restaurant}
          product={product}
        />
      ))}
    </ul>
  );
};
