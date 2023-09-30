export type AccordionProps = {
	array: AccordionType[];
	handleClick: (props: HandleClickType) => void;
};

export type AccordionType = {
	id: string;
	name: string;
	logicNumber: number;
	items: {
		id: string;
		name: string;
		isActive: boolean;
		logicNumber: number;
	}[];
};

export type HandleClickType = {
	moduleId: string;
	itemId: string;
};
