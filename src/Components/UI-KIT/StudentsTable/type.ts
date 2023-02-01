export type AccordionProps = {
  array: AccordionType[];
  handleClick: (props: HandleClickType) => void;
  onClickAddLesson?: () => void;
  onClickAddModule?: () => void;
};

export type AccordionType = {
  id: number;
  name: string;
  items: {
    id: number;
    name: string;
    isActive: boolean;
  }[];
};

export type HandleClickType = {
  moduleId: number;
  itemId: number;
};
