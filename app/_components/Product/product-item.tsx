import Image from "next/image";
import { calculateTotalPrice, toMoney } from "../../_helpers/price";
import { Product, Restaurant } from "@prisma/client";
import Link from "next/link";
import { DiscountPercentage } from "../discount-percentage";

export interface ProductItemTypeProps {
  restaurant: Restaurant;
  product: Product;
}

export const ProductItem = ({ product, restaurant }: ProductItemTypeProps) => {
  return (
    <li className="w-[150px] min-w-[150px]">
      <Link href={`/products/${product.id}`} className="flex w-full flex-col">
        <div className="relative h-[150px] w-full">
          <Image
            src={product.imageURL}
            alt={product.name}
            fill
            sizes="100%"
            className="rounded-lg object-cover shadow-md"
          />
          <div className="absolute left-0.5 top-0.5 z-10">
            <DiscountPercentage product={product} />
          </div>
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
          <span className="truncate text-xs opacity-70">{restaurant.name}</span>
        </div>
      </Link>
    </li>
  );
};
