import "../../db/db.json";

import { useState } from "react";

export function MainSection(prams) {
  const [data, setData] = useState([]);

  fetch("http://localhost:3000/api/db")
    .then((res) => res.json())
    .then((responseData) => setData(responseData))
    .catch((err) => {
      console.log(err);
      fetch("http://192.168.1.38:3000/api/db")
        .then((res) => res.json())
        .then((responseData) => setData(responseData));
    });

  return (
    <div>
      <h1>{data.toString()}</h1>
    </div>
  );
}
