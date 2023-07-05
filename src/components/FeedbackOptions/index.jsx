import React, { Component } from "react";
import css from "./feedbackOptions.module.css";

class FeedbackOptions extends Component {
  
  static defaultProps = {
    step: 1,
  };

  handleGood = () => {
    this.props.onFeedbackChange("good");
  };

  handleNeutral = () => {
    this.props.onFeedbackChange("neutral");
  };

  handleBad = () => {
    this.props.onFeedbackChange("bad");
  };

  render() {
    return (
      <div>
        <button className={css.goodBtn} type="button" onClick={this.handleGood}>
          Good
        </button>
        <button className={css.neutralBtn} type="button" onClick={this.handleNeutral}>
          Neutral
        </button>
        <button className={css.badBtn} type="button" onClick={this.handleBad}>
          Bad
        </button>
      </div>
    );
  }
}

export default FeedbackOptions;
