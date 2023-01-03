import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import { useState } from "react";
import Stripe from "stripe";
import { ProductComponent } from "../../components/ProductComponent";
import { stripe } from "../../lib/stripe";
import {
  ProductDetails,
  ProductPageContainer,
} from "../../styles/pages/product";

interface ProductPageProps {
  product: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
    description: string;
    defaultPriceId: string;
  };
}

const Product: React.FC<ProductPageProps> = ({ product }) => {
  const [isCreatingAnCheckoutSession, setIsCreatingAnCheckoutSession] =
    useState<boolean>(false);
  if (!product) {
    return <h1>Loading..</h1>;
  }

  const createCheckoutSession = async () => {
    try {
      setIsCreatingAnCheckoutSession(true);
      const response = await axios.post("/api/checkout", {
        priceId: product.defaultPriceId,
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
    <ProductPageContainer>
      <ProductComponent product={product} primary={false} />
      <ProductDetails>
        <h2 className="product__name">{product.name}</h2>
        <span className="product__price">{product.price}</span>
        <span className="product__desc">{product.description}</span>
        <button
          type="button"
          className="product__shop"
          onClick={createCheckoutSession}
          disabled={isCreatingAnCheckoutSession}
        >
          Comprar
        </button>
      </ProductDetails>
    </ProductPageContainer>
  );
};

export default Product;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          productId: "prod_N6C6KSqOMaZKEw",
        },
      },
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<
  any,
  { productId: string }
> = async ({ params }) => {
  const productId = params?.productId || "";

  const product = await stripe.products.retrieve(productId, {
    expand: ["default_price"],
  });

  const price = product.default_price as Stripe.Price;
  const formatedPrice = price.unit_amount
    ? new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount / 100)
    : 0;

  const productPayload = {
    id: product.id,
    name: product.name,
    imageUrl: product.images[0],
    price: formatedPrice,
    defaultPriceId: price.id,
    description: product.description,
  };

  console.log(productPayload);

  return {
    props: {
      product: productPayload,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  };
};
