import { promises as fs } from "fs";
import path from "path";

export default async function handler(req, res) {
  const { query } = req.query;

  const filePath = path.join(process.cwd(), "/db", "/db.json");

  const data = await fs.readFile(filePath, "utf-8");

  const query1 = query.toString().toLowerCase().split(",")[0];
  const query2 = query.toString().toLowerCase().split(",")[1];

  const x = data.array.forEach((element) => {
    element;
  });

  res.end(`Query : ${x}`);
}
