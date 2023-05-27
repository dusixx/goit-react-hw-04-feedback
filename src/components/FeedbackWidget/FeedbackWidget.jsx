import { useState } from 'react';
import { string } from 'prop-types';
import { RefreshButton } from '../RefreshButton';
import { FeedbackOptions } from './FeedbackOptions';
import { Container, Title } from './FeedbackWidget.styled';
import Stats from './Stats/Stats';

const initialFeedback = {
  bad: 0,
  neutral: 0,
  good: 0,
};

export const FeedbackWidget = ({ title }) => {
  const [feedback, setFeedback] = useState(initialFeedback);

  const getStats = () => {
    const total = Object.values(feedback).reduce((sum, v) => sum + v, 0);
    const positive = ((feedback.good / total) * 100).toFixed(0);

    return { total, positive };
  };

  const handleFeedbackLeave = type => {
    setFeedback(cur => ({ ...cur, [type]: cur[type] + 1 }));
  };

  return (
    <Container>
      {title && <Title>{title}</Title>}
      <RefreshButton size={18} onClick={() => setFeedback(initialFeedback)} />
      <FeedbackOptions value={feedback} onLeaveFeedback={handleFeedbackLeave} />
      <Stats {...getStats()} />
    </Container>
  );
};

FeedbackWidget.propTypes = {
  title: string,
};
