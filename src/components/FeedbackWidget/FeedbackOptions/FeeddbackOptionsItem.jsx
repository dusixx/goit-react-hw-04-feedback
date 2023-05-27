import myTheme from 'styles/theme';
import { cap } from 'components/utils';
import { string, number } from 'prop-types';
import { Option, Label, Button } from './FeedbackOptions.styled';

const FeedbackOptionsItem = ({ onClick, type, value = 0, iconSize = 40 }) => {
  const Icon = myTheme.icons.feedback[type];

  return (
    <Option>
      <Button onClick={e => onClick(type, e)} title={cap(type)}>
        <Icon size={iconSize} />
      </Button>
      <Label>{value}</Label>
    </Option>
  );
};

FeedbackOptionsItem.propTypes = {
  type: string.isRequired,
  value: number.isRequired,
};

export default FeedbackOptionsItem;
