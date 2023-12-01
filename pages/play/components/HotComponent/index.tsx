import { useState, useEffect } from "react";
import * as S from "./style";
import PlayListItem from "components/common/PlayListItem";

import API from "../../../api/base-api";

interface Post {
  id: number;
  imageList: string;
  decibels: number;
  content: string;
  createdAt: Date;
}

const HotComponent = () => {
  const [postList, setPostList] = useState<Post[]>([]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  };

  useEffect(() => {
    API.get("/allposts").then(function (response) {
      console.log(response);
      setPostList(response.data.allPosts);
    });
  }, []);

  const sortedPosts = [...postList].sort((a, b) => b.decibels - a.decibels);

  return (
    <>
      {sortedPosts.map((post) => {
        let imageArray;
        try {
          imageArray = JSON.parse(post.imageList);
          console.log(imageArray);
        } catch (error) {
          console.error("Error parsing image array", error);
        }
        <PlayListItem
          key={post.id}
          id={post.id.toString()}
          image={imageArray}
          time={formatTime(post.createdAt)}
          initialLikes={post.decibels}
          comment={post.content}
        />;
      })}
    </>
  );
};

export default HotComponent;
