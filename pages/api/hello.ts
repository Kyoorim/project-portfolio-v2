import { NextApiRequest, NextApiResponse } from "next";

const Api = (_: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: "Hello" });
};

export default Api;
