import { notFound } from "next/navigation";
import { Star } from "lucide-react";
import { DeliveryInfo } from "@/app/_components/delivery-info";
import { ListRestaurantProducts } from "./list-restaurant-products";
import { ListRestaurantCategories } from "./list-restaurant-categories";
import { ReceiveRestaurant } from "@/app/_hooks/receive-restaurant";
import { IPageById } from "@/app/_types/page.types";
import Restaurant from "@/app/_components/Restaurant";
import Image from "next/image";

const RestaurantPage = async ({ params: { id } }: IPageById) => {
  const { data, restaurant } = await ReceiveRestaurant(id);

  if (!data || !restaurant) {
    return notFound();
  }

  return (
    <main className="mx-auto sm:container">
      <header className="relative h-[360px] w-full">
        <Image
          src={restaurant.imageURL}
          alt={restaurant.name}
          fill
          priority
          className="object-cover"
        />
        <Restaurant.HeaderButtons />
      </header>
      <div className="relative -top-40 z-10 flex min-h-[calc(100vh-300px)] flex-1 flex-col gap-2 overflow-hidden rounded-tl-2xl rounded-tr-2xl bg-white px-4 pt-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 truncate">
            <Image
              src={restaurant.imageURL}
              alt="restaurant icon"
              className="h-9 w-9 rounded-full"
              width={36}
              height={36}
              priority
            />
            <h1 className="text-base font-bold">{restaurant.name}</h1>
          </div>

          <span className="flex items-center gap-1 rounded-2xl bg-secondary-foreground px-2 py-1 text-sm text-[#FFB100] text-secondary-foreground">
            <Star size={20} strokeWidth={1.75} fill="#FFB100" />
            <span className="font-bold text-secondary">5.0</span>
          </span>
        </div>
        <DeliveryInfo
          fee={restaurant.deliveryFee}
          time={restaurant.deliveryTimeMinutes}
        />
        <ListRestaurantCategories categorys={restaurant.categories} />
        <ListRestaurantProducts data={data} />
      </div>
    </main>
  );
};

export default RestaurantPage;
