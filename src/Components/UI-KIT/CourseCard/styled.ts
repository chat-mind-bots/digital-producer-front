import styled from 'styled-components';
import Colors from 'Colors';

export const CourseCard = styled.div`
  max-width: 700px;
  width: 100%;
`;

export const MainWrapper = styled.div`
  margin-top: -2px;
`;

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

export const Wrapper = styled.div`
  background: ${Colors.WHITE};
  padding: 19px;
  display: flex;
  box-sizing: border-box;
  gap: 32px;
  cursor: pointer;
  border-radius: 20px;
  border: 2px solid ${Colors.TRANSPARENT};
  &:hover {
    border: 2px solid ${Colors.WHITE2};
  }
`;

export const Image = styled.div`
  min-width: 220px;
  border-radius: 16px;
  overflow: hidden;
`;
