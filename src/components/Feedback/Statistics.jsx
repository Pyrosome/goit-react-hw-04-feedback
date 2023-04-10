import PropTypes from 'prop-types';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
      <div style={{
        width: '300px'
      }}>
        <p className='goodCounter'> Good: {good} </p>
        <p className='neutralCounter'> Neutral: {neutral} </p>
        <p className='badCounter'> Bad: {bad} </p>
        <p className='totalPercentage '> Total: {total()} </p>
        <p className='positivePercentage '> Positive feedback: {positivePercentage() ? positivePercentage()+'%' : '0'} </p>
      </div>
    )
}

Statistics.propTypes = {
    state: PropTypes.shape({
        bad: PropTypes.number.isRequired,
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
    }),
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired,
}

