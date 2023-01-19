import styled from 'styled-components';
import Colors from 'Colors';

type LevelItemProps = {
  isActive: boolean;
};

export const Insights = styled.div`
  max-width: 760px;
  width: 100%;
  border-radius: 24px;
  background: ${Colors.BLUE1};
  padding: 26px 24px 24px;
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: ${Colors.WHITE};
`;

export const WrapperInfo = styled.div`
  background: ${Colors.WHITE};
  border-radius: 16px;
  width: 100%;
  margin-top: 18px;
  justify-content: space-between;
  display: flex;
  overflow: hidden;
  height: 382px;
`;

export const Tags = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  height: max-content;
`;

export const InsightTitle = styled.p`
  font-family: 'Vela Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
  letter-spacing: -0.5px;
  padding-top: 14px;
  color: ${Colors.BLACK1};
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: ${Colors.GREY1};
  padding-top: 14px;
`;

export const TagItem = styled.p`
  align-items: flex-start;
  padding: 3px 12px;
  gap: 10px;
  border-radius: 6px;
  background: ${Colors.SKYBLUE};
  color: ${Colors.BLUE};
  text-transform: uppercase;
  font-weight: 600;
  font-size: 10px;
  line-height: 20px;
`;

export const WrapperContent = styled.div`
  max-width: 244px;
  padding: 48px 0 48px 36px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

export const WrapperText = styled.div``;

export const Circles = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 28px;
  gap: 24px;
  height: 15px;
  align-items: center;
`;

export const CircleItem = styled.button<LevelItemProps>`
  width: 7.5px;
  height: 7.5px;
  border-radius: 10px;
  background: ${Colors.WHITE};
  box-shadow: ${({ isActive }) =>
    isActive && `0px 0px 0px 3.75px ${Colors.RGBA_LIGHTBLUE}`};
  gap: 24px;
`;

export const WrapperButton = styled.div`
  display: flex;
  height: max-content;
  place-self: flex-end;
`;

export const WrapperInfoContent = styled.div``;

export const IconWrapper = styled.div`
  width: max-content;
`;
