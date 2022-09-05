import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), "/db", "/db.json");

  const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  // generate paths
  //  this will generate the static paths for all the db content which will be pre-rendered this will generate paths dynamically when the is called by
  //                   /api/genrate_static_paths

  const paths = [];

  await data.forEach((e) => {
    // console.log(Object.keys(e));

    e[Object.keys(e)].forEach((e2) => {
      const category = Object.keys(e);
      const sub_item = Object.keys(e2);

      // console.log(`${category} ${sub_item}`);

      paths.push({ params: { id: [category[0], sub_item[0]] } });
    });
  });

  res.status(200).json({ paths });
}
