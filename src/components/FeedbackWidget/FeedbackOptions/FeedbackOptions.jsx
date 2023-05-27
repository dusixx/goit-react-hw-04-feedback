import { func, number, exact } from 'prop-types';
import { OptionsList } from './FeedbackOptions.styled';
import FeedbackOptionsItem from './FeeddbackOptionsItem';

const FeedbackOptions = ({ values, onLeaveFeedback, iconSize }) => (
  <OptionsList>
    {Object.keys(values).map(feedbackType => (
      <FeedbackOptionsItem
        key={feedbackType}
        feedbackType={feedbackType}
        iconSize={iconSize}
        value={values[feedbackType]}
        onClick={onLeaveFeedback}
      />
    ))}
  </OptionsList>
);

FeedbackOptions.propTypes = {
  onClick: func,
  iconSize: number,

  values: exact({
    bad: number.isRequired,
    neutral: number.isRequired,
    good: number.isRequired,
  }),
};

export default FeedbackOptions;
