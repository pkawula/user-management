import styled from "styled-components";

export const Table = styled.table`
	width: 100%;
	min-width: 500px;
	border-collapse: collapse;
	border: 1px solid ${({ theme: { colors } }) => colors.lightGrey};
`;

export const TableTH = styled.th`
	background-color: ${({ theme: { colors } }) => colors.lightenGrey};
	color: ${({ theme: { colors } }) => colors.darkGrey};
	padding: 10px;
	text-align: left;
`;

export const TableRow = styled.tr`
	&:not(:last-child) {
		border-bottom: 1px solid ${({ theme: { colors } }) => colors.lightGrey};
	}
`;

export const TableTD = styled.td`
	padding: 15px;
`;
