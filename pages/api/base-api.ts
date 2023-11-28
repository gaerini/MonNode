// import { createClient } from "@supabase/supabase-js";
import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const API = axios.create({
  // baseURL: "/api",
  baseURL: BASE_URL,
  // headers: {
  //   "User-Agent":
  //     "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  // },
});

export default API;

export interface Clicks {
  [key: string]: number;
}

// export const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );
