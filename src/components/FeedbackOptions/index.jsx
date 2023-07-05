import React, { Component } from "react";
import css from "./feedbackOptions.module.css";

class FeedbackOptions extends Component {
  
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

  handleGood = (evt) => {
    this.setState((prevState) => ({
      good: prevState.good + this.props.step,
    }));
  };

  handleNeutral = (evt) => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + this.props.step,
    }));
  };

  handleBad = (evt) => {
    this.setState((prevState) => ({
      bad: prevState.bad + this.props.step,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <button className={css.goodBtn} type="button" onClick={this.handleGood}>
          Good {good}
        </button>
        <button className={css.neutralBtn} type="button" onClick={this.handleNeutral}>
          Neutral {neutral}
        </button>
        <button className={css.badBtn} type="button" onClick={this.handleBad}>
          Bad {bad}
        </button>
      </div>
      
    );
  }
}

export default FeedbackOptions;
