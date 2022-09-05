import { promises as fs } from "fs";
import path from "path";

export default async function handler(req, res) {
  const { query } = req.query;

  const filePath = path.join(process.cwd, "/db", "/db.json");

  res.end(`Quesry : ${query}`);
}
