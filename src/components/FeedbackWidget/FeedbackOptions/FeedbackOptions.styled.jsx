import styled from '@emotion/styled';

export const OptionsList = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(5)};
`;

export const Option = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
`;

export const Button = styled.button`
  transition: ${({ theme }) => theme.transition('filter')};

  &:hover,
  &:focus-visible {
    filter: brightness(1.1);
  }
`;

export const Label = styled.span`
  font-size: 13px;
`;
