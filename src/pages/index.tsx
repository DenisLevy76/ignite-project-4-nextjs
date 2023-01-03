import Head from 'next/head';
import { styled } from '../styles';
import { HomeContainer } from '../styles/pages/home';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <HomeContainer>
        <h1>Hello world</h1>
      </HomeContainer>
    </>
  );
}
