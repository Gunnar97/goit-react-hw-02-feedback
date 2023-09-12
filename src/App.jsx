import React from 'react';
import Section from 'components/Section/Section';
import FeedbackOptions from 'components/FeedbeackFormBtn/FeedbeackFormBtn';
import Statistics from 'components/Statistics/Statistics';
import { Wrapper } from 'AppStyled';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleButtonClick = eve => {
    this.setState(prev => ({
      [eve.target.name]: prev[eve.target.name] + 1,
    }));
  };
  totalPositivePercentage = () => {
    return this.totalCount === 0
      ? 0
      : Math.ceil((this.state.good / this.totalCount()) * 100);
  };

  totalCount = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  render() {
    return (
      <Wrapper>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleButtonClick}
          />
        </Section>
        <Section title={'Statistics'}>
          <Statistics
            data={this.state}
            totalCount={this.totalCount}
            totalPositivePercentage={this.totalPositivePercentage}
          />
        </Section>
      </Wrapper>
    );
  }
}

export default App;
