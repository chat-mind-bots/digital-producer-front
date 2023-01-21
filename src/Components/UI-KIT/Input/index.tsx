import { Dispatch, FC, useState } from 'react';
import { ReactComponent as IconMail } from 'Icons/InputIcons/IconMail.svg';
import { ReactComponent as IconError } from 'Icons/InputIcons/IconError.svg';
import * as ST from './styled';

export type FocusType = boolean;

export type ErrorType = boolean;

type InputProps = {
  value: string;
  setValue: Dispatch<string>;
  placeholder: string;
  isError: ErrorType;
  errorText: string;
};

const Input: FC<InputProps> = ({
  value,
  setValue,
  placeholder,
  isError,
  errorText,
}) => {
  const [focus, setFocus] = useState<FocusType>(false);

  return (
    <ST.Input>
      <ST.InputWrapper
        isFocus={focus}
        value={value}
        isError={isError}
      >
        <IconMail />
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
        />
      </ST.InputWrapper>
      <ST.ErrorText>
        <IconError />
        {errorText}
      </ST.ErrorText>
    </ST.Input>
  );
};

export default Input;
