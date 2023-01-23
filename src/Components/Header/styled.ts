import styled from 'styled-components';
import Colors from 'Colors';

export const Header = styled.div`
  background: ${Colors.WHITE};
  border-bottom: 1px solid ${Colors.WHITE2};
  padding: 12px 40px;
  display: flex;
  justify-content: space-between;
  height: max-content;
  z-index: 9;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 256px;
  width: calc(100% - 256px);
`;
