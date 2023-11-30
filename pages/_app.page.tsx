import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import GlobalStyle from "styles/GlobalStyle";
import { SessionProvider } from "next-auth/react";
import "styles/fonts.css";

import Providers from "components/Providers";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <SessionProvider session={pageProps.session}>
        <Providers>
          <Component {...pageProps} />
        </Providers>
      </SessionProvider>
    </RecoilRoot>
  );
}

export default MyApp;
