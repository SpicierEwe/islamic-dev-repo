import "../../db/db.json";

import { useState, useContext } from "react";
import DataContext from "../../store/data_context";

export function MainSection(prams) {
  const dataCtx = useContext(DataContext);

  const [data, setData] = useState([]);

  // fetch("/api/db")
  //   .then((res) => res.json())
  //   .then((responseData) => setData(responseData))
  //   .catch((err) => {
  //     console.log(err);
  //   });

  return (
    <div>
      <h1>{dataCtx.data.toString()}</h1>
    </div>
  );
}
