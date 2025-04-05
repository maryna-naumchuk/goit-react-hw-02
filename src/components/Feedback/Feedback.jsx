import styles from './Feedback.module.css';

export default function Feedback({
  keys,
  values,
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <div className={styles.feedbackContainer}>
      {keys.map((key, idx) => (
        <p className={styles.feedbackText} key={key[idx]}>
          {key}: {values[idx]}
        </p>
      ))}
      <p className={styles.feedbackText}>Total: {totalFeedback}</p>
      <p className={styles.feedbackText}>Positive: {positiveFeedback}%</p>
    </div>
  );
}