import "../styles/globals.css";
import { DataContextProvider } from "../store/data_context";
import NotificationComponent from "../components/notification/notification";

function MyApp({ Component, pageProps }) {
  return (
    <DataContextProvider>
      <Component {...pageProps} />
      <NotificationComponent></NotificationComponent>
    </DataContextProvider>
  );
}

export default MyApp;
