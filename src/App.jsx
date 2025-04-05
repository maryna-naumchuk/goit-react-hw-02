import { useState, useEffect } from 'react';
import Section from './components/section/Section';
import Container from './components/Container/Container';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  const [values, setValues] = useState(() => {
    const savedStat = localStorage.getItem('statistic');

    if (savedStat !== null) {
      return JSON.parse(savedStat);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem('statistic', JSON.stringify(values));
  }, [values]);

  const updateFeedback = feedbackType => {
    setValues(prevArr => ({
      ...prevArr,
      [feedbackType]: prevArr[feedbackType] + 1,
    }));
  };

  const totalFeedback = values.good + values.neutral + values.bad;

  const resetTotalFeedback = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const stat = Math.round((values.good / totalFeedback) * 100) || 0;

  return (
    <Section>
      <Container>

        <Description />

        <Options
          buttonTitles={Object.keys(values)}
          update={updateFeedback}
          totalFeedback={totalFeedback}
          reset={resetTotalFeedback}
        />

        {totalFeedback === 0 ? (
          <Notification />
        ) : (
          <Feedback
            keys={Object.keys(values)}
            values={Object.values(values)}
            totalFeedback={totalFeedback}
            positiveFeedback={stat}
          />
        )}
      </Container>
    </Section>
  );
}

export default App;