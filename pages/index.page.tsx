import type { NextPage } from 'next'
import Head from 'next/head'
// html head tag랑 동일
import * as S from "./style"
import axios from 'axios'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [postList, setPostList] = useState([]);

  const getPosts = async () => {
    const response = await axios.get("api/mock/posts");
    console.log(response.data);
    setPostList(response.data.examplePosts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <S.Container>
      <main>
        <h1>hello</h1>
      </main>
    </S.Container>
  )
}

export default Home
