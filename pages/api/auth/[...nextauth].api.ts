import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import axios from "axios"; // axios를 사용해 API 요청을 하기 위해 import
import API from "../base-api";

// const scopes = ["identify", "email"].join(" ");
// const API_URL =
// process.env.NEXT_PUBLIC_APP_ENV === "development"
//   ? process.env.NEXT_PUBLIC_API_URL_DEV
//   : process.env.NEXT_PUBLIC_API_URL;

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // authorization: {
      //   params: {
      //     prompt: "consent",
      //     access_type: "offline",
      //     response_type: "code",
      //   },
      // },
    } as { clientId: string; clientSecret: string }),
  ],
  callbacks: {
    async session({
      session,
      token,
      user,
    }: {
      session: any;
      token: any;
      user: any;
    }) {
      // console.log("Session: ", session, "&&", token, "&&", user);
      session.access_token = token.access_token;
      session.refresh_token = token.refresh_token;
      session.id_token = token.id_token;
      session.provider = token.provider;
      session.user = token.user; // 받아온 userdata session으로 넘겨주는 부분
      session.profile = token.profile;
      return session;
    },

    async jwt({ token, user, account }) {
      if (account) {
        console.log("Token: ", token, "&&", user, "&&", account);
        token.access_token = account.access_token;
        token.id_token = account.id_token;
        token.refresh_token = account.refresh_token;
        token.provider = account.provider;
        token.user = user; // user 객체를 token에 저장

        const getOrCreateUser = await API.post("/user", {
          username: user?.name || null,
          email: user?.email || null,
          profile: user?.image || "",
        });
        console.log("응답", getOrCreateUser);
        token.profile = getOrCreateUser.data;
      }
      return token;
    },
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
});
