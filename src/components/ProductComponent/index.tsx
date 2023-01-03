import Image from "next/image";
import { IProduct } from "../../pages";
import { ROUTES } from "../../settings/routes";
import { ProductContainer } from "./styles";

export const ProductComponent: React.FC<{
  product: IProduct;
  primary?: boolean;
}> = ({ product, primary = true }) => {
  const secondary = !primary ? { as: "figure" } : {};

  return (
    <ProductContainer
      href={ROUTES.product(product.id)}
      prefetch={false}
      {...secondary}
    >
      <Image
        src={product.imageUrl}
        alt="Camisa rocketseat"
        width={520}
        height={480}
      />
      {primary && (
        <footer>
          <strong>{product.name}</strong>
          <span>{product.price}</span>
        </footer>
      )}
    </ProductContainer>
  );
};
