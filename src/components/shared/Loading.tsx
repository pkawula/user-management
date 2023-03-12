import styled from "styled-components";

export const Loading = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 50px 20px;

	&::after {
		content: "";
		display: block;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		border: 2px solid transparent;
		border-top-color: ${(props) => props.theme.colors.lightGrey};
		animation: spin 1s linear infinite;

		@keyframes spin {
			from {
				transform: rotate(0deg);
			}
			to {
				transform: rotate(360deg);
			}
		}
	}
`;
