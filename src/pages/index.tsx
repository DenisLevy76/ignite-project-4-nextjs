import Head from "next/head";
import { ProductComponent } from "../components/ProductComponent";
import { HomeContainer } from "../styles/pages/home";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { GetStaticProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";

export interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  productUrl: string;
  price: number;
}

export interface HomePageProps {
  products: IProduct[];
}

export default function Home({ products }: HomePageProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 32,
    },
  });

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <HomeContainer>
        <ul ref={sliderRef} className="keen-slider">
          {products.map((product) => (
            <li className="keen-slider__slide" key={product.id}>
              <ProductComponent product={product} />
            </li>
          ))}
        </ul>
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const list = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      productUrl: product.url,
      price: price.unit_amount
        ? new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(price.unit_amount / 100)
        : 0,
    };
  });

  return {
    props: {
      products: list,
    },
    revalidate: 60 * 60 * 24 * 7, // 7 dias (apenas para estudos)
  };
};
