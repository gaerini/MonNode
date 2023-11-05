// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const examplePosts = [
  {
    id: 0,
    title: "안녕",
    content: "하이하이",
  },
  {
    id: 1,
    title: "안녕1",
    content: "하이하이",
  },
  {
    id: 2,
    title: "안녕2",
    content: "하이하이",
  },
  {
    id: 3,
    title: "안녕3",
    content: "하이하이",
  },
  {
    id: 4,
    title: "안녕4",
    content: "하이하이",
  },
  {
    id: 5,
    title: "안녕5",
    content: "하이하이",
  },
];
type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ status: 200, examplePosts });
}