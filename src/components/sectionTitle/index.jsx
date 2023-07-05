import FeedbackOptions from "components/FeedbackOptions";
import Statistic from "components/Statistics";


export const SectionTitle = (good, neutral, bad) => {
  return (
    <div>
    <h1>Please leave feedback</h1>
    <FeedbackOptions/>
    <h2>Statistics</h2>
    <Statistic/>
    </div>
  );
};
