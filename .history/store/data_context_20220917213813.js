import { createContext, useState } from "react";

const DataContext = createContext({
  db: [],
  downlodable_data: [],
  globaliseDataFunction: (data) => {},
  globaliseDownloadableData: (data) => {},
  displayGlobalNotification: (notification_text) => {},
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
  async function displayGlobalNotification(notification_text) {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  }

  const context = {
    db: db,
    downlodable_data: downlodableData,
    globaliseDataFunction: globaliseData,
    globaliseDownloadableData: globaliseDownloadableData,
  };

  return (
    <DataContext.Provider value={context}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataContext;
