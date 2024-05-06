interface props {
  product: {
    discountPercentage: any;
    price: any;
  };
}
export const calculateTotalPrice = ({ product }: props): Number => {
  if (Number(product.discountPercentage) === 0) {
    return Number(product.price);
  }

  const discount =
    Number(product.price) * (Number(product.discountPercentage) / 100);

  return Number(product.price) - discount;
};

export const toMoney = (value: any) => {
  const new_value = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(Number(value));

  return new_value;
};
