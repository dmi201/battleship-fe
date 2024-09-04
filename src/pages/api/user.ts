import { NextApiRequest, NextApiResponse } from "next";

const userData = {
  userName: "Mihail Iulian Dinu",
  linkedInAccount: "https://www.linkedin.com/in/mihail-iulian-dinu/",
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(userData);
}
