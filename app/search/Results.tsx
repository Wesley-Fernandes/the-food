import type { Restaurant } from "@prisma/client";
import * as Rest from "../_components/Restaurant";

interface props {
  restaurants: Restaurant[];
}

export const Results = ({ restaurants }: props) => {
  return (
    <>
      {restaurants.length > 0 ? (
        <Rest.default.List vertical={true} restaurants={restaurants} />
      ) : (
        <div className="mt-11 flex flex-1 flex-col items-center justify-center">
          <img src="/logo.png" alt="logo" className="w-h-32 h-32" />
          <span className="font-bold">Não encontramos restaurantes.</span>
        </div>
      )}
    </>
  );
};
