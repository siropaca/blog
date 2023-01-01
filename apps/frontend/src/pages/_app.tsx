import '@/styles/globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { ApolloProvider } from '@apollo/client';
import { RecoilRoot } from 'recoil';

import { Footer } from '@/components/Footer';
import { Head } from '@/components/Head';
import { Header } from '@/components/Header';
import { client } from '@/lib/apollo';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps<{}>): JSX.Element {
  return (
    <RecoilRoot>
      <Head />

      <ApolloProvider client={client}>
        <Header />

        <Component {...pageProps} />

        <Footer />
      </ApolloProvider>
    </RecoilRoot>
  );
}

export default MyApp;
