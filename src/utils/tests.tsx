import { theme } from "@/components/theme";
import { render, type RenderOptions } from "@testing-library/react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { createStore } from "./store";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => (
	<ThemeProvider theme={theme}>
		<Provider store={createStore()}>{children}</Provider>
	</ThemeProvider>
);

const customRender = (
	ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
	options: RenderOptions = {}
) => render(ui, { wrapper: Providers, ...options });

export { customRender as render };
