import {
  CartClose,
  CartComponentContainer,
  CartContent,
  CartItem,
  CartTrigger,
} from "./styles";
import { Handbag, X } from "phosphor-react";

import TShirt from "../../assets/Camisa-Maratona 1.png";
import Image from "next/image";

export const CartComponent: React.FC = () => {
  return (
    <CartComponentContainer>
      <CartTrigger title="Abrir carrinho" aria-label="Abrir carrinho">
        <Handbag size={24} weight="bold" />
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
            <li>
              <CartItem>
                <figure>
                  <Image src={TShirt} alt="camisa" width={94} height={94} />
                </figure>
                <div className="product__data">
                  <p className="product__name">
                    Camiseta Beyond the Limits dwadad adwadsda wdasda
                  </p>
                  <strong className="product__price">R$ 79,90</strong>
                  <button className="product__remove">Remover</button>
                </div>
              </CartItem>
            </li>
          </ul>
        </main>
        <footer></footer>
      </CartContent>
    </CartComponentContainer>
  );
};
