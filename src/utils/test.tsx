import { render, type RenderOptions } from "@testing-library/react";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => <>{children}</>;

const customRender = (
	ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>,
	options: RenderOptions = {}
) => render(ui, { wrapper: Providers, ...options });

const delay = (delay = 500) =>
	new Promise<void>((resolve) => {
		setTimeout(resolve, delay);
	});

export { customRender as render, delay };
