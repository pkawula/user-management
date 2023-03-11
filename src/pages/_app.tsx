import type { AppProps } from "next/app";
import { wrapper } from "@/utils/store";
import { Provider } from "react-redux";
import "@/mocks";

export default function App({ Component, ...rest }: AppProps) {
	const { store, props } = wrapper.useWrappedStore(rest);

	return (
		<Provider store={store}>
			<Component {...props} />
		</Provider>
	);
}
