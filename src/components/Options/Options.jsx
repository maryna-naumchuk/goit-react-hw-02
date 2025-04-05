import styles from './Options.module.css';

export default function Options({
  buttonTitles,
  update,
  totalFeedback,
  reset,
}) {
  return (
    <div className={styles.optionsContainer}>
      {buttonTitles.map((type, idx) => (
        <button
          className={styles.optionsButton}
          key={buttonTitles[idx]}
          onClick={() => update(type)}
          type="button"
        >
          {type}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button className={styles.optionsButton} onClick={reset} type="button">
          Reset
        </button>
      )}
    </div>
  );
}