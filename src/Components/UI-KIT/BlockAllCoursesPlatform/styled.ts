import styled from 'styled-components';
import BreakPoints from 'BreakPoints';

export const ComponentForNavBar = styled.div`
  position: relative;
  width: 216px;
  height: 258px;
  align-self: flex-end;
  @media (max-width: ${BreakPoints.MOBILE}px) {
    display: none;
  }
`;

export const WrapperButton = styled.div`
  position: absolute;
  bottom: 26px;
  left: 50%;
  transform: translate(-50%, 0);
`;
