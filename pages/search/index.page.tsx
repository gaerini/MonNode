import { useState, useEffect, ChangeEvent, MouseEvent } from "react";
import * as S from "./style";
import BottomNav from "components/common/BottomNav";
import BlackBackground from "components/common/BlackBackground";
import Profile from "./component/Profile";
import { useSession } from "next-auth/react";
import API from "../api/base-api";

const Search = () => {
  const { data: session, status } = useSession();
  const [emailInput, setEmailInput] = useState("");
  const [searchResult, setSearchResult] = useState("");
  // useEffect(() => {}, [setEmailInput]);

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmailInput(e.target.value);
  };

  const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(emailInput);
    API.get("/userRetrieve", {
      params: { email: emailInput },
    }).then((response) => {
      setSearchResult(response.data.user);
    });
  };
  return (
    <>
      <BlackBackground>
        <S.Input
          name="email"
          type="text"
          placeholder="이메일로 친구를 검색해보세요"
          onChange={inputChangeHandler}
        ></S.Input>
        <S.Button onClick={onClickHandler}>검색</S.Button>
        {searchResult !== "" ? <Profile email={emailInput} /> : <></>}
        <BottomNav />
      </BlackBackground>
    </>
  );
};

export default Search;
