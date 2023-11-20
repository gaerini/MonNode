import React from 'react';
import * as S from "./style";
import BottomNav from 'components/common/BottomNav';
import BlackBackground from 'components/common/BlackBackground';     
import ProfileImage from './components/ProfileImage';
import ButtonImage from "./components/Group 57.png";
import ProfileInfoWrapper from './components/ProfileInfo';

const Profile = () => {

  return (
    <>
      <BlackBackground>
        <ProfileImage />
        <ProfileInfoWrapper/>
        <BottomNav />
      </BlackBackground>
    </>
  );
}

export default Profile;