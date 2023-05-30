import myTheme from 'styles/theme';
import { cap } from 'utils';
import { string, number } from 'prop-types';
import { Option, Label, Button } from './FeedbackOptionsItem.styled';

export const FeedbackOptionsItem = ({
  onClick,
  feedbackType,
  value = 0,
  iconSize = 40,
}) => {
  const Icon = myTheme.icons.feedback[feedbackType];

  return (
    <Option>
      <Button onClick={e => onClick(feedbackType, e)} title={cap(feedbackType)}>
        <Icon size={iconSize} />
      </Button>
      <Label>{value}</Label>
    </Option>
  );
};

FeedbackOptionsItem.propTypes = {
  feedbackType: string.isRequired,
  value: number.isRequired,
};
