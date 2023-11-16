import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
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
  height: 47.5rem;
  border-radius: 5.12%;
`;

export const Time = styled.div`
  font-size: 2.75rem;
  color: #fff;
  width: 75%;
`;

export const LikeButton = styled.button`
  width: 5rem;
  height: 0.25rem;
  background-color: #fff;
  position: relative;
`;

export const LikeIndicator = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const Likes = styled.div`
  font-size: 2.75rem;
  margin-right: 1rem;
  color: #fff;
`;

export const Id = styled.div`
  margin-right: 10px;
  color: #fff;
`;

export const Comment = styled.div`
  // 코멘트 스타일 추가
  color: #fff;
`;