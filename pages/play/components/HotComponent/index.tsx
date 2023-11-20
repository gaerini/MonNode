import React from 'react';
import Image from 'next/image';
import * as S from './style';
import PlayListItem from 'components/common/PlayListItem';

const HotComponent = () => {
    const items = [
        {
            id: 'lovememuchmore',
            image: '/exampleImage.svg',
            time: '21:14',
            initialLikes: 17,
            comment: '가을 밤엔 이 노래지'
        },
        {
            id: 'musiccookie',
            image: '/exampleImage.svg',
            time: '17:55',
            initialLikes: 270,
            comment: '한강 걸으면서 듣는 중'
        },
    ];

    return (
        <>
            {items.map(item => (
                <PlayListItem
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    time={item.time}
                    initialLikes={item.initialLikes}
                    comment={item.comment}
                />
            ))}
        </>
    );
};

export default HotComponent;
