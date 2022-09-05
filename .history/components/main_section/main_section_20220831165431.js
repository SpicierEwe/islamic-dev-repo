import "../../db/db.json";

import { useState } from "react";

export function MainSection(prams) {
  const [data, setData] = useState([]);

  fetch("/api/db")
    .then((res) => res.json())
    .then((data) => setData(data.data)));

  return (
    <div>
      <h1>{data.toString()}</h1>
    </div>
  );
}
