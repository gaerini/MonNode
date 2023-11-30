import { Button } from "@nextui-org/react";
import { musicGanre } from "constants/ganre";
import { AnimatePresence, motion } from "framer-motion";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FadeInFromHidden } from "styles/animations";
import Ganre from "./components/Ganre";
import Nickname from "./components/Nickname";
const spring = {
  type: "spring",
  stiffness: 200,
  damping: 40,
};
function SignUp() {
  const { data: session, status } = useSession();
  const [page, setPage] = useState(1);
  const [selectedGanre, setSelectedGanre] = useState<null | string>(null);
  const [nickname, setNickname] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  useEffect(() => {});
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);
  useEffect(() => {
    if (session) {
      if (session?.profile?.nickname && session?.profile?.ganre) {
        router.push("/");
      }
    }
  }, [session]);
  console.log(session);
  if (status !== "loading")
    return (
      <SignUpContainer>
        {page === 1 ? (
          <Title layout transition={spring}>
            <b>가장 즐겨듣는 장르</b>를 선택해주세요
          </Title>
        ) : (
          <Title layout transition={spring}>
            <b>원하시는 닉네임</b>을 설정해주세요
          </Title>
        )}
        {page === 1 && !isLoading && (
          <Ganre
            setPage={setPage}
            selectedGanre={selectedGanre}
            setSelectedGanre={setSelectedGanre}
          />
        )}
        {page === 2 && (
          <Nickname
            session={session}
            setPage={setPage}
            nickname={nickname}
            setNickname={setNickname}
          />
        )}
      </SignUpContainer>
    );
}

export default SignUp;

const SignUpContainer = styled(motion.div)`
  width: 88%;
  margin: 0 auto;
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
