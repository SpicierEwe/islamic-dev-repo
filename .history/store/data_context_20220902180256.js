import { createContext, useState } from "react";
import DownloadableContext from "./doenloadable_context";

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

  const context = {
    data: data,
    globaliseDataFunction: globaliseData,
  };

  return (
    <DownloadableContext.Provider value={context}>
      {props.children}
    </DownloadableContext.Provider>
  );
}

export default DataContext;
