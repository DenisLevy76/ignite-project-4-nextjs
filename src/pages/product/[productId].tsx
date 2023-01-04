import axios from "axios";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useContext, useState } from "react";
import Stripe from "stripe";
import { ProductComponent } from "../../components/ProductComponent";
import { CartContext } from "../../contexts/CartContext";
import { stripe } from "../../lib/stripe";
import {
  CartButton,
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
  const { addToCart, removeFromCart, isInTheCart } = useContext(CartContext);

  if (!product) {
    return <h1>Loading..</h1>;
  }

  return (
    <>
      <Head>
        <title>{product.name} - Ignite Shop</title>
      </Head>

      <ProductPageContainer>
        <ProductComponent product={product} primary={false} />
        <ProductDetails>
          <h2 className="product__name">{product.name}</h2>
          <span className="product__price">{product.price}</span>
          <span className="product__desc">{product.description}</span>

          {!isInTheCart(product.id) ? (
            <CartButton
              type="button"
              className="product__shop"
              variant="add"
              onClick={() => addToCart(product)}
            >
              Colocar na sacola
            </CartButton>
          ) : (
            <CartButton
              type="button"
              variant="remove"
              className="product__shop"
              onClick={() => removeFromCart(product.id)}
            >
              Remover da sacola
            </CartButton>
          )}
        </ProductDetails>
      </ProductPageContainer>
    </>
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
