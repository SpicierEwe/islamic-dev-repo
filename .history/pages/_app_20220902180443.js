import "../styles/globals.css";
import { DataContextProvider } from "../store/data_context";
import { DownloadableDataProvider } from "../store/doenloadable_context";

function MyApp({ Component, pageProps }) {
  return (
    <DataContextProvider>
      <DownloadableDataProvider>
        <Component {...pageProps} />
      </DownloadableDataProvider>
    </DataContextProvider>
  );
}

export default MyApp;
