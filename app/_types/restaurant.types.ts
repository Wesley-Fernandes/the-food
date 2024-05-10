interface Product {
  id: string;
  name: string;
  description: string;
  imageURL: string;
  price: number;
  discountPercentage: number;
  restaurantId: string;
  categoryId: string;
  restaurant: any;
}

export interface IRestaurantData {
  [key: string]: Product[];
}
