import styled from 'styled-components';
import Colors from 'Colors';

export const Main = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  padding: 72px 72px 28px 72px;
  max-width: 720px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
`;

export const Header = styled.div`
  display: flex;
  gap: 130px;
  justify-content: space-between;
  & button {
    height: max-content;
  }
`;

export const Footer = styled.div`
  display: flex;
  gap: 24px;
  align-items: flex-end;
`;

export const Name = styled.div`
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  color: ${Colors.GREY1};
`;

export const Content = styled.div`
  padding-right: 56px;
`;

export const Image = styled.div`
  flex: 1;
  background: ${Colors.WHITE5};
  & > img {
    width: 100%;
    height: 100%;
  }
`;

export const WrapperButton = styled.div`
  width: max-content;
`;

export const Logo = styled.div``;
