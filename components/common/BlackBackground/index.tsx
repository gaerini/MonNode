import React from "react";
import Image from "next/image";
import * as S from "./style";

interface DefaultBackgroundProps {
  children?: React.ReactNode;
}

const BlackBackground: React.FC<DefaultBackgroundProps> = ({ children }) => {
    return (
        <S.BackgroundContainer>
            {children}
        </S.BackgroundContainer>
    );
};

export default BlackBackground;