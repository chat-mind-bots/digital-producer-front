import React, { Dispatch, FC, useEffect, useState } from "react";

import * as ST from "./styled";
import ErrText from "./ErrText";

export type FocusType = boolean;

export type ErrorType = boolean;

type InputProps = {
	value: string;
	setValue: Dispatch<string>;
	placeholder: string;
	isError?: ErrorType;
	errorText?: string;
	icon?: JSX.Element;
	padding: string;
	fontSize: string;
	fontWeight: string;
	borderSize: string;
	setFocus?: (isTouche: boolean) => void;
	optionalText?: string;
};

const Input: FC<InputProps> = ({
	value,
	setValue,
	placeholder,
	isError,
	errorText,
	icon,
	padding,
	fontSize,
	fontWeight,
	borderSize,
	setFocus,
	optionalText,
}) => {
	const [focusCurrent, setFocusCurrent] = useState<FocusType>(false);

	useEffect(() => {
		setFocus && setFocus(focusCurrent);
	}, [focusCurrent]);

	return (
		<ST.Input>
			<ST.InputWrapper
				isFocus={focusCurrent}
				value={value}
				isError={isError}
				borderSize={borderSize}
			>
				{icon}
				{optionalText && (
					<ST.OptionalText
						// placeholder={placeholder}
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
					onChange={(e) => {
						setValue(e.target.value);
					}}
					padding={padding}
					fontSize={fontSize}
					fontWeight={fontWeight}
				/>
			</ST.InputWrapper>
			{isError && <ErrText value={errorText} />}
		</ST.Input>
	);
};

export default Input;
