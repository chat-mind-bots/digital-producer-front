import React, { FC, useEffect, useRef } from "react";
import { Transition } from "react-transition-group";

import Portal from "Components/ModalWindows/Portal";
import Button from "Components/UI-KIT/Atoms/Button";
import { ReactComponent as ModalWindowIcon } from "Icons/ModalWindowIcon.svg";
import { ReactComponent as Close } from "Icons/Close.svg";
import Colors from "Colors";

import * as ST from "./styled";

type ModalProps = {
	children: JSX.Element;
	isOpen: boolean;
	handleClose: () => void;
	title: string;
};

type TransitionStylesProps = {
	entering: any;
	entered: any;
	exiting: any;
	exited: any;
	unmounted?: any;
};

const duration = 300;
const defaultStyle = {
	transition: `opacity ${duration}ms ease-in-out`,
	opacity: 0,
};

const transitionStyles: TransitionStylesProps = {
	entering: { opacity: 1 },
	entered: { opacity: 1 },
	exiting: { opacity: 0 },
	exited: { opacity: 0, visibility: "hidden" },
};

const Modal: FC<ModalProps> = ({ children, isOpen, handleClose, title }) => {
	const nodeRef = useRef(null);
	useEffect(() => {
		const closeOnEscapeKey = (e: KeyboardEvent) =>
			e.key === "Escape" && handleClose();
		document.body.addEventListener("keydown", closeOnEscapeKey);
		return () => {
			document.body.removeEventListener("keydown", closeOnEscapeKey);
		};
	}, [handleClose]);

	return (
		<Portal>
			<Transition
				nodeRef={nodeRef}
				in={isOpen}
				timeout={duration}
			>
				{(state) => (
					<ST.ModalWindow
						ref={nodeRef}
						style={{
							...defaultStyle,
							...transitionStyles[state],
						}}
					>
						<ST.CreateCourse>
							<ST.Header>
								<ModalWindowIcon />
								<ST.WrapperInfoHeader>
									<ST.Title>
										{title}
										<Close onClick={handleClose} />
									</ST.Title>
									<ST.Description>
										Create your company profile for free in less than 5 minutes.
									</ST.Description>
								</ST.WrapperInfoHeader>
							</ST.Header>
							<>{children}</>
							<ST.Footer>
								<Button
									title={"Cancel"}
									padding={"10px 130px"}
									fontSize={"16px"}
									lineHeight={"24px"}
									fontWeight={"600"}
									background={Colors.TRANSPARENT}
									color={Colors.BLACK1}
									backgroundAnimation={Colors.BLACK1}
									colorHover={Colors.WHITE}
									border={`2px solid ${Colors.BLACK1}`}
									width={"max-content"}
									onClick={handleClose}
								/>
								<Button
									title={"Confirm"}
									padding={"10px 125px"}
									fontSize={"16px"}
									lineHeight={"24px"}
									fontWeight={"600"}
									background={Colors.BLUE}
									color={Colors.WHITE}
									backgroundAnimation={Colors.BLUE_DARK}
									colorHover={Colors.WHITE}
									width={"max-content"}
								/>
							</ST.Footer>
						</ST.CreateCourse>
					</ST.ModalWindow>
				)}
			</Transition>
		</Portal>
	);
};
export default Modal;
