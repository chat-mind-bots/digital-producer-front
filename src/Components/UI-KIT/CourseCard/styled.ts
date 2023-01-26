import styled from 'styled-components';
import Colors from 'Colors';

export const CourseCard = styled.div`
  padding: 19px;
  border-radius: 20px;
  background: ${Colors.WHITE};
  max-width: 700px;
  width: 100%;
  display: flex;
  box-sizing: border-box;
  gap: 32px;
  border: 2px solid ${Colors.TRANSPARENT};
  cursor: pointer;
  &:hover {
    border: 2px solid ${Colors.WHITE2};
  }
`;

export const MainWrapper = styled.div``;

export const Title = styled.p`
  font-family: 'Vela Sans';
  font-weight: 600;
  margin-top: 16px;
  font-size: 20px;
  line-height: 140%;
  color: ${Colors.BLACK2};
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  margin-top: 6px;
  color: ${Colors.GREY1};
`;

export const WrapperLevel = styled.div`
  margin-top: 12px;
`;
