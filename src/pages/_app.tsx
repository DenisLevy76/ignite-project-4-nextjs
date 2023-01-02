import type { AppProps } from 'next/app'
import Head from 'next/head'

import { Roboto } from '@next/font/google'

const roboto = Roboto({ weight: ['100', '400', '700'] })

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </>
}
