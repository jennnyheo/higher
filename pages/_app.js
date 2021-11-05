import "../styles/globals.css";
import MainLayout from "../components/MainLayout";
import { StoreProvider } from "../Store";
function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </StoreProvider>
  );
}

export default MyApp;
