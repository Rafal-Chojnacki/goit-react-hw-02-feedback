import { Component } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/statistics';
import css from '../FeedbackOptions/feedbackOptions.module.css';
import React from 'react';


class SectionTitle extends Component {

  static defaultProps = {
    step: 1,
  };
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
      <div className={css.wrapper}>
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
