import { CSSProperties } from "react";

export type TransitionStylesProps = {
	entering: CSSProperties;
	entered: CSSProperties;
	exiting: CSSProperties;
	exited: CSSProperties;
	unmounted?: CSSProperties;
};

export const duration = 300;
export const defaultStyle = {
	transition: `opacity ${duration}ms ease-in-out`,
	opacity: 0,
};

export const transitionStyles: TransitionStylesProps = {
	entering: { opacity: 1 },
	entered: { opacity: 1 },
	exiting: { opacity: 0 },
	exited: { opacity: 0, visibility: "hidden" },
};
