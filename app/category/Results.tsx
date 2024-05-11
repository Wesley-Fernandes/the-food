import type { Prisma } from "@prisma/client";
import Product from "../_components/Product";
interface props {
  products: Prisma.ProductGetPayload<{
    include: {
      restaurant: true;
    };
  }>[];
}
export const Results = ({ products }: props) => {
  return (
    <div className="mx-auto">
      {products.length > 0 ? (
        <Product.List vertical={false} products={products} />
      ) : (
        <div className="mt-11 flex flex-1 flex-col items-center justify-center">
          <img src="/logo.png" alt="logo" className="w-h-32 h-32" />
          <span className="font-bold">Não encontramos produtos.</span>
        </div>
      )}
    </div>
  );
};
