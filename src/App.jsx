import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Description from "./components/description/Description";
import Feedback from "./components/feedback/Feedback";
import Options from "./components/options/Options";
import Notification from "./components/notification/Notification";

function App() {
  const [opinions, setOpinions] = useState(() => {
    const savedOpinions = JSON.parse(
      window.localStorage.getItem("saved-opinions")
    );
    if (savedOpinions !== null) {
      return savedOpinions;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem("saved-opinions", JSON.stringify(opinions));
  }, [opinions]);

  const updateFeedback = (feedbackType) => {
    setOpinions({
      ...opinions,
      [feedbackType]: opinions[feedbackType] + 1,
    });
  };
  const resetFeedback = () => {
    setOpinions({
      ...opinions,
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  const totalFeedback = opinions.good + opinions.neutral + opinions.bad;
  const positive = Math.round(
    ((opinions.good + opinions.neutral) / totalFeedback) * 100
  );

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 && (
        <Feedback
          opinions={opinions}
          totalFeedback={totalFeedback}
          positive={positive}
        />
      )}
      {totalFeedback === 0 && <Notification />}
    </>
  );
}

export default App;
