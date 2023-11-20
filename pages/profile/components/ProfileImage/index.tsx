import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import * as S from "./style";

const ProfileImage = () => {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        axios.get("https://example.com/profile-image")
            .then(response => {
                setImageUrl(response.data.url);
            })
            .catch(error => {
                console.error("Profile image fetch error:", error);
            });
    }, []);

    return (
        <S.Container>
            <S.ProfileImageWrapper>
                {imageUrl && <Image src={imageUrl} alt="Profile Image" layout="fill" />}
            </S.ProfileImageWrapper>
        </S.Container>
    );

};

export default ProfileImage;