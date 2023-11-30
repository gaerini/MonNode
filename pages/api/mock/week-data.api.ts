// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const exampleWeekData = [
  {
    date: 11,
    image:
      "https://images.unsplash.com/photo-1700235162857-1ee1a18c71b9?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    date: 12,
  },

  {
    date: 13,
    image:
      "https://images.unsplash.com/photo-1700235162857-1ee1a18c71b9?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    date: 14,
  },

  {
    date: 15,
    image:
      "https://images.unsplash.com/photo-1700235162857-1ee1a18c71b9?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    date: 16,
    image:
      "https://images.unsplash.com/photo-1700235162857-1ee1a18c71b9?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    date: 17,
    image:
      "https://images.unsplash.com/photo-1700235162857-1ee1a18c71b9?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    date: 18,
    image:
      "https://images.unsplash.com/photo-1700235162857-1ee1a18c71b9?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  {
    date: 19,
  },

  {
    date: 20,
  },

  {
    date: 21,
  },

  {
    date: 22,
  },
];
type Data = {
  name: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ status: 200, exampleWeekData });
}
