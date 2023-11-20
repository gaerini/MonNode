import React from "react";
import Image from "next/image";
import * as S from "./style";

const CancelButton = () => {
    return (
       <S.ButtonBox>
            <div className="word">회원 탈퇴</div>
       </S.ButtonBox>
    );
};

export default CancelButton;