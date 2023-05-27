import { BiRefresh as IconRefresh } from 'react-icons/bi';
import { Button } from './RefreshButton.styled';

export const RefreshButton = ({ onClick, size }) => (
  <Button title="Reset" onClick={onClick} size={size}>
    <IconRefresh size="100%" />
  </Button>
);
