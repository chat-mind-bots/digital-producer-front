import styled from 'styled-components';
import BreakPoints from 'BreakPoints';
import Colors from 'Colors';

export const NewsCard = styled.div`
  background: ${Colors.WHITE};
  border-radius: 24px;
  padding: 18px 18px 24px;
  border: 2px solid ${Colors.TRANSPARENT};
  max-width: 340px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    border: 2px solid ${Colors.WHITE2};
  }
  // TODO: иконки в courseId
  & svg {
    @media (max-width: ${BreakPoints.MOBILE}px) {
      display: none;
    }
  }
`;

export const NewsCardAdmin = styled.div`
  font-size: 100px;
  color: ${Colors.WHITE};
  background: ${Colors.BLUE};
  border-radius: 24px;
  width: 340px;
  height: 448px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${Colors.TRANSPARENT};
  cursor: pointer;
  &:hover {
    border: 2px solid ${Colors.WHITE2};
  }
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  color: ${Colors.BLACK1};
  margin-top: 10px;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: ${Colors.GREY1};
  margin-top: 10px;
`;

export const WrapperTime = styled.div`
  margin-top: 20px;
`;

export const WrapperDate = styled.div`
  margin-top: 12px;
`;
