import styled from '@emotion/styled';

export const Notification = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;

  margin-top: auto;
  width: 100%;
  height: 36px;

  border-radius: 7px;
  background-color: ${({ color }) => color};
`;
