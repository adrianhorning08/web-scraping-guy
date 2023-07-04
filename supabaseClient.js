import dotenv from "dotenv";
dotenv.config();
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://udzuvxmziagmfowmeren.supabase.co",
  process.env.SUPABASE_KEY
);
