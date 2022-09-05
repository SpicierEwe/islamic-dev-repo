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
        {dataCtx.data.map((data, index) => {
          return <div key={index}>{data["title"]}</div>;
        })}
      </div>
      {/* <h1>hiii</h1> */}
    </div>
  );
}
