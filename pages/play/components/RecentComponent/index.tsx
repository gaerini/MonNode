import { useState, useEffect } from "react";
import * as S from "./style";
import PlayListItem from "components/common/PlayListItem";
import { postList } from "../../../../pages/api/mock/playlistitem.api";
import API from "../../../api/base-api";

interface Post {
  id: number;
  imageList: string;
  decibels: number;
  content: string;
  createdAt: string;
}

const RecentComponent = () => {
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

  const sortedPosts = [...postList].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <>
      {sortedPosts.map((post) => {
        let imageArray;
        let dateOfCreatedAt;
        try {
          console.log(post);
          imageArray = JSON.parse(post.imageList);
          console.log(imageArray);
        } catch (error) {
          console.error("Error parsing image array", error);
          return null;
        }

        try {
          dateOfCreatedAt = new Date(post.createdAt);
        } catch (error) {
          console.error("Error parsing image array", error);
          return null;
        }
        return (
          <PlayListItem
            key={post.id}
            id={post.id.toString()}
            image={imageArray[0]}
            time={formatTime(dateOfCreatedAt)}
            initialLikes={post.decibels}
            comment={post.content}
          />
        );
      })}
    </>
  );
};

export default RecentComponent;
