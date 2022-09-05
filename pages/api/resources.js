// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), "/db", "/db.json");
  //Read the json data file data.json
  const fileContents = JSON.parse(fs.readFileSync(jsonDirectory));

  res.status(200).json(fileContents);
}
