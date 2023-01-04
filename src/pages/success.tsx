import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import {
  ProductFigure,
  ProductsList,
  SuccessPageContainer,
} from "../styles/pages/success";

export interface SuccessPageProps {
  productData: {
    clientName: string;
    productsImages: string[];
  };
}

const Success: React.FC<SuccessPageProps> = ({ productData }) => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <title>Compra Aprovada!</title>
      </Head>
      <SuccessPageContainer>
        <strong>Compra efetuada!</strong>
        <ProductsList>
          {productData.productsImages.map((productImage) => (
            <li key={productImage}>
              <ProductFigure>
                <Image src={productImage} alt="" width={114} height={106} />
              </ProductFigure>
            </li>
          ))}
        </ProductsList>
        <p>
          Uhuul <strong>{productData.clientName}</strong>, sua compra de{" "}
          {productData.productsImages.length}{" "}
          {productData.productsImages.length > 1 ? "camisetas" : "camiseta"} já
          está a caminho da sua casa.
        </p>
        <Link href="/">Voltar ao catálogo</Link>
      </SuccessPageContainer>
    </>
  );
};

export default Success;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: { destination: "/", permanent: false },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const productsImages = session.line_items?.data.map((lineItem) => {
    const product = lineItem.price?.product as Stripe.Product;
    return product.images[0];
  });

  const productPayload = {
    clientName: session.customer_details?.name,
    productsImages,
  };

  return {
    props: { productData: productPayload },
  };
};
