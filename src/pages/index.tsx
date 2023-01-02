import Head from 'next/head';
import { styled } from '../styles';

const Button = styled('button', {
  backgroundColor: '$rocktseat',
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <Button>Hello world</Button>
      </main>
    </>
  );
}
