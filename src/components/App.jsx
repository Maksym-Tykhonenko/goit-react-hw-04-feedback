import React, { useState } from "react";

import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";
import { Block } from "./App.styled";


export function App () {

  const [good, setGoog] = useState(0);
  const[neutral, setNeutral] = useState(0);
  const[bad, setBad] = useState(0);
  
  const handleClick = (type) => {
    switch (type) {
      case 'good':
        setGoog(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        return;
    };
  };

  const countTotalFidback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Number.parseInt((good / total) * 100);
  }

  const options = ['good', 'neutral', 'bad'];
  const total = countTotalFidback(); 
  const positivePercentage = countPositiveFeedbackPercentage();
  
    return (
      <Block>
        <Section title='Please leave feedback'>
          <FeedbackOptions
            options={options} 
            handleClick={handleClick}
          />
        </Section>
        {total > 0 ? <Section title='Statistics'>
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section> : <Notification message="There is no feedback.....  :-("/>}
        
      </Block>
  );
  };

