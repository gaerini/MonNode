import React from "react";
import BottomNav from "components/common/BottomNav";
import BlackBackground from "components/common/BlackBackground";
import AddFile from "components/common/AddFile";

const Profile = () => {
  return (
    <>
      <BlackBackground>
        <h1>Profile</h1>
        <AddFile />
        <BottomNav />
      </BlackBackground>
    </>
  );
};

export default Profile;
