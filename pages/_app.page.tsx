import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import "styles/fonts.css";
import { PMDS_Light } from "styles/PMDS";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={PMDS_Light}>
        <GlobalStyle>
          <Component {...pageProps} />
        </GlobalStyle>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
