const Feedback = ({ totalFeedback, opinions: { good, neutral, bad } }) => {
  return (
    totalFeedback > 0 && (
      <ul>
        <li>
          <span>Good: </span>
          <span>{good}</span>
        </li>
        <li>
          <span>Neutral: </span>
          <span>{neutral}</span>
        </li>
        <li>
          <span>Bad: </span>
          <span>{bad}</span>
        </li>
      </ul>
    )
  );
};

export default Feedback;
