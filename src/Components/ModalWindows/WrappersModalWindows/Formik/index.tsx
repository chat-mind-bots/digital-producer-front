import React, { FC, useEffect, useRef } from "react";
import { Transition } from "react-transition-group";

import Portal from "Components/ModalWindows/Portal";
import { ReactComponent as ModalWindowIcon } from "Icons/ModalWindowIcon.svg";
import { ReactComponent as Close } from "Icons/Close.svg";
import {
	defaultStyle,
	duration,
	transitionStyles,
} from "Components/ModalWindows/animation";

import * as ST from "./styled";

type ModalProps = {
	children: JSX.Element;
	isOpen: boolean;
	handleClose: () => void;
	title: string;
};

const ModalFormik: FC<ModalProps> = ({
	children,
	isOpen,
	handleClose,
	title,
}) => {
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
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation();
						}}
					>
						<ST.Window>
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
						</ST.Window>
					</ST.ModalWindow>
				)}
			</Transition>
		</Portal>
	);
};
export default React.memo(ModalFormik);
