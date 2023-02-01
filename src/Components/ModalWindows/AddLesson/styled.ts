import styled from 'styled-components';
import Colors from 'Colors';

type WrapperProps = {
  isBorder?: boolean;
};

export const CreateCourse = styled.div`
  width: 688px;
  background: ${Colors.WHITE};
  border-radius: 12px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  top: 10px;
`;

export const Header = styled.div`
  padding: 24px 24px 21px;
  border-bottom: 1px solid ${Colors.BLACK1};
  align-items: center;
  display: flex;
  gap: 16px;
`;

export const Content = styled.div`
  padding: 20px 24px 32px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const Footer = styled.div`
  padding: 24px;
  display: flex;
  gap: 12px;
  align-items: center;
  border-top: 1px solid ${Colors.BLACK1};
`;

export const Title = styled.p`
  font-family: 'Vela Sans';
  font-weight: 700;
  font-size: 20px;
  line-height: 140%;
  color: ${Colors.BLACK1};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Description = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 155%;
  color: ${Colors.GREY1};
  margin-top: 4px;
`;

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  gap: 32px;
  width: 100%;
  border-bottom: ${({ isBorder }) => isBorder && `1px solid ${Colors.BLACK1}`};
  border-top: ${({ isBorder }) => isBorder && `1px solid ${Colors.BLACK1}`};
  padding: ${({ isBorder }) => isBorder && '16px 0'};
`;

export const Name = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 155%;
  width: 160px;
`;

export const WrapperInput = styled.div`
  flex: 1;
`;

export const WrapperAddFile = styled.div`
  display: flex;
  gap: 20px;
  flex: 1;
`;

export const UploadFile = styled.div`
  flex: 1;
  border: 1px solid ${Colors.RGBA_GREY};
  background: ${Colors.WHITE4};
  border-radius: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 16px 0;
`;

export const Instruction = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: ${Colors.GREY1};
  text-align: center;
  width: 100%;
`;

export const WrapperInputs = styled.p`
  width: 70%;
  display: flex;
  align-items: center;
  gap: 8px;
`;
