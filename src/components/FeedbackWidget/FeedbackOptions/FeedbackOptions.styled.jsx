import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(5)};
`;
