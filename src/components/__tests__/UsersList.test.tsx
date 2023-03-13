import { exampleUsers } from "@/mocks/data";
import { render } from "@/utils/tests";
import { act, fireEvent, waitForElementToBeRemoved } from "@testing-library/react";
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

	it("opens delete modal when trying to remove user", async () => {
		const { queryByText, queryByTestId, queryAllByTestId } = render(<UsersList />, {
			container: document.body
		});

		const loading = queryByTestId("users-list-loading");
		expect(loading).toBeInTheDocument();

		await waitForElementToBeRemoved(() => queryByTestId("users-list-loading"));

		const deleteButton = queryAllByTestId("delete-user-button")[0];

		expect(deleteButton).toBeInTheDocument();

		act(() => {
			fireEvent.click(deleteButton);
		});

		expect(queryByTestId("delete-user-modal")).toBeInTheDocument();
		expect(queryByText("Delete User")).toBeInTheDocument();
	});
});
