import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ProductFigure, SuccessPageContainer } from "../styles/pages/success";

export interface SuccessPageProps {
  productData: {
    clientName: string;
    product: {
      name: string;
      imageUrl: string;
    };
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
        <ProductFigure>
          <Image
            src={productData.product.imageUrl}
            alt=""
            width={114}
            height={106}
          />
        </ProductFigure>
        <p>
          Uhuul <strong>{productData.clientName}</strong>, sua{" "}
          <strong>{productData.product.name}</strong> já está a caminho da sua
          casa.
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

  const product = session.line_items?.data[0].price?.product as Stripe.Product;

  const productPayload = {
    clientName: session.customer_details?.name,
    product: {
      name: session.line_items?.data[0].description,
      imageUrl: product.images[0],
    },
  };

  return {
    props: { productData: productPayload },
  };
};
