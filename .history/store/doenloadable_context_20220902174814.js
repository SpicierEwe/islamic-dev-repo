import { createContext } from "react";

const downloadableContext = createContext({
  data: {},
  globaliseData: (data) => {},
});

function downloadableDataProvider() {
  return <downloadableContext.Provider></downloadableContext.Provider>;
}
