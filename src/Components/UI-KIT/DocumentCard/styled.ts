import styled from 'styled-components';
import Colors from 'Colors';

export const DocumentCard = styled.div`
  padding: 18px;
  border-radius: 16px;
  max-width: 328px;
  box-sizing: border-box;
  background: ${Colors.WHITE};
  border: 2px solid ${Colors.TRANSPARENT};
  cursor: pointer;
  &:hover {
    border: 2px solid ${Colors.WHITE2};
  }
`;

export const Name = styled.p`
  font-family: 'Vela Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  color: ${Colors.BLACK1};
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  & svg {
    transform: rotate(-90deg);
  }
`;

export const Description = styled.p`
  margin-top: 10px;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: ${Colors.GREY1};
`;
