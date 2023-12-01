import React from "react";
import * as S from "./style";
import { Link, Button } from "@nextui-org/react";
import googleLogo from "public/assets/logo/google-sm.png";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import API from "../api/base-api";

function Auth() {
  const { data: session, status } = useSession();
  const router = useRouter();
  if (session) {
    API.get("/friendRetrieve", {
      params: { email: (session.profile as { email: string }).email },
    })
      .then(function (response) {
        console.log(response.data.friends);
        if (response.status === 200) {
          if (response.data.friends.length === 0) {
            router.push("/firstpage");
          } else {
            router.push("/play");
          }
        }
      })
      .catch(function (err) {
        console.log(err);
      });
    return router.push("/");
  }
  return (
    <S.AuthContainer>
      <S.Title>회원가입</S.Title>
      <Button
        color={"primary"}
        size={"lg"}
        variant={"faded"}
        className={"text-lg font-bold"}
        startContent={<img src={googleLogo.src} />}
        onClick={() => signIn("google", { callbackUrl: "/signup" })}
        // onClick={() => signOut()}
      >
        구글 계정으로 시작하기
      </Button>
      <p>
        By signing up to create an account I accept Company&#039;s{" "}
        <Link href="#">Terms of Use and Privacy Policy </Link>
      </p>
    </S.AuthContainer>
  );
}

export default Auth;
