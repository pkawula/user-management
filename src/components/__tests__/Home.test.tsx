import { exampleUsers } from "@/mocks/data";
import { render, delay } from "@/utils/tests";
import { waitForElementToBeRemoved } from "@testing-library/react";
import { Home } from "../views/Home";

describe("Home component", () => {
	it("renders properly fetched users", async () => {
		const { queryByText } = render(<Home />);

		const loading = queryByText("Loading...");
		expect(loading).toBeInTheDocument();

		await waitForElementToBeRemoved(() => queryByText("Loading..."));

		exampleUsers.forEach((user) => {
			expect(queryByText(user.name)).toBeInTheDocument();
			expect(queryByText(user.city)).toBeInTheDocument();
			expect(queryByText(user.email)).toBeInTheDocument();
			expect(queryByText(user.username)).toBeInTheDocument();
		});
	});
});
