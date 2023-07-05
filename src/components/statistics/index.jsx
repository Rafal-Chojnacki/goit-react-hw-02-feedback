import React from 'react';

const Statistic = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = total !== 0 ? (good - bad) / total : 0;
  const positivePercentage = total !== 0 ? (good / total) * 100 : 0;

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Average: {average}</p>
      <p>Positive Percentage: {positivePercentage.toFixed(2)}%</p>
    </div>
  );
};

export default Statistic;
