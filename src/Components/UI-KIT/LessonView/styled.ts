import styled from 'styled-components';
import Colors from 'Colors';

type Props = {
  isLoading: boolean;
};

type WrapperSubTitleProps = Props & {
  delay: number;
};

export const LessonView = styled.div`
  border-radius: 16px;
  padding: 18px;
  background: ${Colors.WHITE};
  max-width: 666px;
  box-sizing: border-box;
`;

export const Title = styled.p<Props>`
  font-family: 'Vela Sans';
  font-weight: 700;
  font-size: 24px;
  line-height: 140%;
  color: ${Colors.BLACK1};
  margin-top: 20px;
  width: max-content;
  position: relative;
  overflow: hidden;
  &:after {
    content: '';
    width: 100%;
    left: 0;
    top: 0;
    position: absolute;
    background: ${Colors.BLUE};
    height: 100%;
    transform: ${({ isLoading }) => !isLoading && 'translate(-100%, 0)'};
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    transition: 0.5s;
    transition-delay: ${({ isLoading }) => (!isLoading ? '0.1s' : '0.5s')};
    transition-timing-function: ease-in-out;
  }
`;

export const WrapperLevelDifficulty = styled.div`
  margin-top: 18px;
`;

export const WrapperInfo = styled.div`
  gap: 12px;
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
`;

export const SubTitleInfo = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 155%;
  color: ${Colors.GREY1};
  position: relative;
  overflow: hidden;
  width: 100%;
`;

export const TitleInfo = styled.p`
  font-family: 'Vela Sans';
  font-weight: 700;
  font-size: 12px;
  line-height: 155%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: ${Colors.GREY2};
  width: max-content;
`;

export const Loader = styled.div`
  z-index: 1;
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.5s;
}
  &:after {
    content: "";
    display: inline-block;
    font-size: 6.2px;
    border: 1.2em solid ${Colors.BLUE};
    border-right-color: rgba(0,64,128, 0) !important;
    transform: translateZ(0);
    border-radius: 50%;
    width: 10em;
    height: 10em;
    position: absolute;
    top: 50%;
    right: calc(50% - 5em);
    margin-top: -6em;
`;

export const WrapperVideo = styled.div<Props>`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  &:after {
    width: 0;
    height: 0;
    border-top: 363px solid ${Colors.BLUE};
    border-left: 635px solid transparent;
    content: '';
    position: absolute;
    margin-left: -635px;
    transform: ${({ isLoading }) => !isLoading && 'translate(100%, -100%)'};
    transition: 0.7s;
    transition-timing-function: ease-in-out;
  }
  &:before {
    content: '';
    width: 0;
    height: 0;
    border-bottom: 363px solid ${Colors.BLUE};
    border-right: 635px solid transparent;
    position: absolute;
    bottom: 0;
    transform: ${({ isLoading }) => !isLoading && 'translate(-100%, 100%)'};
    transition: 0.7s;
    transition-timing-function: ease-in-out;
  }
  @keyframes colors {
    0% {
      border-color: ${Colors.WHITE};
      border-bottom-color: transparent;
    }
    33% {
      border-color: ${Colors.WHITE1};
      border-bottom-color: transparent;
    }
    66% {
      border-color: ${Colors.WHITE2};
      border-bottom-color: transparent;
    }
    100% {
      border-color: ${Colors.WHITE};
      border-bottom-color: transparent;
    }
  }
  @keyframes spiner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(720deg);
    }
  }
  & ${Loader} {
    opacity: ${({ isLoading }) => isLoading && 1};
    transition-delay: ${({ isLoading }) => (isLoading ? '0.7' : '0.3')}s;
    &:after {
      animation: spiner 1s infinite cubic-bezier(0.53, 0.21, 0.57, 0.85),
        colors 3s infinite cubic-bezier(0.45, -0.03, 1, 0.77);
    }
  }
`;

export const WrapperSubTitle = styled.div<WrapperSubTitleProps>`
  width: 100%;
  max-height: ${({ isLoading }) => (isLoading ? ' 24.8px' : '400px')};
  transition: 1s;
  overflow: hidden;
  position: relative;
  overflow-y: scroll;
  &:after {
    content: '';
    width: 100%;
    left: 0;
    top: 0;
    position: absolute;
    background: ${Colors.BLUE};
    height: 100%;
    transform: ${({ isLoading }) => !isLoading && 'translate(-100%, 0)'};
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    transition: 0.7s;
    transition-delay: ${({ isLoading, delay }) =>
      !isLoading ? `${delay + 0.4}s` : `${delay + 0.4}s`};
    transition-timing-function: ease-in-out;
  }
`;
