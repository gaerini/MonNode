import axios from "axios";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

function MusicClock() {
  const [recentData, setRecentData] = useState([]);
  const fetchRecentData = async () => {
    const response = await axios.get(`api/mock/recent-data?date=` + Date.now());
    console.log(response.data);
    setRecentData(response.data.RecentWeekData);
  };
  useEffect(() => {
    fetchRecentData();
  }, []);
  return (
    <div style={{ width: "80%" }}>
      <div>나의 음악 시계</div>
      <WhiteWrapper>
        <div className="words">내가 이 시간대에 즐겨 들은 노래는?</div>
        <RecentDataContainer>
          {recentData.length > 0 &&
            recentData.map((data: any) => (
              <RecentDataWrapper key={data?.warning} image={data?.image}>
                {!data?.image && `데이터가 존재하지 않습니다.`}
              </RecentDataWrapper>
            ))}
        </RecentDataContainer>
      </WhiteWrapper>
    </div>
  );
}

export default MusicClock;

const RecentDataContainer = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 1rem;
  background-color: white;
  border-radius: 0.5rem;
`;

const RecentDataWrapper = styled.div<{ image?: string }>`
  width: 33.3%;
  height: 10rem;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.textGray};
  background-image: ${({ image }) => (image ? `url(${image})` : "")};
  background-size: cover;
  border-radius: 0.5rem;
`;

const WhiteWrapper = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  color: black;
  font-size: 1rem;
  margin-top: 0.5rem;
  .words {
    margin-left: 0.5rem;
  }
`;
