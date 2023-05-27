import { Notification } from './Stats.styled';

const MSG_NO_FEEDBACK = 'There is no feedback';
const COLOR_INFO = '#e0f4ff';
const COLOR_WARN = '#ffe6d9';

const Stats = ({ total, positive }) => {
  return total ? (
    <Notification color={COLOR_INFO}>
      <span>
        Total:&nbsp;<b>{total}</b>
      </span>
      <span>
        Positive:&nbsp;<b>{positive}%</b>
      </span>
    </Notification>
  ) : (
    <Notification color={COLOR_WARN}>{MSG_NO_FEEDBACK}</Notification>
  );
};

export default Stats;
