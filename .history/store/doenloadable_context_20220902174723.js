import { createContext } from "react";

const downloadableContext = createContext({
  data: {},
  globaliseData: (data) => {},
});
