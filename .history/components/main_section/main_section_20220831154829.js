import "../../db/db.json";

import { useState } from "react";

export function MainSection(prams) {

    {data , setData} = useState();

  var dbData = "";
  fetch("/api/db")
    .then((res) => res.json)
    .then((data) => (dbData = data.name));

  return (
    <div>
      <h1>{dbData}</h1>
    </div>
  );
}
