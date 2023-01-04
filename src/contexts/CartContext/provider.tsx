import { ReactNode, useEffect, useState } from "react";
import { CartContext } from ".";
import { IProduct } from "./types";

export const CartContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<IProduct[]>([]);

  const addToCart = (product: IProduct) => {
    setCart((state) => [...state, product]);
  };

  const removeFromCart = (productId: string) => {
    setCart((state) => state.filter((product) => product.id !== productId));
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
