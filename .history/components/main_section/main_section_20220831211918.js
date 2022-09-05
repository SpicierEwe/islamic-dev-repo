import "../../db/db.json";

import { useState, useContext } from "react";
import DataContext from "../../store/data_context";

export function MainSection(prams) {
  const dataCtx = useContext(DataContext);

  console.log(dataCtx.data);

  const [data, setData] = useState([]);

  return (
    <div>
      <div>
        {dataCtx.data.forEach((index, data) => (
          <div>{data}</div>;
        ))}
      </div>
      {/* <h1>hiii</h1> */}
    </div>
  );
}
