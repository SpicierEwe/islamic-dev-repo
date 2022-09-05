// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {promises as fs} from "fs";
import path from "path";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const db = readData();
    res.status(200).json({ data: db });
  } else {
    res.status(403).json({ status: "forbidden" });
  }
}

function readData() {
  const filePath = path.join(process.cwd() + "/db" + /);

  const fileData = fs.readFileSync(filePath);

  const data = JSON.parse(fileData);

  return data;
}
