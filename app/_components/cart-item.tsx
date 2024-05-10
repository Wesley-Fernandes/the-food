"use client";
import { ChevronLeftIcon, ChevronRightIcon, Trash } from "lucide-react";
import { Button } from "./ui/button";
import { ICartItem, cartStore } from "../_store/cart-store";
import { calculateTotalPrice, toMoney } from "../_helpers/price";

export const CartItem = (props: ICartItem) => {
  const { removeItem, updateItem } = cartStore();

  const increase = () => {
    updateItem({ id: props.id, quantity: props.quantity + 1 });
  };

  const decrease = () => {
    if (props.quantity === 1) {
      removeItem(props.id);
      return;
    }
    updateItem({ id: props.id, quantity: props.quantity - 1 });
  };

  const remove = () => {
    removeItem(props.id);
  };

  let calculate = calculateTotalPrice({ product: props });
  return (
    <li className="flex justify-between p-2">
      <div className="flex items-center gap-4">
        <figure className="h-[90px] w-[90px] rounded-md">
          <img
            src={props.imageURL}
            alt={props.name}
            sizes="100%"
            className="h-full rounded-md object-cover"
          />
        </figure>
        <div className="flex flex-col gap-1">
          <h2 className="font-light">{props.name}</h2>
          <div className="flex items-center gap-1">
            <span className="text-sm font-bold ">
              {toMoney(Number(calculate) * props.quantity)}
            </span>
            <span className="text-xs text-zinc-600 line-through">
              {toMoney(Number(props.price) * props.quantity)}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button size="icon" variant="destructive" onClick={decrease}>
              <ChevronLeftIcon size={16} />
            </Button>
            <span>{props.quantity}</span>
            <Button size="icon" variant="destructive" onClick={increase}>
              <ChevronRightIcon size={16} />
            </Button>
          </div>
        </div>
      </div>

      <Button variant="ghost" size="icon" onClick={remove}>
        <Trash />
      </Button>
    </li>
  );
};
