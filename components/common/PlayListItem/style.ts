import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  width: 100%;
`;

export const TopWrapper = styled.div`
  width: 85%;
  height: 4rem;
  display: flex;
  align-items: center;
`;

export const BottomWrapper = styled.div`
  width: 85%;
  height: 2rem;
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 37.5rem;
  height: 38rem;
  border-radius: 5.12%;
`;

export const Time = styled.div`
  font-size: 2.75rem;
  color: #fff;
  width: 75%;
`;

export const LikeButton = styled.div`
  width: 3rem;
  position: relative;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const LikeIndicator = styled.div<{ isLiked: boolean; bgColor: string }>`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background: #fff;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  left: 0;
  /* right: auto; */
  transition: ${({ theme }) => theme.transitions.fast};
  ${({ isLiked, bgColor }) =>
    isLiked &&
    css`
      left: 2.25rem;
      /* right: 0; */
      background: ${bgColor};
    `}
`;
export const LikeBar = styled.div`
  width: 100%;
  height: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.full};
`;
export const Likes = styled.div<{ bgColor: string; likes: number }>`
  font-size: 2.75rem;
  margin-right: 1rem;
  ${({ bgColor }) =>
    bgColor &&
    css`
      color: ${bgColor};
    `}
  ${({ likes, bgColor }) =>
    likes > 999 &&
    css`
      background: ${bgColor};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `}
`;

export const Id = styled.div`
  margin-right: 10px;
  color: #fff;
`;

export const Comment = styled.div`
  // 코멘트 스타일 추가
  color: #fff;
`;
