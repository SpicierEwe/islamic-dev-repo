import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  const { query } = req.query;

  const filePath = path.join(process.cwd(), "/db", "/db.json");

  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const query1 = query.toString().toLowerCase().split(",")[0];
  const query2 = query.toString().toLowerCase().split(",")[1];

  var x = "";
  await data.forEach((element) => {
    if (Object.keys(element).toString().toLowerCase() === query1) {
      // console.log(element);
      element[query1].forEach((e) => {
        // console.log(e);
        if (e === query2) {
          x = e;
        }
      });
    }
  });

  res.end(`Query : ${x}`);
}
