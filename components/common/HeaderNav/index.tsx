import React from 'react';
import * as S from './style';

type Tab = 'mynode' | 'trend' | 'hot' | 'recent';

interface HeaderNavProps {
  selectedTab: Tab;
  setSelectedTab: (tab: Tab) => void;
}

const HeaderNav: React.FC<HeaderNavProps> = ({ selectedTab, setSelectedTab }) => {
  const handleTabClick = (tab: Tab) => {
    setSelectedTab(tab);
  };

  // 'Trend'를 클릭했을 때 바로 'Hot'과 'Recent'를 보여주기
  const handleTrendClick = () => {
    setSelectedTab('hot'); // 'Trend' 클릭 시 'Hot'으로 상태 변경
  };

  // 'beforeIcon'을 클릭했을 때 'My Node'와 'Trend'를 다시 보여주기
  const handleBeforeClick = () => {
    setSelectedTab('mynode'); // 'beforeIcon' 클릭 시 'mynode'로 상태 변경
  };

  return (
    <S.Container>
      <nav>
        {selectedTab === 'mynode' && (
          <S.NavItem onClick={() => handleTabClick('mynode')} $isActive={true}>
            <img src="/selectedMynodeIcon.svg" alt="My Node" />
          </S.NavItem>
        )}

        {selectedTab !== 'hot' && selectedTab !== 'recent' && (
          <S.NavItem onClick={handleTrendClick} $isActive={selectedTab === 'trend'}>
            <img src="/trendIcon.svg" alt="Trend" />
          </S.NavItem>
        )}

        {(selectedTab === 'hot' || selectedTab === 'recent') && (
          <>
            <S.BeforeIcon onClick={handleBeforeClick}>
              <img src="/beforeIcon.svg" alt="Before" />
            </S.BeforeIcon>
            <S.NavItem onClick={() => handleTabClick('hot')} $isActive={selectedTab === 'hot'}>
              <img src={selectedTab === 'hot' ? "/selectedHotIcon.svg" : "/hotIcon.svg"} alt="Hot" />
            </S.NavItem>
            <S.NavItem onClick={() => handleTabClick('recent')} $isActive={selectedTab === 'recent'}>
              <img src={selectedTab === 'recent' ? "/selectedRecentIcon.svg" : "/recentIcon.svg"} alt="Recent" />
            </S.NavItem>
          </>
        )}
      </nav>
    </S.Container>
  );
};

export default HeaderNav;