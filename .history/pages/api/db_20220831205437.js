// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import { promises as fs } from "fs";
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), "/db", "/db.json");
  //Read the json data file data.json
  const fileContents = fs.readFileSync(jsonDirectory);
  //Return the content of the data file in json format

  console.log(fileContents);

  res.status(200).json({ fileContents });
}
