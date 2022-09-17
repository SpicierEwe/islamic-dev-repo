import "../styles/globals.css";
import { DataContextProvider } from "../store/data_context";

function MyApp({ Component, pageProps }) {
  return (
    <DataContextProvider>
      <h1>sdsdsdsdd</h1>
      <Component {...pageProps} />
    </DataContextProvider>
  );
}

export default MyApp;
