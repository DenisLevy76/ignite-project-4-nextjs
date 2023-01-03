import Image from "next/image";
import { IProduct } from "../../pages";
import { ProductContainer } from "./styles";

export const ProductComponent: React.FC<{ product: IProduct }> = ({
  product,
}) => {
  return (
    <ProductContainer href="/404">
      <Image
        src={product.imageUrl}
        alt="Camisa rocketseat"
        width={520}
        height={480}
      />
      <footer>
        <strong>{product.name}</strong>
        <span>{product.price}</span>
      </footer>
    </ProductContainer>
  );
};
