import styled from 'styled-components';

export const Courses = styled.div`
  display: flex;
  gap: 41px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 22px;
  & > a {
    width: 100%;
  }
`;

export const WrapperCourses = styled.div`
  width: 100%;
  max-width: 764px;
`;

export const WrapperAddBlock = styled.div`
  position: sticky;
  top: 129px;
  height: max-content;
`;
