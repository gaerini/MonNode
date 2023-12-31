import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  width: 100%;
  z-index: 110;
  min-height: 44px;
  border: 2px solid transparent;
  background-image: linear-gradient(#000, #000),
    linear-gradient(90deg, #0bd4b4, #01cfea);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.25);
  background: #000;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem;
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
`;

export const ContainerWhiteSpace = styled.div`
  position: absolute;
  bottom: 0;
  height: 5.6rem;
  min-height: 44px;
`;

export const iconWrapper = styled.div`
  margin-right: 1rem;
`;

export const NavItemAnchor = styled.div<{ $isActive: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  & img {
    width: 100%;
    height: 100%;
  }
`;
