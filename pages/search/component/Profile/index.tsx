import ProfileImage from "../../../profile/components/ProfileImage";
import ProfileInfo from "../../../profile/components/ProfileInfo";
import { useState, useEffect, ChangeEvent, MouseEvent } from "react";
import { useSession } from "next-auth/react";

import API from "../../../../pages/api/base-api";

interface ProfileProps {
  email: string;
}

const Profile: React.FC<ProfileProps> = ({ email }) => {
  const { data: session, status } = useSession();
  const [followState, setFollowState] = useState(false);

  useEffect(() => {
    if (session) {
      API.get("/checkIfFriend", {
        params: {
          userEmail: (session.profile as { email: string }).email,
          checkEmail: email,
        },
      }).then((response) => {
        setFollowState(response.data.isFriend);
      });
    }
  }, [followState]);

  const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    if (session) {
      API.post("/friendAdd", {
        FollowerEmail: (session.profile as { email: string }).email,
        FolloweeEmail: email,
      }).then((response) => {
        if (response.data.success) {
          setFollowState(true);
        }
      });
    }
  };

  return (
    <>
      <ProfileImage />
      <ProfileInfo email={email} />
      {followState ? (
        <h1>팔로우 하고 있는 계정입니다</h1>
      ) : (
        <button onClick={onClickHandler}>팔로우</button>
      )}
    </>
  );
};

export default Profile;
