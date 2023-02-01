import styled from 'styled-components';
import Colors from 'Colors';

type Props = {
  isActive: boolean;
};

export const Accordion = styled.div`
  background: ${Colors.WHITE};
  border-radius: 16px;
  max-width: 344px;
  box-sizing: border-box;
  padding: 24px 18px 20px;
  height: max-content;
  top: 129px;
  position: sticky;
  border: 2px solid ${Colors.WHITE2};
`;

export const Title = styled.p`
  font-family: 'Vela Sans';
  font-weight: 700;
  font-size: 18px;
  line-height: 140%;
  color: ${Colors.BLACK1};
`;

export const Name = styled.p<Props>`
  font-family: 'Vela Sans';
  font-weight: 700;
  font-size: 12px;
  line-height: 140%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${Colors.GREY4};
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 11px 10px;
  & svg {
    min-width: max-content;
    transform: rotate(${({ isActive }) => (isActive ? '180deg' : '0deg')});
    transition: 0.6s;
    cursor: pointer;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
`;

export const WrapperModule = styled.div`
  background: ${Colors.WHITE3};
  border-radius: 8px;
  padding: 2px;
  box-sizing: border-box;
`;

export const Item = styled.p<Props>`
  font-family: 'Vela Sans';
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 12px;
  color: ${({ isActive }) => (isActive ? Colors.BLUE : Colors.GREY1)};
  background: ${({ isActive }) => (isActive ? Colors.WHITE3 : Colors.WHITE)};
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    background: ${Colors.WHITE3};
    transition: 0.3s;
  }
`;

export const Number = styled.span``;

export const WrapperItems = styled.div<Props>`
  border-radius: 6px;
  overflow: hidden;
  max-height: ${({ isActive }) => (isActive ? '400px' : 0)};
  transition: 1s;
`;

export const WrapperButtonAddLesson = styled.div`
  margin-top: 8px;
  width: 100%;
`;
