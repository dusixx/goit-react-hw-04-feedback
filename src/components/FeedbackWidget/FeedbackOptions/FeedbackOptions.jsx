import { func, number, exact } from 'prop-types';
import { OptionsList } from './FeedbackOptions.styled';
import { FeedbackOptionsItem } from './FeeddbackOptionsItem';

export const FeedbackOptions = ({ value, onLeaveFeedback, iconSize }) => (
  <OptionsList>
    {Object.keys(value).map(feedbackType => (
      <FeedbackOptionsItem
        key={feedbackType}
        feedbackType={feedbackType}
        iconSize={iconSize}
        value={value[feedbackType]}
        onClick={onLeaveFeedback}
      />
    ))}
  </OptionsList>
);

FeedbackOptions.propTypes = {
  onClick: func,
  iconSize: number,
  value: exact({
    bad: number.isRequired,
    neutral: number.isRequired,
    good: number.isRequired,
  }),
};
