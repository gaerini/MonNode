import React, { useState } from 'react';
import * as S from './style';

type PlayListItemProps = {
  id: string;
  image: string;
  time: string;
  initialLikes: number;
  comment: string;
};

const PlayListItem: React.FC<PlayListItemProps> = ({ id, image, time, initialLikes, comment }) => {
  const [likes, setLikes] = useState<number>(initialLikes);
  const [liked, setLiked] = useState<boolean>(false);

  const toggleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  const getLikesColor = () => {
    if (likes < 100) return 'green';
    if (likes < 1000) return 'blue';
    else return 'red';
  };

  const formatLikes = () => {
    return likes >= 100 ? (likes / 1000).toFixed(1) + 'kdb' : likes + 'db';
  };

  return (
    <S.Container className="playListItem">
      <S.Image src={image} alt={`Thumbnail for ${id}`} />
      <S.TopWrapper>
        <S.Time>{time}</S.Time>
        <S.Likes style={{ color: getLikesColor() }}>{formatLikes()}</S.Likes>
        <S.LikeButton className={`likeButton ${liked ? 'liked' : ''}`} onClick={toggleLike}>
            <S.LikeIndicator className={`likeIndicator ${liked ? 'right' : 'left'}`} style={{ backgroundColor: liked ? getLikesColor() : 'white', right: liked ? 'auto' : '2.25rem', left: liked ? '2.25rem' : 'auto' }}></S.LikeIndicator>
        </S.LikeButton>
      </S.TopWrapper>
      <S.BottomWrapper>
        <S.Id>{id}</S.Id>
        <S.Comment>{comment}</S.Comment>
      </S.BottomWrapper>
    </S.Container>
  );
};

export default PlayListItem;