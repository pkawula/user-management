import styled, { css } from "styled-components";

interface ButtonProps {
	mode?: "fill" | "outline";
	variant: "primary" | "default" | "danger" | "grey" | "orange";
}

export const Button = styled.button<ButtonProps>`
	border: none;
	border-radius: 4px;
	padding: 4px 8px;
	text-align: center;
	cursor: pointer;
	font-size: ${(props) => props.theme.font.size.s};
	color: ${(props) => props.theme.colors.light};
	transition: opacity 0.2s ease-out, background-color 0.2s ease-out, color 0.2s ease-out;

	${({ mode = "fill", variant }) => {
		switch (variant) {
			case "primary":
				return css`
					background-color: ${(props) => props.theme.colors.green};

					&:hover,
					&:focus {
						opacity: 0.8;
					}

					${mode === "outline" &&
					css`
						color: ${(props) => props.theme.colors.green};
						background-color: transparent;
						border: 2px solid currentColor;

						&:hover,
						&:focus {
							background-color: ${(props) =>
								props.theme.colors.blue};
						}
					`}
				`;
			case "default":
				return css`
					background-color: ${(props) => props.theme.colors.blue};

					&:hover,
					&:focus {
						opacity: 0.8;
					}

					${mode === "outline" &&
					css`
						color: ${(props) => props.theme.colors.blue};
						background-color: transparent;
						border: 2px solid currentColor;

						&:hover,
						&:focus {
							background-color: ${(props) =>
								props.theme.colors.blue};
							color: ${(props) => props.theme.colors.light};
						}
					`}
				`;
			case "danger":
				return css`
					background-color: ${(props) => props.theme.colors.red};

					&:hover,
					&:focus {
						opacity: 0.8;
					}

					${mode === "outline" &&
					css`
						color: ${(props) => props.theme.colors.red};
						background-color: transparent;
						border: 2px solid currentColor;

						&:hover,
						&:focus {
							background-color: ${(props) =>
								props.theme.colors.red};
							color: ${(props) => props.theme.colors.light};
						}
					`}
				`;
			case "grey":
				return css`
					background-color: ${(props) => props.theme.colors.lightGrey};

					${mode === "outline" &&
					css`
						color: ${(props) => props.theme.colors.lightGrey};
						background-color: transparent;
						border: 2px solid currentColor;

						&:hover,
						&:focus {
							background-color: ${(props) =>
								props.theme.colors.lightGrey};
							color: ${(props) => props.theme.colors.light};
						}
					`}
				`;
			case "orange":
				return css`
					background-color: ${(props) => props.theme.colors.orange};

					&:hover,
					&:focus {
						opacity: 0.8;
					}

					${mode === "outline" &&
					css`
						color: ${(props) => props.theme.colors.orange};
						background-color: transparent;
						border: 2px solid currentColor;

						&:hover,
						&:focus {
							background-color: ${(props) =>
								props.theme.colors.orange};
							color: ${(props) => props.theme.colors.light};
						}
					`}
				`;
		}
	}}
`;
