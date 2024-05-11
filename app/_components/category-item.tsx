import type { Category } from "@prisma/client";
import Image from "next/image";
import { Badge } from "./ui/badge";
import Link from "next/link";
interface categoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: categoryItemProps) => {
  return (
    <Badge className="h-[54px] min-w-fit bg-white text-secondary-foreground shadow-sm">
      <Link
        href={`/category?query=${category.name}`}
        className="flex items-center gap-3 px-4 py-3 "
      >
        <Image
          src={category.imageURL}
          alt={category.name}
          height={30}
          width={30}
        />

        <span className="text-sm font-semibold">{category.name}</span>
      </Link>
    </Badge>
  );
};

export default CategoryItem;
