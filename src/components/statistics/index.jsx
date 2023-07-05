import React from 'react';

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const positivePercentage = total > 0 ? Math.floor((good / total) * 100) : 0;

  return (
    <div>
      {total > 0 ? (
        <>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive Percentage: {positivePercentage}%</p>
        </>
      ) : (
        <p>There is no feedback</p>
      )}
    </div>
  );
};

export default Statistics;
