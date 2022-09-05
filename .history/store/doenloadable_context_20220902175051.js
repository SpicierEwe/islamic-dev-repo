import { createContext, useState } from "react";

const downloadableContext = createContext({
  data: {},
  globaliseData: (data) => {},
});

function downloadableDataProvider() {
        const [data , setData] = useState({});


        // globalise data
function globaliseDataFunction(data){
    setData(data);
}


    const context ={
        data  :data,
        globaliseDataFunction :glovbaliseDataFunction;

    }


  return <downloadableContext.Provider value={context}></downloadableContext.Provider>;
}
