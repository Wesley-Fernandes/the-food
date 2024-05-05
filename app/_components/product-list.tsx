import { Prisma } from "@prisma/client";
import ProductItem from "./product-item";

interface props {
  products: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>[];
}

const ProductList = async ({ products }: props) => {
  return (
    <ul className="-mt-2 flex list-none items-start gap-2 overflow-x-scroll px-4 [&::-webkit-scrollbar]:hidden">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
};

export default ProductList;
