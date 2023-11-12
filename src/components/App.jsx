import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Wraper } from './App.styled';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  updateClicks = (type) => {
  this.setState(prevState => {
    return { [type]: prevState[type] + 1 };
  });
};

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const positive = good / total * 100;
    return Math.round(positive);
  };
  render() {
    const options = ['good', 'neutral', 'bad'];
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <Wraper>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.updateClicks}
          />
        </Section>
        {total>0? (<Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>) :  <Notification message="There is no feedback"/>}
       
      </Wraper>
    );
  }
}
