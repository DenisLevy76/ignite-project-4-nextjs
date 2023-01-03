import Image from "next/image";
import { IMAGES } from "../../settings/images";
import { ProductContainer } from "./styles";

export const ProductComponent: React.FC<{ index: 1 | 2 | 3 | 4 | 5 }> = ({
  index,
}) => {
  return (
    <ProductContainer href="/404">
      <Image
        src={IMAGES.caroulsel[index]}
        alt="Camisa rocketseat"
        width={520}
        height={480}
      />
      <footer>
        <strong>Camiseta Beyond the Limits</strong>
        <span>R$ 79,90</span>
      </footer>
    </ProductContainer>
  );
};
