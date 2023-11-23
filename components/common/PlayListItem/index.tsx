import { Slider } from "@nextui-org/react";
import React, { useState } from "react";
import * as S from "./style";

type PlayListItemProps = {
  id: string;
  image: string;
  time: string;
  initialLikes: number;
  comment: string;
};

const PlayListItem: React.FC<PlayListItemProps> = ({
  id,
  image,
  time,
  initialLikes,
  comment,
}) => {
  const [likes, setLikes] = useState<number>(initialLikes);
  const [liked, setLiked] = useState<boolean>(false);

  const toggleLike = () => {
    console.log("clicked");
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const getLikesColor = () => {
    if (likes < 99) return "green";
    if (likes < 999) return "red";
    else
      return "linear-gradient(to bottom, rgb(34, 0, 255), rgb(255, 0, 223), rgb(255, 175, 0))";
  };

  const formatLikes = () => {
    return likes >= 100 ? (likes / 1000).toFixed(1) + "kdB" : likes + "dB";
  };

  return (
    <S.Container className="playListItem">
      <S.Image src={image} alt={`Thumbnail for ${id}`} />
      <S.TopWrapper>
        <S.Time>{time}</S.Time>
        <S.Likes likes={likes} bgColor={getLikesColor()}>
          {formatLikes()}
        </S.Likes>
        <S.LikeButton onClick={toggleLike}>
          <S.LikeIndicator
            isLiked={liked}
            bgColor={getLikesColor()}
            className={`likeIndicator ${liked ? "right" : "left"}`}
            // style={{
            //   backgroundColor: liked ? getLikesColor() : "white",
            //   right: liked ? "auto" : "2.25rem",
            //   left: liked ? "2.25rem" : "auto",
            // }}
          ></S.LikeIndicator>
          <S.LikeBar />
        </S.LikeButton>
        {/* <div onClick={toggleLike} style={{ width: "6rem", height: "2rem" }}>
          <Slider
            size="sm"
            step={1}
            maxValue={1}
            minValue={0}
            aria-label="Temperature"
            value={liked ? 1 : 0}
            // className="w-24"
          />
        </div> */}
      </S.TopWrapper>
      <S.BottomWrapper>
        <S.Id>{id}</S.Id>
        <S.Comment>{comment}</S.Comment>
      </S.BottomWrapper>
    </S.Container>
  );
};

export default PlayListItem;
