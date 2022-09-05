import "../../db/db.json";

import { useState, useContext } from "react";
import DataContext from "../../store/data_context";

export function MainSection(prams) {
  const dataCtx = useContext(DataContext);

  const [data, setData] = useState([]);

  return (
    <div>
      <h1>{"hiii".toString()}</h1>
    </div>
  );
}
