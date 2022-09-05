import { createContext, useState } from "react";

const DataContext = createContext({
  data: [],
});

export function DataContextProvider(props) {
  const [data, setData] = useState();

  const context = {
    data: data,
  };

  return (
    <DataContext.Provider value={context}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContext;
