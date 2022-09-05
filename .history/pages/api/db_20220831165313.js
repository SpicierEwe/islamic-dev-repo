// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ name: "John Doe" });
  } else {
    res.status(403).json({ status: "forbidden" });
  }
}

function readData() {
  const path = path.join(process.cwd + db + db.js);

  const data = fs.readFileSync(path);

  const 
}
