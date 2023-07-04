import axios from "axios";
import { supabase } from "supabaseClient";

export default async function handler(req, res) {
  try {
    const body = req.body;

    const { data, error } = await supabase
      .from("watched_searches")
      .select("*")
      .eq("email", body?.email);

    if (error) {
      throw new Error(error);
    }

    res.status(200).json(data);
  } catch (error) {
    console.log("error at getMarketplaceSearches", error.message);
    res.status(500).json({ error: error.message });
  }
}
