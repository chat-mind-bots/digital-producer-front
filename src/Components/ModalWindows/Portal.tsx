import { createPortal } from "react-dom";

type PortalProps = {
	children: JSX.Element;
};
const Portal = ({ children }: PortalProps) => {
	const wrapperElement = document.getElementsByTagName("body")[0];

	return createPortal(children, wrapperElement);
};

export default Portal;
