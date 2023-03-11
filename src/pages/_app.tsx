import type { AppProps } from "next/app";
import "@/styles/globals.css";
import { wrapper } from "@/utils/store";
import "@/mocks";

function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

export default wrapper.withRedux(App);
