import { NextApiRequest, NextApiResponse } from "next";

export default async(req: NextApiRequest, res: NextApiResponse) => {
  const headers = {
    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
    "x-rapidapi-key": "ff3a1cd0f7msh2d6a18d1ec5f9f9p1d7d43jsn3f84ed2849b7",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  };

  const response = await fetch("https://coinranking1.p.rapidapi.com/coins", {
    headers,
  });


  const {data} = await response.json()

  return res.send(data.coins)
}
