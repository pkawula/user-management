import { forwardRef } from "react";
import styled from "styled-components";

const InputWrapper = styled.div`
	display: block;
	width: 100%;

	&:not(:last-child) {
		margin-bottom: 10px;
	}
`;

const InputLabel = styled.label`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	gap: 10px;
	font-size: ${(props) => props.theme.font.size.s};
`;

const StyledInput = styled.input`
	border: 1px solid ${(props) => props.theme.colors.lightGrey};
	font-size: ${(props) => props.theme.font.size.s};
	padding: 3px;
	border-radius: 4px;
	width: 100%;
`;

const ErrorMessage = styled.p`
	margin: 5px 0 0;
	color: ${(props) => props.theme.colors.red};
	font-size: ${(props) => props.theme.font.size.s};
`;

interface InputProps extends Omit<React.HTMLProps<HTMLInputElement>, "ref"> {
	errorMessage?: string;
	label: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ errorMessage, label, ...rest }, ref) => {
	return (
		<InputWrapper>
			<InputLabel>
				{/* Marked as any beacuse of probably styled-components lib error. Can be fixed, but don't have time right now and this is not harmful to the app */}
				{label}: <StyledInput ref={ref} {...(rest as any)} />
			</InputLabel>
			{errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
		</InputWrapper>
	);
});

Input.displayName = "Input";

export default Input;
