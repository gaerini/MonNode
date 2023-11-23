import React from "react";
import * as S from './style'

function MusicBox() {
    return (
        <S.Container>
            <S.ImageWrapper>
                <S.UploadPicture></S.UploadPicture>
            </S.ImageWrapper>
            <S.TimeWrapper>
                <S.TimeStamp></S.TimeStamp>
                <S.Decibel></S.Decibel>
            </S.TimeWrapper>
            <S.FeedWrapper>
                <S.UserName></S.UserName>
                <S.TextFeed></S.TextFeed>
            </S.FeedWrapper>
        </S.Container> 
    )
}