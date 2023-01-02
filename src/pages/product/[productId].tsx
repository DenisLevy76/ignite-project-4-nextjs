import { useRouter } from 'next/router';

const Product: React.FC = () => {
  const {
    query: { productId },
  } = useRouter();
  return <h1>{productId}</h1>;
};

export default Product;
