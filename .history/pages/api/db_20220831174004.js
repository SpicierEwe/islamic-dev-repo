// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { promises as fs } from "fs";
import path from "path";

export default async function handler(req, res) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), "db");
  //Read the json data file data.json
  const fileContents = fs.readFileSync(jsonDirectory + "/db.json", "utf8");
  //Return the content of the data file in json format
  res.status(200).json({ fileContents });
}
