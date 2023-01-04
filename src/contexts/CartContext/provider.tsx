import { ReactNode } from "react";
import { CartContext } from ".";

export const CartContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <CartContext.Provider value={{}}>{children}</CartContext.Provider>;
};
