"use client";
import { ProductList } from "./product-list";
import { Prisma } from "@prisma/client";
import { toMoney, calculateTotalPrice } from "../../_helpers/price";
import { DeliveryInfo } from "../delivery-info";
import { DiscountPercentage } from "../discount-percentage";
import { Button } from "../ui/button";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { cartStore } from "@/app/_store/cart-store";
import Link from "next/link";

interface props {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: true;
    };
  }>;

  sugestion: Prisma.ProductGetPayload<{
    include: {
      restaurant: true;
    };
  }>[];
}

export const ProductDetails = ({ product, sugestion }: props) => {
  const [quantity, setQuantity] = useState<number>(1);
  const { addItem } = cartStore();

  const up = () => {
    setQuantity((prev) => prev + 1);
    console.log(quantity);
  };

  const down = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const add = () => {
    console.log("Tentando add");
    addItem({ ...product, quantity });
  };

  return (
    <div className="relative -top-12 z-10 flex min-h-[calc(100vh-300px)] flex-1 flex-col overflow-hidden rounded-tl-2xl rounded-tr-2xl bg-white px-4 pt-4">
      <div className="flex w-full flex-col gap-3">
        <div className="flex flex-col">
          <div className="flex gap-0.5">
            <figure className="h-4 w-4 overflow-hidden rounded-full">
              <img
                src={product.restaurant.imageURL}
                alt={product.restaurant.name}
                height={30}
                width={30}
                className="h-full w-full object-cover"
              />
            </figure>
            <Link
              href={`/restaurant/${product.restaurant.id}`}
              className="text-xs text-[#7E8392]"
            >
              {product.restaurant.name}
            </Link>
          </div>

          <h2 className="text-lg font-bold">{product.name}</h2>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="flex gap-3">
              <h2 className="font-bold">
                {toMoney(calculateTotalPrice({ product }))}
              </h2>
              <DiscountPercentage product={product} />
            </div>
            {product.discountPercentage > 0 && (
              <span className="mt-1 text-xs line-through opacity-70">
                {toMoney(product.price)}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Button size="icon" variant="outline" onClick={down}>
              <ChevronLeftIcon size={16} />
            </Button>
            <span>{quantity}</span>
            <Button size="icon" variant="outline" onClick={up}>
              <ChevronRightIcon size={16} />
            </Button>
          </div>
        </div>

        <DeliveryInfo
          fee={product.restaurant.deliveryFee}
          time={product.restaurant.deliveryTimeMinutes}
        />
        <div>
          <h3 className="font-bold">Sobre</h3>
          <p className="text-sm font-light text-[#7E8392]">
            {product.description}
          </p>
        </div>
        {sugestion.length > 0 && (
          <>
            <h3 className="font-bold">Acompanhamentos</h3>
            <ProductList products={sugestion} vertical={true} />
          </>
        )}
        <div className=" mt-6 flex w-full items-center  sm:justify-end">
          <Button className="w-full sm:w-fit" onClick={add}>
            Adicionar a sacola
          </Button>
        </div>
      </div>
    </div>
  );
};
