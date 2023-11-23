import React from 'react';
import * as S from './style';
import PlayListItem from 'components/common/PlayListItem';
import { postList } from '../../../../pages/api/mock/playlistitem.api';

const RecentComponent = () => {
    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit', hour12: false });
    };

    const sortedPosts = [...postList].sort((a, b) => b.created_at.getTime() - a.created_at.getTime());

    return (
        <>
            {sortedPosts.map(post => (
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

export default RecentComponent;