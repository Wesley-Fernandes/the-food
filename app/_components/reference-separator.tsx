import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface props {
  src: string;
  title: string;
}
const ReferenceSeparator = ({ src, title }: props) => {
  return (
    <div className="flex items-center justify-between px-4">
      <h2 className="font-bold">{title}</h2>
      <Link
        href={src}
        className="flex items-center justify-center gap-1 text-sm text-red-600"
      >
        Ver todos
        <ChevronRight size={16} />
      </Link>
    </div>
  );
};

export default ReferenceSeparator;
