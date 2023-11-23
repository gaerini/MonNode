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
        <S.Name>이름{profileData.nickname}</S.Name>
        <button>
          <S.ImageWrapper>
            <Image src="/ProfileEditIcon.svg" alt="" width={20} height={20} />
          </S.ImageWrapper>
        </button>
      </S.TopWrapper>
      <S.BottomWrapper>
        <S.IconWrapper>
          <S.ImageWrapper>
            <Image src="/ProfilePlayIcon.svg" alt="" width={20} height={20} />
          </S.ImageWrapper>
          <p>{profileData.songCount}</p>
        </S.IconWrapper>
        <S.IconWrapper>
          <S.ImageWrapper>
            <Image src="/ProfileLikeIcon.svg" alt="" width={20} height={20} />
          </S.ImageWrapper>
          <p>{profileData.likesCount}</p>
        </S.IconWrapper>
        <S.IconWrapper>
          <S.ImageWrapper>
            <Image src="/ProfileFollowIcon.svg" alt="" width={20} height={20} />
          </S.ImageWrapper>
          <p>{profileData.followersCount}</p>
        </S.IconWrapper>
      </S.BottomWrapper>
    </S.ProfileInfoWrapper>
  );
};

export default ProfileInfoWrapper;
