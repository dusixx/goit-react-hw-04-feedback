import { Component } from 'react';
import { string } from 'prop-types';
import RefreshButton from '../RefreshButton';
import FeedbackOptions from './FeedbackOptions';
import { Container, Title } from './FeedbackWidget.styled';
import Stats from './Stats';

const initialState = {
  bad: 0,
  neutral: 0,
  good: 0,
};

export default class FeedbackWidget extends Component {
  static propTypes = {
    title: string,
  };

  state = { ...initialState };

  get totalFeedback() {
    return Object.values(this.state).reduce((sum, v) => sum + v, 0);
  }

  getStats = () => {
    const total = this.totalFeedback;
    const positive = ((this.state.good / total) * 100).toFixed(0);
    return { total, positive };
  };

  handleFeedbackLeave = type => {
    this.setState(curState => ({ [type]: curState[type] + 1 }));
  };

  handleFormReset = () => {
    this.setState({ ...initialState });
  };

  render() {
    const { handleFeedbackLeave, getStats, handleFormReset } = this;
    const { title } = this.props;

    return (
      <Container>
        {title && <Title>{title}</Title>}
        <RefreshButton size={18} onClick={handleFormReset} />
        <FeedbackOptions
          values={{ ...this.state }}
          onLeaveFeedback={handleFeedbackLeave}
        />
        <Stats {...getStats()} />
      </Container>
    );
  }
}
