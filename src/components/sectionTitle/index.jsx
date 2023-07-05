import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/statistics';
import React from 'react';


class SectionTitle extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  handleFeedbackChange = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + this.props.step,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          good={good}
          neutral={neutral}
          bad={bad}
          onFeedbackChange={this.handleFeedbackChange}
        />
        <h2>Statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    );
  }
}

export default SectionTitle;
