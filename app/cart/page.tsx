"use client";
import Header from "../_components/Header";
import { toMoney } from "../_helpers/price";
import { cartStore } from "../_store/cart-store";
import { CartItem } from "../_components/cart-item";

const CartPage = () => {
  const { items } = cartStore();

  const value = items.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0,
  );

  return (
    <main>
      <Header />
      <h1 className="font-bold">Carrinho</h1>
      <ul className="container">
        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </ul>
      <span>Valor total: {toMoney(value)}</span>
    </main>
  );
};

export default CartPage;
