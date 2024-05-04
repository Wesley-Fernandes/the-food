import type { Category } from "@prisma/client";
import Image from "next/image";
import { Badge } from "./ui/badge";
interface categoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: categoryItemProps) => {
  return (
    <Badge className="flex  h-[54px] min-w-fit items-center gap-3 bg-white px-4 py-3 text-secondary-foreground shadow-sm">
      <Image
        src={category.imageURL}
        alt={category.name}
        height={30}
        width={30}
      />

      <span className="text-sm font-semibold">{category.name}</span>
    </Badge>
  );
};

export default CategoryItem;
