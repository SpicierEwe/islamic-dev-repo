import { createContext, useState } from "react";

const DataContext = createContext({
  data: [],
  globaliseDataFunction: (data) => {},
});

export function DataContextProvider(props) {
  const [data, setData] = useState([]);

  function globaliseData(data) {
    /// will update the data
    setData(data);
  }

  async function fetchAllData() {
    const res = await fetch("http://localhost:3000/api/resources");
    globaliseData(res);
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
