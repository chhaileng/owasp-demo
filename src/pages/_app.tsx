import { ChakraProvider } from '@chakra-ui/react'
import NextNProgress from 'nextjs-progressbar'

import theme from '../theme'
import { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>Basic Web Application Security</title>
      </Head>
      <NextNProgress />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
