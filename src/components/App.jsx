import React, { Component } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Notification } from './Feedback/Notification';
import { Section } from './Feedback/Section';
import { Statistics } from './Feedback/Statistics';

export class App extends Component {
        state = {
              good: 0,
              neutral: 0,
              bad: 0
        }    
    
  handleCounter = (key) => {
      this.setState(prevState => ({
        [key]: prevState[key] +1
      }))
    }
    
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state; 
        return good + neutral + bad;
    } 
    
    countPositiveFeedbackPercentage = () => {
        const { good } = this.state; 
        return Math.round((good / this.countTotalFeedback()) * 100);
    }

    render() {
      const { good, neutral, bad } = this.state; 
      const stateKeys = Object.keys(this.state);

        return (
            <div
              style={{
                height: '100vh',
                //margin: '50px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: 30,
                color: '#010101',
                fontFamily: 'Colibri',
                backgroundImage: 'url(https://i.ibb.co/vdJzMPH/imageedit-2-6901719224.png)',
            }}
            >
              
              <Section title='Leave feedback here!'>
                <FeedbackOptions options={stateKeys} onLeaveFeedback={this.handleCounter}/>
              </Section>
              <Section title='Statistics'>
              
                { this.countTotalFeedback() > 0 ?
                <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage}/>
                :
                <Notification message="There is no feedback" />}
              </Section>
            </div>
        )
    }
} 
