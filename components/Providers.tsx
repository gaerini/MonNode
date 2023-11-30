import GlobalStyle from "styles/GlobalStyle";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { themeModeAtom } from "recoil/atoms";
import { PMDS_Light } from "styles/PMDS";
import { ReactNode, useEffect, useState } from "react";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);
  return (
    <NextUIProvider>
      <ThemeProvider theme={PMDS_Light}>
        <GlobalStyle>{children}</GlobalStyle>
      </ThemeProvider>
    </NextUIProvider>
  );
};

export default Providers;
