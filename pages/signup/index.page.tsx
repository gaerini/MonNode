import { Button } from "@nextui-org/react";
import { musicGanre } from "constants/ganre";
import { AnimatePresence, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FadeInFromHidden } from "styles/animations";
import Ganre from "./components/Ganre";
const spring = {
  type: "spring",
  stiffness: 200,
  damping: 40,
};
function SignUp() {
  const { data: session, status } = useSession();
  const [page, setPage] = useState(1);
  const [selectedGanre, setSelectedGanre] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {});
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  if (status !== "loading")
    return (
      <SignUpContainer>
        <Title layout transition={spring}>
          <b>가장 즐겨듣는 장르</b>를 선택해주세요
        </Title>
        {page === 1 && !isLoading && (
          <Ganre
            selectedGanre={selectedGanre}
            setSelectedGanre={setSelectedGanre}
          />
        )}
      </SignUpContainer>
    );
}

export default SignUp;

const SignUpContainer = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 1.625rem;
  font-weight: 800;
  & b {
    color: ${({ theme }) => theme.colors.pointYellow};
  }
`;
