import { calculateTotalPrice, toMoney } from "@/app/_helpers/price";
import { db } from "@/app/_lib/prisma";
import { ArrowDown } from "lucide-react";
import { Button } from "@/app/_components/ui/button";
import { notFound } from "next/navigation";
import Image from "next/image";
import BackButton from "./back";
import View from "@/app/_components/View";
import ProductList from "@/app/_components/product-list";

interface productPageProps {
  params: {
    id: string;
  };
}
const ProductsPage = async ({ params: { id } }: productPageProps) => {
  const product = await db.product.findUnique({
    where: { id: id },
    include: {
      restaurant: true,
      category: true,
    },
  });

  if (!product) {
    return notFound();
  }

  const drinks = await db.product.findMany({
    where: {
      restaurant: {
        id: product.restaurant.id,
      },
      category: {
        name: product.category.name === "Sucos" ? "Hambúrgueres" : "Sucos",
      },
    },
    include: {
      restaurant: true,
    },
    take: 10,
  });

  if (!drinks) {
    return notFound();
  }

  return (
    <main className="sm:container sm:mx-auto">
      <header className="relative h-[360px] w-full">
        <Image
          src={product.imageURL}
          alt={product.name}
          fill
          className="object-cover"
        />
        <BackButton />
      </header>
      <View.Product.FooterContainer>
        <div className="flex w-full flex-col gap-3">
          <div className="flex flex-col">
            <div className="flex gap-0.5">
              <figure className="h-4 w-4 overflow-hidden rounded-full">
                <Image
                  src={product.restaurant.imageURL}
                  alt={product.restaurant.name}
                  height={30}
                  width={30}
                  className="h-full w-full object-cover"
                />
              </figure>
              <span className="text-xs text-[#7E8392]">
                {product.restaurant.name}
              </span>
            </div>

            <h2 className="font-bold">{product.name}</h2>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <div className="flex gap-3">
                <h2 className="font-bold">
                  {toMoney(calculateTotalPrice({ product }))}
                </h2>
                <span className="flex w-fit items-center rounded-2xl bg-red-600 px-1.5 py-0.5 text-xs text-white">
                  <ArrowDown size={16} />
                  {String(product.discountPercentage).concat("%")}
                </span>
              </div>
              <span className="text-xs text-[#7E8392]">
                De: {toMoney(Number(product.price))}
              </span>
            </div>
            {/* Botões de quantidade */}
            <View.Product.Value />
          </div>

          {/* Tempo de entrega e valor */}
          <div className="flex h-14 items-center justify-around border">
            <div className="flex flex-col">
              <span className="text-xs">Entrega</span>
              <strong className="text-sm">Grátis</strong>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-xs">Entrega</span>
              <strong className="text-sm">40 min</strong>
            </div>
          </div>
          <div>
            <h3 className="font-bold">Sobre</h3>
            <p className="text-sm font-light text-[#7E8392]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              autem odio, quidem quas, ipsa adipisci nulla perspiciatis deleniti
              a facilis consequuntur iste impedit quod quos corporis excepturi
              quaerat nesciunt iusto?
            </p>
          </div>
          {drinks.length > 0 && (
            <>
              <h3 className="font-bold">Acompanhamentos</h3>
              <ProductList products={drinks} />
            </>
          )}

          <div className=" flex w-full items-center sm:justify-end">
            <Button className="w-full sm:w-fit">Adicionar a sacola</Button>
          </div>
        </div>
      </View.Product.FooterContainer>
    </main>
  );
};

export default ProductsPage;
