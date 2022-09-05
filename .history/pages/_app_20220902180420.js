import "../styles/globals.css";
import { DataContextProvider } from "../store/data_context";
import { DownloadableDataProvider } from "../store/doenloadable_context";

function MyApp({ Component, pageProps }) {
  return (
    <DownloadableDataProvider>
      <DataContextProvider>
        <Component {...pageProps} />
      </DataContextProvider>
    </DownloadableDataProvider>
  );
}

export default MyApp;
