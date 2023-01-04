import {
  ButtonComponent,
  CartClose,
  CartComponentContainer,
  CartContent,
  CartItem,
  CartTrigger,
} from "./styles";
import { Handbag, X } from "phosphor-react";

import Image from "next/image";
import axios from "axios";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";

export const CartComponent: React.FC = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const [isCreatingAnCheckoutSession, setIsCreatingAnCheckoutSession] =
    useState<boolean>(false);

  const createCheckoutSession = async () => {
    try {
      setIsCreatingAnCheckoutSession(true);
      const response = await axios.post("/api/checkout", {
        prices: cart.map((product) => product.defaultPriceId),
      });

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl;
    } catch (error) {
      alert("Falha ao criar a compra.");
    } finally {
      setIsCreatingAnCheckoutSession(false);
    }
  };

  return (
    <CartComponentContainer>
      <CartTrigger title="Abrir carrinho" aria-label="Abrir carrinho">
        <Handbag size={24} weight="bold" />
        {cart.length > 0 && <span>{cart.length}</span>}
      </CartTrigger>
      <CartContent>
        <header>
          <CartClose title="Abrir carrinho" aria-label="Abrir carrinho">
            <X size={24} weight="bold" />
          </CartClose>
        </header>
        <main>
          <h2>Sacola de compras</h2>
          <ul>
            {cart.map((product) => (
              <li key={product.id}>
                <CartItem>
                  <figure>
                    <Image
                      src={product.imageUrl}
                      alt="camisa"
                      width={94}
                      height={94}
                    />
                  </figure>
                  <div className="product__data">
                    <p className="product__name">{product.name}</p>
                    <strong className="product__price">{product.price}</strong>
                    <button
                      className="product__remove"
                      onClick={() => removeFromCart(product.id)}
                    >
                      Remover
                    </button>
                  </div>
                </CartItem>
              </li>
            ))}
          </ul>
        </main>
        <footer>
          <ButtonComponent
            onClick={createCheckoutSession}
            disabled={isCreatingAnCheckoutSession || cart.length <= 0}
          >
            Finalizar Compra
          </ButtonComponent>
        </footer>
      </CartContent>
    </CartComponentContainer>
  );
};
