import { func, number, exact } from 'prop-types';
import { OptionsList } from './FeedbackOptions.styled';
import FeedbackOptionsItem from './FeeddbackOptionsItem';

const FeedbackOptions = ({ values, onLeaveFeedback, iconSize }) => (
  <OptionsList>
    {Object.keys(values).map(type => (
      <FeedbackOptionsItem
        key={type}
        type={type}
        iconSize={iconSize}
        value={values[type]}
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
