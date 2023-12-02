import React, { useEffect, useState } from "react";
import * as S from "./style";
import PlayListItem from "components/common/PlayListItem";
import { useSession } from "next-auth/react";
import API from "../../../../pages/api/base-api";
import AddComponent from "../AddComponent";

type Post = {
  id: number;
  imageList: string;
  createdAt: string;
  decibels: number;
  content: string;
};

const MynodeComponent: React.FC = () => {
  const { data: session, status } = useSession();
  const [myPosts, setMyPosts] = useState<Post[]>([]);

  const formatTime = (date: string): string => {
    return new Date(date).toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  useEffect(() => {
    if (session) {
      console.log("Session:", session);
      console.log("Email:", (session.user as { email: string }).email);
      console.log("Email:", (session.profile as { email: string }).email);
      console.log(typeof session.user.email);
      API.get("/myposts", {
        params: { email: (session.profile as { email: string }).email },
      })
        .then((response) => {
          console.log(response.data.userPosts[0].imageList);
          setMyPosts(response.data.userPosts);
        })
        .catch((error) => {
          console.error("Error fetching posts:", error);
        });
    }
  }, [session, status]);

  return (
    <>
      {myPosts.length === 0 ? (
        <AddComponent />
      ) : (
        myPosts.map((post) => {
          const imageArr = JSON.parse(post.imageList);
          const imageUrl = imageArr[0];
          return (
            <PlayListItem
              key={post.id}
              id={post.id.toString()}
              image={imageUrl} // 수정: imageArr를 사용하도록 변경
              time={formatTime(post.createdAt)}
              initialLikes={post.decibels}
              comment={post.content}
            />
          );
        })
      )}
    </>
  );
};

export default MynodeComponent;
