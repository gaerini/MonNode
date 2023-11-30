import styled from 'styled-components';
import Image from 'next/image';

export const ProfileInfoWrapper = styled.div`
   width: 100%;
   height: 5rem;
   color: #fff;
`;

export const TopWrapper = styled.div`
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1.5rem;
`

export const BottomWrapper = styled.div`
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 9rem;
`

export const IconWrapper = styled.div`
    width: 3rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ImageWrapper = styled.div`
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const Name = styled.div`
    font-weight: 800;
    font-size: large;
`;