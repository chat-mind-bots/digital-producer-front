import React, { Dispatch, FC, useState } from "react";

import { ReactComponent as ArrowDown } from "Icons/ArrowDown.svg";
import { ReactComponent as ArrowUp } from "Icons/ArrowUp.svg";

import * as ST from "./styled";
import ErrText from "./ErrText";

type SelectProps = {
	value: string;
	setValue: Dispatch<string>;
	placeholder: string;
	isError?: boolean;
	errorText?: string;
	icon?: JSX.Element;
	padding: string;
	fontSize: string;
	fontWeight: string;
	borderSize: string;
	optionalText?: string;
	array: { id: string; value: string }[];
};

const Select: FC<SelectProps> = ({
	value,
	placeholder,
	isError,
	errorText,
	icon,
	padding,
	fontSize,
	fontWeight,
	borderSize,
	optionalText,
	array,
	setValue,
}) => {
	const [focusCurrent, setFocusCurrent] = useState<boolean>(false);
	const [open, setOpen] = useState<boolean>(false);

	return (
		<ST.Input>
			<ST.InputWrapper
				isFocus={focusCurrent}
				value={value}
				isError={isError}
				borderSize={borderSize}
				onClick={() => setOpen(!open)}
			>
				{icon}
				{optionalText && (
					<ST.OptionalText
						placeholder={placeholder}
						value={value}
						isError={isError}
						isFocus={focusCurrent}
						padding={padding}
						fontSize={fontSize}
						fontWeight={fontWeight}
					>
						{optionalText}
					</ST.OptionalText>
				)}

				<ST.InputElement
					placeholder={placeholder}
					onFocus={() => setFocusCurrent(true)}
					onBlur={() => setFocusCurrent(false)}
					value={value}
					isError={isError}
					isFocus={focusCurrent}
					padding={padding}
					fontSize={fontSize}
					fontWeight={fontWeight}
				>
					{value || "Выберите из списка"}
				</ST.InputElement>

				<ST.WrapperIco isOpen={open}>
					{open ? <ArrowUp /> : <ArrowDown />}
				</ST.WrapperIco>

				{open && <ST.BlockBackground />}
				{open && (
					<ST.Options>
						{array.map((item) => (
							<ST.OptionsItem
								onClick={() => setValue(item.id)}
								key={`Select-Options-OptionsItem-${item.id}`}
							>
								{item.value}
							</ST.OptionsItem>
						))}
					</ST.Options>
				)}
			</ST.InputWrapper>
			{isError && <ErrText value={errorText} />}
		</ST.Input>
	);
};

export default Select;
