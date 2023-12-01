import React from "react";
import MainLogoPNG from "public/assets/logo/mainlogo.png";
import styled, { css } from "styled-components";
import { Rotate } from "styles/animations";

function MainLogo({ speed = "slow" }) {
  const ReturnRotationSpeed = () => {
    switch (speed) {
      case "normal":
        return "3s";
      case "fast":
        return "1.5s";
      case "slow":
        return " 5s";
      default:
        return "3s";
    }
  };
  return (
    <LogoContainer speed={ReturnRotationSpeed()} isRotate={true}>
      <img src={MainLogoPNG.src} />
    </LogoContainer>
  );
}

export default MainLogo;

const LogoContainer = styled.div<{ speed: string; isRotate: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ isRotate, speed }) =>
    isRotate &&
    css`
      animation: ${Rotate} ${speed} infinite linear;
    `}
`;

const Logo = styled.img``;
