import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { calculateTotalPrice, toMoney } from "../_helpers/price";
import { Prisma } from "@prisma/client";

export interface ProductItemTypeProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true;
        };
      };
    };
  }>;
}

const ProductItem = ({ product }: ProductItemTypeProps) => {
  return (
    <li className="flex w-[150px] min-w-[150px] flex-col">
      <div className="relative h-[150px] w-full">
        <Image
          src={product.imageURL}
          alt={product.name}
          fill
          sizes="100%"
          className="rounded-lg object-cover shadow-md"
        />
        <span
          className=" absolute
         left-0.5 top-0.5 z-10 flex items-center rounded-2xl bg-red-600 px-2.5 py-0.5 text-sm text-white"
        >
          <ArrowDown size={18} />
          20%
        </span>
      </div>

      <div className="flex flex-col">
        <span className="font-semibold">{product.name}</span>
        <div className="flex items-center gap-2">
          <span className="truncate font-bold">
            {toMoney(calculateTotalPrice({ product }))}
          </span>
          {product.discountPercentage > 0 && (
            <span className="mt-1 text-xs line-through opacity-70">
              {toMoney(product.price)}
            </span>
          )}
        </div>
        <span className="truncate text-xs opacity-70">
          {product.restaurant.name}
        </span>
      </div>
    </li>
  );
};

export default ProductItem;
