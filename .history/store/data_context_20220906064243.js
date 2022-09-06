import { createContext, useState } from "react";

const DataContext = createContext({
  db: [],
  downlodable_data: [],
  globaliseDataFunction: (data) => {},
});

export function DataContextProvider(props) {
  const [data, setData] = useState([]);

  // globalize db
  function globaliseData(data) {
    /// will update the data
    setData(data);
  }

  // globalize db
  function globaliseDownloadableData(data) {
    /// will update the data
    setData(data);
  }

  const context = {
    data: data,
    globaliseDataFunction: globaliseData,
  };

  return (
    <DataContext.Provider value={context}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContext;
