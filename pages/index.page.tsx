import type { NextPage } from 'next'
import Head from 'next/head'
// html head tag랑 동일
import * as S from "./style"
import axios from 'axios'
import { useEffect, useState } from 'react'
import HeaderNav from 'components/common/HeaderNav'
import BottomNav from 'components/common/BottomNav'

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
        <HeaderNav/>
        <BottomNav />
      </main>
    </S.Container>
  )
}

export default Home
