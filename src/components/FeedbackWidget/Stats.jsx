import { Notification } from './FeedbackWidget.styled';

const MSG_NO_FEEDBACK = 'There is no feedback';

const Stats = ({ total, positive }) => {
  return total ? (
    <Notification color="#e0f4ff">
      <span>
        Total:&nbsp;<b>{total}</b>
      </span>
      <span>
        Positive:&nbsp;<b>{positive}%</b>
      </span>
    </Notification>
  ) : (
    <Notification color="#ffe6d9">{MSG_NO_FEEDBACK}</Notification>
  );
};

export default Stats;
