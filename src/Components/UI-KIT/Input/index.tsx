import React, { Dispatch, FC, useState } from "react";
import { ReactComponent as IconError } from "Icons/InputIcons/IconError.svg";
import * as ST from "./styled";

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
}) => {
	const [focus, setFocus] = useState<FocusType>(false);

	return (
		<ST.Input>
			<ST.InputWrapper
				isFocus={focus}
				value={value}
				isError={isError}
				borderSize={borderSize}
			>
				{icon}
				<ST.InputElement
					placeholder={placeholder}
					onFocus={() => setFocus(true)}
					onBlur={() => setFocus(false)}
					value={value}
					isError={isError}
					isFocus={focus}
					onChange={(e) => {
						setValue(e.target.value);
					}}
					padding={padding}
					fontSize={fontSize}
					fontWeight={fontWeight}
				/>
			</ST.InputWrapper>
			{isError && (
				<ST.ErrorText>
					<IconError />
					{errorText}
				</ST.ErrorText>
			)}
		</ST.Input>
	);
};

export default Input;
