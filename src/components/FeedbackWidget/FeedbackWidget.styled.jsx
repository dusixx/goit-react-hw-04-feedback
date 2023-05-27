import styled from '@emotion/styled';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 300px;
  padding: ${({ theme }) => theme.spacing(5)};

  color: gray;
  background-color: white;
  box-shadow: ${({ theme }) => theme.shaddow.box};
  border-radius: 7px;
`;

export const Title = styled.h2`
  padding-top: ${({ theme }) => theme.spacing()};
  margin-bottom: ${({ theme }) => theme.spacing(6)};

  font-size: 20px;
  color: ${({ theme }) => theme.color.black};
`;
