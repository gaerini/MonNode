import React from "react";
import * as S from "./style";
import BottomNav from "components/common/BottomNav";
import BlackBackground from "components/common/BlackBackground";
import ProfileImage from "./components/ProfileImage";
import ButtonImage from "./components/Group 57.png";
import ProfileInfoWrapper from "./components/ProfileInfo";
import Before2week from "./components/Before2week";
import MusicClock from "./components/MusicClock";
import ProfileHeader from "./components/ProfileHeader";

<BlackBackground></BlackBackground>;
const Profile = () => {
  return (
    <S.Container>
      <ProfileHeader />
      <ProfileImage />
      <ProfileInfoWrapper />

      {/* <h1>Profile</h1>
        <S.ProfileImageWrapper>
        <ProfileImage></ProfileImage>
        </S.ProfileImageWrapper>
        <S.ProfileBoxWrapper>
        <S.ProfileBox>
        <div className="categories">Name</div>
        <div className="content">채윤석</div>
        </S.ProfileBox>
        </S.ProfileBoxWrapper>
        <S.ProfileBoxWrapper>
        <S.ProfileBox>
        <div className="categories">User Name</div>
        <div className="content">EDM 테크노 광전사 비둘기</div>
        </S.ProfileBox>
        </S.ProfileBoxWrapper>
        <S.ProfileBoxWrapper>
        <S.ProfileBox>
        <div className="categories">Melody</div>
        <div className="content">EDM에 몸을 맡겨</div>
        </S.ProfileBox>
        </S.ProfileBoxWrapper>
        <S.ProfileBoxWrapper>
        <S.ProfileBox>
        <div className="categories">Genre</div>
        <div className="content">EDM</div>
        </S.ProfileBox>
        </S.ProfileBoxWrapper>
        <S.ProfileOpenOptionWrapper>
        <div className="box">
        <div className="categories">공개계정으로 설정</div>
        </div>
      </S.ProfileOpenOptionWrapper> */}
      <S.MusicClockWrapper>
        <MusicClock />
      </S.MusicClockWrapper>
      <S.Before2weekWrapper>
        <Before2week />
      </S.Before2weekWrapper>
      <BottomNav />
    </S.Container>
  );
};

export default Profile;
