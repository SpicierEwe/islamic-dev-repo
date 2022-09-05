import { createContext, useState } from "react";
import DataContext from "./data_context";

t const downloadableContext = createContext({
  data: {},
  globaliseData: (data) => {},
});

function downloadableDataProvider() {
  const [data, setData] = useState({}); 

  // globalise data
  function globaliseData(data) {
    setData(data);
  }

  const context = {
    data: data,
    globaliseDataFunction: globaliseData,
  };

  return (
    <downloadableContext.Provider
      value={context}
    ></downloadableContext.Provider>
  );
}

export default DataContext;