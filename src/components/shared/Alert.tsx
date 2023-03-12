import styled from "styled-components";

interface AlertProps {
	type: "info" | "danger" | "success";
}

export const Alert = styled.div<AlertProps>`
	padding: 10px;
	border-radius: 8px;
	color: ${(props) => props.theme.colors.light};

	${(props) => {
		switch (props.type) {
			case "danger":
				return `background-color: ${props.theme.colors.red};`;
			case "success":
				return `background-color: ${props.theme.colors.green};`;
			case "info":
			default:
				return `background-color: ${props.theme.colors.blue};`;
		}
	}}
`;
