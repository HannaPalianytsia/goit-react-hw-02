import "./App.css";
import { useState } from "react";
import Description from "./components/description/Description";
import Feedback from "./components/feedback/Feedback";
import Options from "./components/options/Options";
import Notification from "./components/notification/Notification";

function App() {
  const [opinions, setOpinions] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = (feedbackType) => {
    setOpinions({
      ...opinions,
      [feedbackType]: opinions[feedbackType] + 1,
    });
  };
  const totalFeedback = opinions.good + opinions.neutral + opinions.bad;

  return (
    <>
      <Description />
      <Options
        opinions={opinions}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
      />
      <Feedback opinions={opinions} totalFeedback={totalFeedback} />
      <Notification totalFeedback={totalFeedback} />
    </>
  );
}

export default App;
