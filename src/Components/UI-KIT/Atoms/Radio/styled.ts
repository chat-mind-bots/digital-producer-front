import styled from "styled-components";

import Colors from "Colors";

import { RadioProps } from "./index";

export const Radio = styled.p<RadioProps>`
  min-width: 20px;
  min-height: 20px;
  width: 20px;
  height: 20px;
  border: 2px solid ${({ isActive }) =>
		isActive ? Colors.TRANSPARENT : Colors.GREY1};
  border-radius: 5px;
  box-sizing: border-box;
  background: ${({ isActive }) =>
		isActive ? Colors.BLUE : Colors.TRANSPARENT}};
`;
