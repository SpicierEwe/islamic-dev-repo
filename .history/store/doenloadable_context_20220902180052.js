import { createContext, useState } from "react";

const DownloadableContext = createContext({
  data: {},
  globaliseDataFunction: (data) => {},
});

export function DownloadableDataProvider() {
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
    <DownloadableContext.Provider
      value={context}
    ></DownloadableContext.Provider>
  );
}

export default DownloadableContext;
