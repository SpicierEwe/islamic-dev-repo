import { createContext, useState } from "react";

const DataContext = createContext({
  data: [],
});

export function DataContextProvider(props) {
  return <DataContext.Provider></DataContext.Provider>;
}

export default DataContext;
