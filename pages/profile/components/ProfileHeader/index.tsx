import React, { useState, useEffect } from "react";
import * as S from "./style";
import Image from "next/image";
import { useRouter } from 'next/router';

const ProfileHeader = () => {
  const router = useRouter();

  const handleBeforeClick = () => {
    router.back();
  };

  return (
    <S.HeaderContainer>
        <S.BeforeIcon onClick={handleBeforeClick}>
            <img src="/beforeIcon.svg" alt="Before" />
        </S.BeforeIcon>
        <S.P>프로필 수정</S.P>
    </S.HeaderContainer>
  );
};

export default ProfileHeader;