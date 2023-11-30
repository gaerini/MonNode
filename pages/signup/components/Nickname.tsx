import { Button, Input } from "@nextui-org/react";
import { motion } from "framer-motion";
import React from "react";
import { styled } from "styled-components";
import { FadeInFromHidden } from "styles/animations";
import { useRouter } from "next/router";
import API from "pages/api/base-api";

function Nickname({
  session,
  setPage,
  nickname,
  setNickname,
  selectedGanre,
}: any) {
  const router = useRouter();

  const handleNextClick = async () => {
    if (!nickname) {
      //alert("닉네임을 입력해주세요.");
      return;
    }

    try {
      await API.put("/user", {
        username: session.user.username,
        email: session.user.email,
        profile: session.user.profile,
        ganre: selectedGanre,
        nickname: nickname,
      });

      router.push("/");
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <NicknameContainer>
      <Input
        type="text"
        onValueChange={(value) => {
          setNickname(value);
        }}
        // defaultValue={session.user.name}
        size={"lg"}
        fullWidth={true}
        label="닉네임을 입력해주세요"
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        <Button
          size="lg"
          fullWidth
          color={"default"}
          onClick={() => setPage(1)}
        >
          이전
        </Button>
        <Button
          size="lg"
          fullWidth
          color={nickname ? "primary" : "default"}
          onClick={handleNextClick}
        >
          다음
        </Button>
      </div>
    </NicknameContainer>
  );
}

export default Nickname;

const NicknameContainer = styled(motion.div)`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  opacity: 0;
  gap: 5rem;
  animation: ${FadeInFromHidden} 0.4s 0.4s forwards;
`;
