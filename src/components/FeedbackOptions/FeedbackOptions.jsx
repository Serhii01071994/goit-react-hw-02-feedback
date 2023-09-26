export const FeedbackOptions = ({ handleAddFeedback }) => {
  return (
    <div>
      <ul>
        <li>
          <button type="button" onClick={() => handleAddFeedback('good')}>
            Good
          </button>
        </li>
        <li>
          <button type="button" onClick={() => handleAddFeedback('neutral')}>
            Neutral
          </button>
        </li>
        <li>
          <button type="button" onClick={() => handleAddFeedback('bad')}>
            Bad
          </button>
        </li>
      </ul>
    </div>
  );
};
