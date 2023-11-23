import React from 'react';
import * as S from './style';
import PlayListItem from 'components/common/PlayListItem';
import { postList } from '../../../../pages/api/mock/playlistitem.api';

const MynodeComponent = () => {
    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', hour12: false });
    };

    // 임시 로그인한 사용자 ID (예시: 101)
    // OAuth 구축 완료 후 실제 로그인한 사용자의 ID로 대체
    const loggedInUserId = 101;

    // 로그인한 사용자가 올린 게시물만 필터링
    const myPosts = postList.filter(post => post.author === loggedInUserId);

    return (
        <>
            {myPosts.map(post => (
                <PlayListItem
                    key={post.id}
                    id={post.id.toString()}
                    image={post.image[0]}
                    time={formatTime(post.created_at)}
                    initialLikes={post.likes}
                    comment={post.content}
                />
            ))}
        </>
    );
};

export default MynodeComponent;