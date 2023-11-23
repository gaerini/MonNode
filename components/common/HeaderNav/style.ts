import styled, { css } from "styled-components";

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  width: 100%;
  z-index: 110;
  height: 3rem;
  /* border: 2px solid transparent; */
  /* background-image: linear-gradient(#000, #000),
    linear-gradient(90deg, #0bd4b4, #01cfea); */
  max-width: 430px;
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.25);
  background: #000;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 3rem;
    width: 100%;
    height: 100%;
    margin: 1.25rem auto;
  }
`;

export const ContainerWhiteSpace = styled.div`
  position: absolute;
  bottom: 0;
  height: 3rem;
  min-height: 44px;
`;

export const iconWrapper = styled.div`
  margin-right: 1rem;
`;

export const NavItem = styled.div<{ $isActive: boolean }>`
  position: relative;

  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  width: 6.25rem;
  height: 4rem;
  border-radius: 50%;
  cursor: pointer;
`;

export const BeforeIcon = styled.div`
  left: 5rem;
  top: 5.9rem;
  position: absolute;
  cursor: pointer;
`;
