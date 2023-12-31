import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-bottom: 8rem;
`;

export const ProfileImageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 13rem;
  align-itmes: center;
  justify-content: center;
  margin-top: 5rem;
`;

export const ProfileBoxWrapper = styled.div`
  display: flex;
  align-itmes: center;
  justify-content: center;
  margin-top: 3rem;
`;

export const ProfileBox = styled.div`
  width: 75%; /* 디자인에 맞게 크기 조정 */
  height: 3rem; /* 디자인에 맞게 크기 조정 */
  border-top: 0.1rem solid #d9d9d9;
  border-bottom: 0.1rem solid #d9d9d9;
  display: flex;
  align-items: center;
  .categories {
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
    width: 35%;
  }
  .content {
    color: white;
    font-size: 1.5rem;
  }
`;

export const ProfileOpenOptionWrapper = styled.div`
  display: flex;
  align-itmes: center;
  justify-content: center;
  margin-top: 3rem;
  .box {
    width: 75%;
  }
  .categories {
    width: 35%;
    color: white;
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

export const MusicClockWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 2rem;
  font-weight: 700;
  font-size: 1.5rem;
`;

export const Before2weekWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 2rem;
  font-weight: 700;
  font-size: 1.5rem;
`;
