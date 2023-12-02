import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";
import * as S from "./style";
import Image from "next/image";
import API from "pages/api/base-api";

type Post = {
  id: number;
  imageList: string[];
  createdAt: string;
  decibels: number;
  content: string;
};

interface User {
  email: string;
}

const ProfileInfoWrapper: React.FC<User> = ({ email }) => {
  const { data: session, status } = useSession();
  const [profileData, setProfileData] = useState({
    nickname: "",
    songCount: 0,
    likesCount: 0,
    followersCount: 0,
  });

  useEffect(() => {
    //nickname fetch and binding
    API.get("/userRetrieve", {
      params: { email: email },
    }).then((response) => {
      console.log(response.data);
      setProfileData((prevState) => ({
        ...prevState,
        nickname: response.data.user.nickname,
      }));
    });
  }, [session, status]);

  useEffect(() => {
    API.get("/myposts", {
      params: { email: email },
    })
      .then((response) => {
        const totalDecibels = response.data.userPosts.reduce(
          (sum: number, post: Post) => sum + post.decibels,
          0
        );
        console.log(totalDecibels);
        setProfileData((prevState) => ({
          ...prevState,
          songCount: response.data.userPosts.length,
          likesCount: totalDecibels,
        }));
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });

    API.get("/friendRetrieve", {
      params: { email: email },
    })
      .then((response) => {
        setProfileData((prevState) => ({
          ...prevState,
          songCount: response.data.friends.length,
        }));
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
    // const fetchData = async () => {
    //   try {
    //     const response = await axios.get("API/myposts");
    //     setProfileData(response.data);
    //   } catch (error) {
    //     console.error("Profile data fetch error:", error);
    //   }
    // };
    // fetchData();
  }, [session, status]);

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
