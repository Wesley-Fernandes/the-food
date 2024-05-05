import Image from "next/image";

interface props {
  src: string;
  alt: string;
}
const Banner = ({ src, alt }: props) => {
  return (
    <div className="px-4">
      <Image
        src={src}
        alt={alt}
        height={0}
        width={0}
        className="h-auto w-full object-contain"
        sizes="100vw"
        quality={100}
      />
    </div>
  );
};

export default Banner;
