import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import { wrapper } from "@/utils/store";
import Globalstyles from "@/components/theme/globalstyles";
import { theme } from "@/components/theme";
import "@/mocks";

export default function App({ Component, ...rest }: AppProps) {
	const { store, props } = wrapper.useWrappedStore(rest);

	return (
		<ThemeProvider theme={theme}>
			<Globalstyles />
			<Provider store={store}>
				<Component {...props} />
			</Provider>
		</ThemeProvider>
	);
}
