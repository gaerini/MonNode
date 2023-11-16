import React from 'react';
import * as S from "./style";
import BottomNav from 'components/common/BottomNav';
import BlackBackground from 'components/common/BlackBackground';     
import OptionBox from './components/\bButton';
import LogOutButton from './components/\bButton';
import CancelButton from './components/CancelButton/Index';

const Profile = () => {

  return (
    <>
      <BlackBackground>
        <h1>Option</h1>
        <S.OptionsWrapper>
          <S.Options>
            <div className='icon'>아이콘</div>
            <div className='category'>알림</div>
          </S.Options>
        </S.OptionsWrapper>
        <S.OptionsWrapper>
          <S.Options>
            <div className='icon'>아이콘</div>
            <div className='category'>개인정보 보호</div>
          </S.Options>
        </S.OptionsWrapper>
        <S.OptionsWrapper>
          <S.Options>
            <div className='icon'>아이콘</div>
            <div className='category'>정보</div>
          </S.Options>
        </S.OptionsWrapper>
        <S.OptionsWrapper>
          <S.Options>
            <div className='icon'>아이콘</div>
            <div className='category'>기타 설정</div>
          </S.Options>
        </S.OptionsWrapper>
        <S.OptionsWrapper>
          <S.Options>
            <div className='icon'>아이콘</div>
            <div className='category'>공유</div>
          </S.Options>
        </S.OptionsWrapper>
        <S.ButtonBoxesWrapper>
          <S.ButtonBoxWrapper>
            <LogOutButton></LogOutButton>
          </S.ButtonBoxWrapper>
          <S.ButtonBoxWrapper>
            <CancelButton></CancelButton>
          </S.ButtonBoxWrapper>
          <S.VersionWrapper>
            <div>Version 1.0.0.1</div>
          </S.VersionWrapper>
        </S.ButtonBoxesWrapper>
        <BottomNav />
      </BlackBackground>
    </>
  );
}

export default Profile;