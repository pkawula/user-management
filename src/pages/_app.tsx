import type { AppProps } from "next/app";
import "@/mocks";
import "@/styles/globals.css";
import { wrapper } from "@/utils/store";

function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
