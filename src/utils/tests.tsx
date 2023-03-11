import { render, type RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "./store";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<Provider store={createStore()}>{children}</Provider>
);

const customRender = (
	ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
	options: RenderOptions = {}
) => render(ui, { wrapper: Providers, ...options });

const delay = (delay = 500) =>
	new Promise<void>((resolve) => {
		setTimeout(resolve, delay);
	});

export { customRender as render, delay };
