import "../styles/globals.css";
import { DataContextProvider } from "../store/data_context";

function MyApp({ Component, pageProps }) {
  return (
    <DataContextProvider>
      <Component {...pageProps} />
      <h1>sdsdsdsdd</h1>
    </DataContextProvider>
  );
}

export default MyApp;
