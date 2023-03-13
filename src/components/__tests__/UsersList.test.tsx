import { exampleUsers } from "@/mocks/data";
import { render } from "@/utils/tests";
import { waitForElementToBeRemoved } from "@testing-library/react";
import UsersList from "../views/Home/UsersList";

describe("UsersList component", () => {
	it("renders properly fetched users", async () => {
		const { queryByText, queryByTestId } = render(<UsersList />);

		const loading = queryByTestId("users-list-loading");
		expect(loading).toBeInTheDocument();

		await waitForElementToBeRemoved(() => queryByTestId("users-list-loading"));

		exampleUsers.forEach((user) => {
			expect(queryByText(user.name)).toBeInTheDocument();
			expect(queryByText(user.city)).toBeInTheDocument();
			expect(queryByText(user.email)).toBeInTheDocument();
			expect(queryByText(user.username)).toBeInTheDocument();
		});
	});
});
