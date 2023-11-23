import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./style";
import Image from "next/image";

const ProfileInfoWrapper = () => {
  const [profileData, setProfileData] = useState({
    nickname: "",
    songCount: 0,
    likesCount: 0,
    followersCount: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://example.com/profile-data");
        setProfileData(response.data);
      } catch (error) {
        console.error("Profile data fetch error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <S.ProfileInfoWrapper>
      <S.TopWrapper>
        <p>이름{profileData.nickname}</p>
        <button>
          <S.ImageWrapper>
            <Image src="/ProfileEditIcon.svg" width={10} height={10} />
          </S.ImageWrapper>
        </button>
      </S.TopWrapper>
      <S.BottomWrapper>
        <S.IconWrapper>
          <S.ImageWrapper>
            <Image src="/ProfilePlayIcon.svg" width={80} height={80} />
          </S.ImageWrapper>
          <p>{profileData.songCount} 노래수</p>
        </S.IconWrapper>
        <S.IconWrapper>
          <S.ImageWrapper>
            <Image src="/ProfileLikeIcon.svg" width={80} height={80} />
          </S.ImageWrapper>
          <p>{profileData.likesCount} 좋아요</p>
        </S.IconWrapper>
        <S.IconWrapper>
          <S.ImageWrapper>
            <Image src="/ProfileFollowIcon.svg" width={80} height={80} />
          </S.ImageWrapper>
          <p>{profileData.followersCount} 팔로우</p>
        </S.IconWrapper>
      </S.BottomWrapper>
    </S.ProfileInfoWrapper>
  );
};

export default ProfileInfoWrapper;
