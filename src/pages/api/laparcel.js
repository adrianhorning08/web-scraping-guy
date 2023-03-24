// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default async function handler(req, res) {
  try {
    const { parcelId } = req.body;
    const response = await axios({
      method: "post",
      url: "https://h0dthtuofb.execute-api.us-west-2.amazonaws.com/default/get-la-parcel",
      data: {
        parcelId,
      },
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.log("error at /api/laparcel.js: ", error.message);
    res.status(500).json({ error: error.message });
  }
}
