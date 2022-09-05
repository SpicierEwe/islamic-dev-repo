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
          res.end(`Query : ${filteredData}`);
          return;
        }
      });
    }
  });

  // generate paths
  await generatePaths(query1, res, data);

  res.status(400).end("Not Found");
}

//  this will generate the static paths for all the db content which will be pre-rendered this will generate paths dynamically when the is called by
//                   /api/genrate_static_paths

async function generatePaths(query, res, data) {
  if (query == "generate_static_paths") {
    data.forEach((e) => {
      console.log(e);
      res.end(`${e}`);
      return;
    });

    res.end("genrate paths");
  }
}
