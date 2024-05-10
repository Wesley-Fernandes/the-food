import { notFound } from "next/navigation";
import { ReceiveProduct } from "../../_hooks/receive-product";
import { IPageById } from "@/app/_types/page.types";
import Image from "next/image";
import Product from "@/app/_components/Product";
import Restaurant from "@/app/_components/Restaurant";

const ProductPage = async ({ params: { id } }: IPageById) => {
  const { product, sugestion } = await ReceiveProduct({ id });

  if (!product || !sugestion) {
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
        <Restaurant.HeaderButtons />
      </header>
      <Product.Details product={product} sugestion={sugestion} />
    </main>
  );
};

export default ProductPage;
