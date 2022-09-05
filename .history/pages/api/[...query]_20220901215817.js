import { promises as fs } from "fs";
import path from "path";

export default async function handler(req, res) {
  const { query } = req.query;

  const filePath = path.join(process.cwd(), "/db", "/db.json");

  const data = await fs.readFile(filePath, "utf-8");

  const query1 = query.toString().split(",");

  const x = res.end(`Query : ${query1}`);
}
