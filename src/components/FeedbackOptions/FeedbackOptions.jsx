import css from './FeedbackOptions.module.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const toLowerCase = option => option.toLowerCase();
  return (
    <ul className={css.feedbackOptions}>
      {options.map(option => (
        <li key={option}>
          <button
            onClick={() => onLeaveFeedback(toLowerCase(option))}
            name={toLowerCase(option)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default FeedbackOptions;
