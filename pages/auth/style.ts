import styled from "styled-components";

export const AuthContainer = styled.div`
  width: 88%;
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

export const Title = styled.h1`
  font-size: 1.625rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.pointYellow};
`;
