import styles from "./Options.module.css";
const Options = ({ updateFeedback }) => {
  return (
    <div className={styles.options}>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
    </div>
  );
};

export default Options;
