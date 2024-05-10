import Product from "@/app/_components/Product";
import { IRestaurantData } from "@/app/_types/restaurant.types";

interface IListRestaurantProducts {
  data: IRestaurantData | any;
}
export const ListRestaurantProducts = ({ data }: IListRestaurantProducts) => {
  return (
    <>
      {Object.keys(data).map((key: string, index) => {
        return (
          <>
            <div className="flex items-center justify-between">
              <h2 className="font-bold">{key}</h2>
            </div>
            <Product.List products={data[key]} key={key} />
          </>
        );
      })}
    </>
  );
};
