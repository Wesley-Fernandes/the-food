import type { Restaurant } from "@prisma/client";
import { BikeIcon, Heart, Star, TimerIcon } from "lucide-react";
import Image from "next/image";
import { toMoney } from "../_helpers/price";

interface RestaunratItemProps {
  restaurant: Restaurant;
}

const RestaurantItem = ({ restaurant }: RestaunratItemProps) => {
  return (
    <li className="min-w-[266px] max-w-[266px]">
      <div className="relative h-[136px] w-full">
        <Image
          src={restaurant.imageURL}
          alt={restaurant.name}
          height={0}
          width={0}
          className="h-full w-full rounded-lg object-cover shadow-md"
          sizes="100vw"
          quality={100}
        />

        <div className="absolute top-0.5 z-10 flex h-fit w-full items-center justify-between px-3 py-2">
          <span
            className="
          z-10 flex items-center gap-1 rounded-2xl bg-white px-3 py-2 text-sm text-[#FFB100] text-secondary-foreground"
          >
            <Star size={20} strokeWidth={1.75} fill="#FFB100" />
            <span className="font-bold text-black">5.0</span>
          </span>

          <span
            className="
          z-10 flex items-center rounded-full bg-[#323232]/80 px-2 py-2 text-sm text-white"
          >
            <Heart size={20} strokeWidth={1.75} fill="white" />
          </span>
        </div>
      </div>
      <div className="mt-3">
        <h3 className="truncate text-lg font-bold">{restaurant.name}</h3>
        <div className="flex items-center gap-3 text-xs">
          <span className="flex items-center gap-2 text-[#7E8392]">
            <BikeIcon size={16} color="red" />
            {Number(restaurant.deliveryFee) === 0
              ? "Entrega gratis"
              : toMoney(Number(restaurant.deliveryFee))}
          </span>
          <span className="flex items-center gap-2 text-[#7E8392]">
            <TimerIcon size={16} color="red" />
            {String(restaurant.deliveryTimeMinutes).concat(" min")}
          </span>
        </div>
      </div>
    </li>
  );
};

export default RestaurantItem;
