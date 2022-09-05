import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  const { query } = req.query;

  const filePath = path.join(process.cwd(), "/db", "/db.json");

  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  const query1 = query.toString().toLowerCase().split(",")[0];
  const query2 = query.toString().toLowerCase().split(",")[1];

  var filteredData = "";
  await data.forEach((element) => {
    if (Object.keys(element).toString().toLowerCase() === query1) {
      // console.log(element);
      element[query1].forEach((e) => {
        // console.log(e);
        if (Object.keys(e).toString().toLowerCase() === query2) {
          filteredData = e;
          res.status(200).json([filteredData]);
        }
      });
    } else {
      return;
    }
  });

  // default response if nothing matched
  // res.status(400).json({ respose: "Not Found" });
}
