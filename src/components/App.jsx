import React, { useState } from 'react';
import { FeedbackOptions } from './Feedback/FeedbackOptions';
import { Notification } from './Feedback/Notification';
import { Section } from './Feedback/Section';
import { Statistics } from './Feedback/Statistics';

export function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);  
    
    const handleCounter = key => {
      switch (key) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
    }
  
    const countTotalFeedback = () => {
        return good + neutral + bad;
    } 
    
    const countPositiveFeedbackPercentage = () => {
        return Math.round((good / countTotalFeedback()) * 100);
    }

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
              <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={handleCounter}/>
              </Section>
              <Section title='Statistics'>
              
                { countTotalFeedback() > 0 ?
                <Statistics good={good} neutral={neutral} bad={bad} total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage}/>
                :
                <Notification message="There is no feedback" />}
              </Section>
            </div>
        )
    
} 
