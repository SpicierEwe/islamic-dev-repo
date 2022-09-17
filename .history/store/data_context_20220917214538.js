import { createContext, useState } from "react";

const DataContext = createContext({
  db: [],
  downlodable_data: [],
  showNotification: false,
  globaliseDataFunction: (data) => {},
  globaliseDownloadableData: (data) => {},
  displayGlobalNotification: () => {},
});

export function DataContextProvider(props) {
  const [db, setDb] = useState([]);
  const [downlodableData, setdownlodableData] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

  // globalize db
  function globaliseData(data) {
    /// will update the data
    setDb(data);
  }

  // globalize db
  function globaliseDownloadableData(data) {
    /// will update the data
    setdownlodableData(data);
  }

  // shows and hides the notification
  async function displayGlobalNotification() {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  }

  const context = {
    db: db,
    downlodable_data: downlodableData,
    showNotification: showNotification,
    globaliseDataFunction: globaliseData,
    globaliseDownloadableData: globaliseDownloadableData,
    displayGlobalNotification: displayGlobalNotification,
  };

  return (
    <DataContext.Provider value={context}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContext;
