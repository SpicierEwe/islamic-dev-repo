import "../../db/db.json";

import { useState } from "react";

export function MainSection(prams) {
  const { data, setData } = useState();

  setData(
    fetch("/api/db")
      .then((res) => res.json)
      .then((data) => (data = data.name))
  );

  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
}
