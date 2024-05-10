import { Product } from "@prisma/client";
import { ArrowDown } from "lucide-react";

type Props = {
  product: Pick<Product, "discountPercentage">;
};
export const DiscountPercentage = ({ product }: Props) => {
  if (product.discountPercentage > 0) {
    return (
      <span className="flex w-fit items-center rounded-2xl bg-red-600 px-1.5 py-0.5 text-xs text-white">
        <ArrowDown size={16} />
        {String(product.discountPercentage).concat("%")}
      </span>
    );
  } else {
    return null;
  }
};
