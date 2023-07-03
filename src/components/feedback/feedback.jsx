import React, { useState } from 'react';
import css from './feedback.module.css';

export const Feedback = () => {
  const [goodCount, setGoodCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [badCount, setBadCount] = useState(0);

  const handleGood = () => {
    setGoodCount((prevGoodCount) => prevGoodCount + 1);
  };

  const handleNeutral = () => {
    setNeutralCount((prevNeutralCount) => prevNeutralCount + 1);
  };

  const handleBad = () => {
    setBadCount((prevBadCount) => prevBadCount + 1);
  };

  const countTotalFeedback = () => {
    return goodCount + neutralCount + badCount;
  };

  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0;
    }
    return (goodCount / countTotalFeedback()) * 100;
  };
  const PositiveFeedbackPercentage = Math.ceil(countPositiveFeedbackPercentage());

  return (
    <div>
      <h2>Please leave feedback</h2>
      <div>
        <button className={css.statisticBtn__good} type="button" onClick={handleGood}>
          Good
        </button>
        <button className={css.statisticBtn__neutral} type="button" onClick={handleNeutral}>
          Neutral
        </button>
        <button className={css.statisticBtn__bad} type="button" onClick={handleBad}>
          Bad
        </button>
      </div>
      <h2>Statistics</h2>
      <p>Good: {goodCount}</p>
      <p>Neutral: {neutralCount}</p>
      <p>Bad: {badCount}</p>
      <p>Total: {countTotalFeedback()}</p>
      <p>Positive feedback: {PositiveFeedbackPercentage}%</p>
    </div>
  );
};
