import React from "react";
import * as S from "./style";
import Image from "next/image";

const ProfileInfoWrapper = () => {
    return (
        <S.ProfileInfoWrapper>
            <S.TopWrapper>
                <p>EDM 듣는 비둘기</p>
                <button>
                    <S.ImageWrapper>
                            <Image src="/ProfileEditIcon.svg" width={10} height={10} layout="fill"/>
                    </S.ImageWrapper>
                </button>
            </S.TopWrapper>
            <S.BottomWrapper>
                <S.IconWrapper>
                    <S.ImageWrapper>
                        <Image src="/ProfilePlayIcon.svg" width={80} height={80} layout="fill"/>
                    </S.ImageWrapper>
                    <p>39</p>
                </S.IconWrapper>
                <S.IconWrapper>
                    <S.ImageWrapper>
                        <Image src="/ProfileLikeIcon.svg" width={80} height={80} layout="fill"/>
                    </S.ImageWrapper>
                    <p>29k</p>
                </S.IconWrapper>
                <S.IconWrapper>
                    <S.ImageWrapper>
                        <Image src="/ProfileFollowIcon.svg" width={80} height={80} layout="fill"/>
                    </S.ImageWrapper>
                    <p>249</p>
                </S.IconWrapper>
            </S.BottomWrapper>
        </S.ProfileInfoWrapper>
    );
};

export default ProfileInfoWrapper;