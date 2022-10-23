import '../styles/globals.css'
import { VPEContextProvider } from "../context/VPEContext";
function MyApp({ Component, pageProps }) {
  return (
    <VPEContextProvider>
      <Component {...pageProps} />
    </VPEContextProvider> 
  );
}

export default MyApp
