import "../../db/db.json";

import { useState } from "react";

export function MainSection(prams) {
  const { data, setData } = useState();

  var db = fetch("/api/db")
    .then((res) => res.json)
    .then((data) => data.name);

  setData(db);
  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
}
