import { createContext } from "react";

const downloadableContext = createContext({
  data: {},
  globaliseData: (data) => {},
});

function downloadableDataProvider() {






    const context :{
        
    }


  return <downloadableContext.Provider value={context}></downloadableContext.Provider>;
}
