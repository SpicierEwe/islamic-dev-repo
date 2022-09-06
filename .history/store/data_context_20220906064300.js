import { createContext, useState } from "react";

const DataContext = createContext({
  db: [],
  downlodable_data: [],
  globaliseDataFunction: (data) => {},
});

export function DataContextProvider(props) {
  const [db, setDb] = useState([]);
  const [db, setDb] = useState([]);

  // globalize db
  function globaliseData(data) {
    /// will update the data
    setDb(data);
  }

  // globalize db
  function globaliseDownloadableData(data) {
    /// will update the data
    setDb(data);
  }

  const context = {
    data: db,
    globaliseDataFunction: globaliseData,
  };

  return (
    <DataContext.Provider value={context}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContext;
