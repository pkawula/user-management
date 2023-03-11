import { render } from "@/utils/test";
import { ExampleComponent } from "../example";

describe("Example component", () => {
	it("renders properly", () => {
		const { container, queryByText } = render(<ExampleComponent />);

		expect(container).toBeInTheDocument();
		expect(queryByText("Hello world!")).toBeInTheDocument();
	});
});
