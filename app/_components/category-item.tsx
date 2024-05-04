import type { Category } from "@prisma/client";
import Image from "next/image";
import { Badge } from "./ui/badge";
interface categoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: categoryItemProps) => {
  return (
    <Badge className="col-span-1 flex h-[54px] items-center gap-3 bg-white px-4 py-3 text-secondary-foreground shadow-sm">
      <Image
        src={category.imageURL}
        alt={category.name}
        height={30}
        width={30}
        priority
      />

      <span className="text-sm font-semibold">{category.name}</span>
    </Badge>
  );
};

export default CategoryItem;
