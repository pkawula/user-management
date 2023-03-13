import { useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const ModalWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 1000;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ModalContent = styled.div`
	border-radius: 8px;
	background-color: ${(props) => props.theme.colors.light};
	max-width: max(50%, 300px);
	width: 100%;
`;

interface ModalProps {
	children: React.ReactNode;
	closeModal: () => void;
	testId?: string;
}

export default function Modal({ children, closeModal, testId }: ModalProps) {
	const modalContentRef = useRef<HTMLDivElement>(null);

	const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (
			e.target instanceof HTMLElement &&
			modalContentRef.current &&
			!modalContentRef.current.contains(e.target)
		) {
			closeModal();
		}
	};

	const renderModal = () => (
		<ModalWrapper data-testid={testId} onClick={handleOutsideClick}>
			<ModalContent ref={modalContentRef}>{children}</ModalContent>
		</ModalWrapper>
	);

	return createPortal(renderModal(), document.body);
}
