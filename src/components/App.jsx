import { Component } from "react";

import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import{Notification} from "./Notification/Notification";


export class App extends Component{

state = {
  good: 0,
  neutral: 0,
  bad: 0
  };

  handleClick = (option) => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1
      }
    })
  };
  
  
  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = good + neutral + bad;
    const countPositiveFeedbackPercentage = Number.parseInt((good / countTotalFeedback) * 100);
    return (
      <>
        <Section title='Please leave feedback'>
          <FeedbackOptions
            options={options} 
            handleClick={this.handleClick} />
        </Section>
        {countTotalFeedback > 0 ? <Section title='Statistics'>
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage } />
        </Section> : <Notification message="There is no feedback"></Notification>}
        
      </>
  );
  };
};
