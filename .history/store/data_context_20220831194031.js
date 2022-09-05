import { createContext, useState } from "react";

const DataContext = createContext({
  data: [],
});

export function DataContextProvider(props) {
  return (
    <DataContext.Provider value={context}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContext;
