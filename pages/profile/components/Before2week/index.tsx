import axios from "axios";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

function Before2week() {
  const [weekData, setWeekData] = useState([]);
  const fetch2weekData = async () => {
    const response = await axios.get(`api/mock/week-data?date=` + Date.now());
    console.log(response.data);
    setWeekData(response.data.exampleWeekData);
  };
  useEffect(() => {
    fetch2weekData();
  }, []);
  return (
    <div>
      <WeekDataContainer>
        {weekData.length > 0 &&
          weekData.map((data: any) => (
            <WeekDataWrapper key={data?.date} image={data?.image}>
              {!data?.image && data.date}
            </WeekDataWrapper>
          ))}
      </WeekDataContainer>
    </div>
  );
}

export default Before2week;

// [{
//   date:1,
//   image: "alsdfjlasd",
// }]

const WeekDataContainer = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const WeekDataWrapper = styled.div<{ image?: string }>`
  width: 12%;
  height: 6rem;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.textGray};
  background-image: ${({ image }) => (image ? `url(${image})` : "")};
  background-size: cover;
`;
